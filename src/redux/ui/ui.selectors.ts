import { RootState } from 'typeDux';

export const getDisplayScreen = (state: RootState) => {
  return state.ui.displayScreen;
};

export const getDisplayMessage = (state: RootState) => {
  return state.ui.displayMessage;
};

export const getDeliverFormValues = (state: RootState) => {
  return state.ui.deliverFormValues;
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

export const getDeliverLocations = (state: RootState) => {
  return state.ui.deliverLocations;
};

export const getMingleLocations = (state: RootState) => {
  return state.ui.mingleLocations;
};

export const getIsConfirmationNeeded = (state: RootState) => {
  return state.ui.isConfirmationNeeded;
};
