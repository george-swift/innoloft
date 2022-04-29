import { createSlice } from '@reduxjs/toolkit';

export type ModalState = {
  isEditingCategories: boolean;
  isEditingBusinessModels: boolean;
  isEditingTRL: boolean;
};

const initialState: ModalState = {
  isEditingCategories: false,
  isEditingBusinessModels: false,
  isEditingTRL: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    editCategories: () => ({
      ...initialState,
      isEditingCategories: true,
    }),
    editBusinessModels: () => ({
      ...initialState,
      isEditingBusinessModels: true,
    }),
    editTRL: () => ({
      ...initialState,
      isEditingTRL: true,
    }),
    closeModal: () => initialState,
  },
});

export const { editCategories, editBusinessModels, editTRL, closeModal } =
  modalSlice.actions;

export default modalSlice.reducer;
