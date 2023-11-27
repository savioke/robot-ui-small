import { RootState } from 'typeDux';

export const getDisplayScreen = (state: RootState) => {
  return state.ui.displayScreen;
};

export const getDisplayMessage = (state: RootState) => {
  return state.ui.displayMessage;
};

export const getTheme = (state: RootState) => {
  return state.ui.theme;
};

export const getLanguage = (state: RootState) => {
  return state.ui.language;
};

export const getIsScreenTouched = (state: RootState) => {
  return state.ui.isScreenTouched;
};

export const getPasscode = (state: RootState) => {
  return state.ui.passCode;
};

export const getAuthorized = (state: RootState) => {
  return state.ui.authorized;
};

export const getTransitMessage = (state: RootState) => {
  return state.ui.transitMessage;
};

export const getNotificationMessage = (state: RootState) => {
  return state.ui.notificationMessage;
};

export const getConfirmationMessage = (state: RootState) => {
  return state.ui.confirmationMessage;
};

export const getPlayShimmySound = (state: RootState) => {
  return state.ui.playShimmySound;
};

export const getPlayNavStartSound = (state: RootState) => {
  return state.ui.playNavStartSound;
};

export const getIsIdleBehaviorInterrupted = (state: RootState) => {
  return state.ui.isIdleBehaviorInterrupted;
};
