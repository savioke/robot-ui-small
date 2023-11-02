import { createSlice } from 'typeDux';
import { DisplayScreenOptions } from '../../constants';
import { NavigationGoal } from 'types/r2c2';

type DisplayScreen =
  | 'Actions'
  | 'Deliver Form'
  | 'Dashboard'
  | 'Home'
  | 'Passcode'
  | 'Settings'
  | 'Delivery dashboard'
  | 'Room number'
  | 'Room message'
  | 'Room summary'
  | 'Favorites'
  | 'Utilities'
  | 'CancelTask'
  | 'CancelTaskConfirmation'
  | 'Search';

interface RobotUiState {
  deliverLocations: NavigationGoal[];
  mingleLocations: NavigationGoal[];
  displayScreen: DisplayScreen;
  displayMessage: string;
  isConfirmationNeeded: boolean;
  isScreenTouched: boolean;
  inputName: 'dropoff_location' | 'dropoff_message' | string;
  theme: string;
  language: 'en' | 'es' | 'ja';
  deliverFormValues: {
    name: 'start_delivery';
    context: {
      dropoff_location: string;
      dropoff_message: string;
      transit_message: string;
    };
  };
}

export const initialState: RobotUiState = {
  displayScreen: DisplayScreenOptions.Home,
  deliverLocations: [],
  mingleLocations: [],
  displayMessage: '',
  isConfirmationNeeded: false,
  isScreenTouched: false,
  inputName: '',
  theme: '',
  language: 'en',
  deliverFormValues: {
    name: 'start_delivery',
    context: {
      dropoff_location: '',
      dropoff_message: '',
      transit_message: '',
    },
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
    setNavigationLocations: (state, { payload }) => {
      state.deliverLocations = payload.filter(
        (location: NavigationGoal) => !location?.tags?.includes('internal'),
      );
      state.mingleLocations = payload.filter(
        (location: NavigationGoal) => location?.tags?.includes('Mingle'),
      );
    },
    setDeliverFormValues: (state, { payload }) => {
      state.deliverFormValues = {
        ...state.deliverFormValues,
        context: {
          ...state.deliverFormValues.context,
          ...payload,
        },
      };
    },
    resetDeliverFormValues: (state) => {
      state.deliverFormValues = initialState.deliverFormValues;
    },
  },
});

export const {
  setIsConfirmationNeeded,
  setNavigationLocations,
  setDeliverFormValues,
  setInputName,
  setDisplayScreen,
  setDisplayMessage,
  setIsScreenTouched,
  setTheme,
  setLanguage,
  resetDeliverFormValues,
} = uiSlice.actions;

export default uiSlice.reducer;
