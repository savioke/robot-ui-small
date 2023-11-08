import { createSlice } from 'typeDux';
import { TaskConfig, DisplayState, DeliverStatus } from 'types/r2c2';

interface R2C2State {
  deliverStatus: DeliverStatus | '';
  displayState: DisplayState;
  taskConfig: TaskConfig;
}

export const initialState: R2C2State = {
  deliverStatus: '',
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
  },
});

export const { setTaskConfig, setDisplayState, setDeliverStatus } = r2c2Slice.actions;

export default r2c2Slice.reducer;
