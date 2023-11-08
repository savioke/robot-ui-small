import { createSlice } from 'typeDux';
import { DisplayScreenOptions } from '../../constants';
import { DeliverStatus, DisplayState } from 'types/r2c2';

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
  | 'Multiple select favorites'
  | 'Utilities'
  | 'CancelTask'
  | 'CancelTaskConfirmation'
  | 'Search'
  | 'Status';

interface RobotUiState {
  displayScreen: DisplayScreen;
  deliverStatus: DeliverStatus | '';
  passCode: string;
  displayMessage: string;
  transitMessage: string;
  notificationMessage: '';
  confirmationMessage: '';
  isScreenTouched: boolean;
  theme: string;
  language: 'en' | 'es' | 'ja';
  authorized: boolean | null;
  displayState: DisplayState;
}

export const initialState: RobotUiState = {
  displayScreen: DisplayScreenOptions.Home,
  deliverStatus: '',
  displayMessage: '',
  transitMessage: '',
  notificationMessage: '',
  confirmationMessage: '',
  displayState: {
    hostname: '',
    nickname: '',
    connected: false,
    battery: {
      voltage: 0,
      percent: 0,
      level: '',
      chargingDock: false,
      chargingPlug: false,
    },
  },
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
    setDisplayState: (state, { payload }) => {
      state.displayState = payload;
    },
    setDeliverStatus: (state, { payload }) => {
      state.deliverStatus = payload;
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
  setDisplayState,
  setTransitMessage,
  setNotificationMessage,
  setConfirmationMessage,
  setDeliverStatus,
} = uiSlice.actions;

export default uiSlice.reducer;
