import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { useEditProductMutation } from '../../services/product';
import { TItem } from '../../utils';
import { IconEdit } from '../icons';
import { editCategories, editBusinessModels, editTRL } from './modalSlice';
import RichTextEditor from './richtexteditor';
import {
  StyledAttribute,
  StyledDescription,
  StyledTabContent,
  StyledTabs,
  StyledTag,
} from './styles';

type TabsProps = {
  description: string;
  categories: TItem[];
  businessModels: TItem[];
  trl: string;
};

const Tabs = ({ description, categories, businessModels, trl }: TabsProps) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(0);
  const [descriptionIndex] = useState(0);
  const [attributesIndex] = useState(1);
  const [showEditor, setShowEditor] = useState(false);
  const [preview, setPreview] = useState(description);
  const [editProduct] = useEditProductMutation();

  const toggleRichTextEditor = () => {
    if (showEditor) {
      editProduct({ description: preview });
      setShowEditor(!showEditor);
    } else {
      setShowEditor(!showEditor);
    }
  };

  const tabControls = [
    {
      index: descriptionIndex,
      name: 'Description',
    },
    {
      index: attributesIndex,
      name: 'Attributes',
    },
  ];

  return (
    <>
      <StyledTabs aria-label="Tab buttons">
        {tabControls.map(({ index, name }) => (
          <button
            key={name}
            type="button"
            className={value !== index ? 'disabled' : ''}
            aria-controls={`tabContent-${index}`}
            onClick={() => setValue(index)}
          >
            {name}
          </button>
        ))}
      </StyledTabs>
      <StyledTabContent
        value={value}
        index={descriptionIndex}
        aria-labelledby={`tabContent-${descriptionIndex}`}
      >
        <StyledDescription dangerouslySetInnerHTML={{ __html: description }} />
        <button type="button" onClick={toggleRichTextEditor}>
          <IconEdit />
        </button>
        {showEditor && (
          <RichTextEditor description={description} setter={setPreview} />
        )}
      </StyledTabContent>
      <StyledTabContent
        value={value}
        index={attributesIndex}
        aria-labelledby={`tabContent-${attributesIndex}`}
      >
        <StyledAttribute>
          <h3>
            Categories
            <button type="button" onClick={() => dispatch(editCategories())}>
              <IconEdit />
            </button>
          </h3>
          <ul>
            {categories.map(({ id, name }) => (
              <StyledTag key={id}># {name}</StyledTag>
            ))}
          </ul>
        </StyledAttribute>
        <StyledAttribute>
          <h3>
            Business Models
            <button
              type="button"
              onClick={() => dispatch(editBusinessModels())}
            >
              <IconEdit />
            </button>
          </h3>
          <ul>
            {businessModels.map(({ id, name }) => (
              <StyledTag key={id}># {name}</StyledTag>
            ))}
          </ul>
        </StyledAttribute>
        <StyledAttribute>
          <h3>
            Technology Readiness Level
            <button type="button" onClick={() => dispatch(editTRL())}>
              <IconEdit />
            </button>
          </h3>
          <p>{trl}</p>
        </StyledAttribute>
      </StyledTabContent>
    </>
  );
};

export default Tabs;
