import { createSlice } from 'typeDux';
import { DisplayScreenOptions } from '../../constants';

type DisplayScreen =
  | 'Actions'
  | 'Deliver Form'
  | 'Dashboard'
  | 'Home'
  | 'Passcode'
  | 'Settings'
  | 'Delivery dashboard'
  | 'Room number'
  | 'Delivery message'
  | 'Delivery summary'
  | 'Favorites'
  | 'Utilities'
  | 'CancelTask'
  | 'CancelTaskConfirmation'
  | 'Search';

interface RobotUiState {
  displayScreen: DisplayScreen;
  passCode: string;
  displayMessage: string;
  isConfirmationNeeded: boolean;
  isScreenTouched: boolean;
  inputName: 'dropoff_location' | 'dropoff_message' | string;
  theme: string;
  language: 'en' | 'es' | 'ja';
}

export const initialState: RobotUiState = {
  displayScreen: DisplayScreenOptions.Home,
  displayMessage: '',
  isConfirmationNeeded: false,
  isScreenTouched: false,
  inputName: '',
  theme: '',
  language: 'en',
  passCode: '',
};

const uiSlice = createSlice({
  name: 'uiSlice',
  initialState,
  reducers: {
    setInputName: (state, { payload }) => {
      state.inputName = payload;
    },
    setTheme: (state, { payload }) => {
      state.theme = payload;
    },
    setIsConfirmationNeeded: (state, { payload }) => {
      state.isConfirmationNeeded = payload;
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
    setPasscode: (state, { payload }) => {
      state.passCode = payload;
    },
  },
});

export const {
  setIsConfirmationNeeded,
  setInputName,
  setDisplayScreen,
  setDisplayMessage,
  setIsScreenTouched,
  setTheme,
  setLanguage,
  setPasscode,
} = uiSlice.actions;

export default uiSlice.reducer;
