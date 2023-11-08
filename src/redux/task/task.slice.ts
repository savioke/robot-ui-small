import { createSlice } from 'typeDux';
import { TaskConfig } from 'types/r2c2';

interface TaskState {
  taskConfig: TaskConfig;
}

export const initialState: TaskState = {
  taskConfig: {
    pickup_location: '',
    pickup_message: '',
    dropoff_location: '',
    dropoff_message: '',
  },
};

const taskSlice = createSlice({
  name: 'taskSlice',
  initialState,
  reducers: {
    setTaskConfig: (state, { payload }) => {
      state.taskConfig = payload;
    },
  },
});

export const { setTaskConfig } = taskSlice.actions;

export default taskSlice.reducer;
