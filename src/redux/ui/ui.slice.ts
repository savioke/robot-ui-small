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
  isConfirmationNeeded: boolean;
  isScreenTouched: boolean;
  inputName: 'dropoff_location' | 'dropoff_message' | string;
  theme: string;
  language: 'en' | 'es' | 'ja';
  authorized: boolean | null;
  displayState: DisplayState;
  taskConfig: {
    pickup_location: string;
    pickup_message: string;
    dropoff_location: string;
    dropoff_message: string;
  };
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
  isConfirmationNeeded: false,
  isScreenTouched: false,
  inputName: '',
  theme: '',
  language: 'en',
  passCode: '',
  authorized: false,
  taskConfig: {
    pickup_location: '',
    pickup_message: '',
    dropoff_location: '',
    dropoff_message: '',
  },
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
    setTaskConfig: (state, { payload }) => {
      state.taskConfig = payload;
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
  setAuthorized,
  setDisplayState,
  setTransitMessage,
  setNotificationMessage,
  setConfirmationMessage,
  setDeliverStatus,
  setTaskConfig,
} = uiSlice.actions;

export default uiSlice.reducer;
