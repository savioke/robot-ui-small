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
  maps: string[];
  dashboardOptions: string[];
  deliveryOptions: string[];
  idleStatus: number;
}

export const initialState: R2C2State = {
  deliverStatus: 0,
  idleStatus: 0,
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
  maps: [],
  dashboardOptions: [],
  deliveryOptions: [],
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
    setMaps: (state, { payload }) => {
      state.maps = payload;
    },
    setDashboardOptions: (state, { payload }) => {
      state.dashboardOptions = payload;
    },
    setDeliveryOptions: (state, { payload }) => {
      state.deliveryOptions = payload;
    },
    setIdleStatus: (state, { payload }) => {
      state.idleStatus = payload;
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
  setMaps,
  setDashboardOptions,
  setDeliveryOptions,
  setIdleStatus,
} = r2c2Slice.actions;

export default r2c2Slice.reducer;
