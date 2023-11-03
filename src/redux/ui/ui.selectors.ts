import { RootState } from 'typeDux';

export const getDisplayScreen = (state: RootState) => {
  return state.ui.displayScreen;
};

export const getDisplayMessage = (state: RootState) => {
  return state.ui.displayMessage;
};

export const getInputName = (state: RootState) => {
  return state.ui.inputName;
};

export const getTheme = (state: RootState) => {
  return state.ui.theme;
};

export const getLanguage = (state: RootState) => {
  return state.ui.language;
};

export const getIsConfirmationNeeded = (state: RootState) => {
  return state.ui.isConfirmationNeeded;
};

export const getIsScreenTouched = (state: RootState) => {
  return state.ui.isScreenTouched;
};
