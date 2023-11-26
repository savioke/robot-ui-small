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
  authorized: {
    method: 'badge' | 'pin' | '';
    state: boolean | null;
  };
  playShimmySound: boolean;
  playNavStartSound: boolean;
  isIdleBehaviorInterrupted: boolean;
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
  authorized: {
    method: '',
    state: null,
  },
  playShimmySound: false,
  playNavStartSound: false,
  isIdleBehaviorInterrupted: false,
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
    setPlayShimmySound: (state, { payload }) => {
      state.playShimmySound = payload;
    },
    setPlayNavStartSound: (state, { payload }) => {
      state.playNavStartSound = payload;
    },
    setIsIdleBehaviorInterrupted: (state, { payload }) => {
      state.isIdleBehaviorInterrupted = payload;
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
  setPlayShimmySound,
  setPlayNavStartSound,
  setIsIdleBehaviorInterrupted,
} = uiSlice.actions;

export default uiSlice.reducer;
