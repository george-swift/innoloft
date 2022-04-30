import React, { useState, useId, ChangeEvent } from 'react';
import { v4 as uuid } from 'uuid';
import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEditProductMutation } from '../../services/product';
import { closeModal } from './modalSlice';
import { TItem, TRLs, extractTRL, isExistingTag } from '../../utils';
import {
  StyledModal,
  StyledModalDialog,
  StyledModalContent,
  StyledTag,
  StyledForm,
} from './styles';

type ModalProps = {
  categories: TItem[];
  businessModels: TItem[];
  trl: string;
};

const customHeadingFor = (modal: RootState['modal']) => {
  switch (true) {
    case modal.isEditingCategories:
      return <h5>Edit Categories</h5>;
    case modal.isEditingBusinessModels:
      return <h5>Edit Business Models</h5>;
    case modal.isEditingTRL:
      return <h5>Edit TRL</h5>;
    default:
      return <h5>Edit Attribute</h5>;
  }
};

const Modal = ({ categories, businessModels, trl }: ModalProps) => {
  const dispatch = useAppDispatch();
  const formId = useId();
  const [modalState, setModalState] = useState({
    categories,
    businessModels,
    trl,
  });

  const isModalOpen = useAppSelector(state =>
    Object.values(state.modal).some(Boolean),
  );

  const modalStore = useAppSelector(state => state.modal);

  const [tagName, setTagName] = useState('');
  const [readinessLevel, setReadinessLevel] = useState(extractTRL(trl));

  const handler =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) =>
      setter(e.currentTarget.value);

  const addToCategories = (name: string) => {
    if (!name.length || isExistingTag(modalState.categories, name)) return;

    const newCategory = { id: uuid(), name };
    setModalState({
      ...modalState,
      categories: [...modalState.categories, newCategory],
    });
    setTagName('');
  };

  const addToBusinessModels = (name: string) => {
    if (!name.length || isExistingTag(modalState.businessModels, name)) return;

    const newCategory = { id: uuid(), name };
    setModalState({
      ...modalState,
      businessModels: [...modalState.businessModels, newCategory],
    });
    setTagName('');
  };

  const removeTag = (index: number, key: keyof ModalProps) => {
    const modifiedTags = [
      ...modalState[key].slice(0, index),
      ...modalState[key].slice(index + 1),
    ];
    setModalState({ ...modalState, [key]: modifiedTags });
  };

  const hideModal = () => {
    setTagName('');
    dispatch(closeModal());
  };

  const [editProduct] = useEditProductMutation();

  const callEditEndpoint = () => {
    editProduct(modalState);
    hideModal();
  };

  const manageTaggedAttributes = (modal: RootState['modal']) => {
    if (modal.isEditingCategories)
      return (
        <>
          <ul>
            <li>Current Tags</li>
            {modalState.categories.map(({ id, name }, index) => (
              <StyledTag key={id}>
                # {name}
                <button
                  type="button"
                  className="close"
                  onClick={() => removeTag(index, 'categories')}
                >
                  &times;
                </button>
              </StyledTag>
            ))}
          </ul>
          <StyledForm>
            <div className="field-group">
              <input
                id={formId}
                value={tagName}
                onChange={handler(setTagName)}
                placeholder="Enter new model e.g B2C"
                minLength={1}
                required
              />
              <label htmlFor={formId}>Name</label>
            </div>
            <div className="button-group">
              <button type="button" onClick={() => addToCategories(tagName)}>
                Add Tag
              </button>
              <button type="button" onClick={callEditEndpoint}>
                Save Changes
              </button>
            </div>
          </StyledForm>
        </>
      );

    return (
      <>
        <ul>
          <li>Current Tags</li>
          {modalState.businessModels.map(({ id, name }, index) => (
            <StyledTag key={id}>
              # {name}
              <button
                type="button"
                className="close"
                onClick={() => removeTag(index, 'businessModels')}
              >
                &times;
              </button>
            </StyledTag>
          ))}
        </ul>
        <StyledForm>
          <div className="field-group">
            <input
              id={formId}
              value={tagName}
              onChange={handler(setTagName)}
              placeholder="Enter new model e.g On Demand"
              minLength={2}
              required
            />
            <label htmlFor={formId}>Name</label>
          </div>
          <div className="button-group">
            <button type="button" onClick={() => addToBusinessModels(tagName)}>
              Add Tag
            </button>
            <button type="button" onClick={callEditEndpoint}>
              Save Changes
            </button>
          </div>
        </StyledForm>
      </>
    );
  };

  return (
    <StyledModal visible={isModalOpen}>
      <StyledModalDialog>
        <StyledModalContent>
          <div className="modal-header">
            {customHeadingFor(modalStore)}
            <button type="button" onClick={hideModal}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            {modalStore.isEditingTRL ? (
              <StyledForm>
                <div className="field-group">
                  <small>{TRLs[readinessLevel]}</small>
                  <select
                    id={`trl-${formId}`}
                    value={readinessLevel}
                    onChange={handler(setReadinessLevel)}
                  >
                    <option value={readinessLevel}>{readinessLevel}</option>
                    {Object.keys(TRLs).map(level => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                  <label htmlFor={`trl-${formId}`}>
                    Technology Readiness Level
                  </label>
                  <div className="arrow" />
                </div>

                <button type="button" onClick={callEditEndpoint}>
                  Save changes
                </button>
              </StyledForm>
            ) : (
              manageTaggedAttributes(modalStore)
            )}
          </div>
        </StyledModalContent>
      </StyledModalDialog>
    </StyledModal>
  );
};

export default Modal;
