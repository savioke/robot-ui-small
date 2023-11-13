import { createSlice } from 'typeDux';
import { TaskConfig, DisplayState, AuthUser, UtilityActions, Favorite } from 'types/r2c2';

interface R2C2State {
  deliverStatus: number;
  displayState: DisplayState;
  taskConfig: TaskConfig;
  user: AuthUser;
  favorites: Favorite[];
  utilities: UtilityActions[];
  goals: string[];
}

export const initialState: R2C2State = {
  deliverStatus: 0,
  taskConfig: {
    pickup_location: '',
    pickup_message: '',
    dropoff_location: '',
    dropoff_message: '',
  },
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
  user: {
    id: '',
    org: '',
  },
  favorites: [],
  utilities: [],
  goals: [],
};

const r2c2Slice = createSlice({
  name: 'r2c2Slice',
  initialState,
  reducers: {
    setDisplayState: (state, { payload }) => {
      state.displayState = payload;
    },
    setDeliverStatus: (state, { payload }) => {
      state.deliverStatus = payload;
    },
    setTaskConfig: (state, { payload }) => {
      state.taskConfig = payload;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setFavorites: (state, { payload }) => {
      state.favorites = payload;
    },
    setUtilities: (state, { payload }) => {
      state.utilities = payload;
    },
    setGoals: (state, { payload }) => {
      state.goals = payload;
    },
  },
});

export const {
  setTaskConfig,
  setDisplayState,
  setDeliverStatus,
  setUser,
  setFavorites,
  setUtilities,
  setGoals,
} = r2c2Slice.actions;

export default r2c2Slice.reducer;
