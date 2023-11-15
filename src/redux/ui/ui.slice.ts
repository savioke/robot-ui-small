import { createSlice } from 'typeDux';
import { DisplayScreenOptions } from '../../constants';
import { DisplayScreen } from './ui.types';

interface RobotUiState {
  displayScreen: DisplayScreen;
  passCode: string;
  displayMessage: string;
  transitMessage: string;
  notificationMessage: string;
  confirmationMessage: string;
  isScreenTouched: boolean;
  theme: string;
  language: 'en' | 'es' | 'ja';
  authorized: boolean | null;
}

export const initialState: RobotUiState = {
  displayScreen: DisplayScreenOptions.Home,
  displayMessage: '',
  transitMessage: '',
  notificationMessage: '',
  confirmationMessage: '',
  isScreenTouched: false,
  theme: '',
  language: 'en',
  passCode: '',
  authorized: false,
};

const uiSlice = createSlice({
  name: 'uiSlice',
  initialState,
  reducers: {
    setTheme: (state, { payload }) => {
      state.theme = payload;
    },
    setIsScreenTouched: (state, { payload }) => {
      state.isScreenTouched = payload;
    },
    setLanguage: (state, { payload }) => {
      state.language = payload;
    },
    setDisplayScreen: (state, { payload }) => {
      state.displayScreen = payload;
    },
    setDisplayMessage: (state, { payload }) => {
      state.displayMessage = payload;
    },
    setTransitMessage: (state, { payload }) => {
      state.transitMessage = payload;
    },
    setNotificationMessage: (state, { payload }) => {
      state.notificationMessage = payload;
    },
    setConfirmationMessage: (state, { payload }) => {
      state.confirmationMessage = payload;
    },
    setPasscode: (state, { payload }) => {
      state.passCode = payload;
    },
    setAuthorized: (state, { payload }) => {
      state.authorized = payload;
    },
  },
});

export const {
  setDisplayScreen,
  setDisplayMessage,
  setIsScreenTouched,
  setTheme,
  setLanguage,
  setPasscode,
  setAuthorized,
  setTransitMessage,
  setNotificationMessage,
  setConfirmationMessage,
} = uiSlice.actions;

export default uiSlice.reducer;
