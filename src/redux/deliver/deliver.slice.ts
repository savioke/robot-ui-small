import { createSlice } from 'typeDux';
import { TaskConfigDeliver, TaskFormValues } from 'types/r2c2';

interface DeliverState {
  formValues: TaskFormValues<TaskConfigDeliver>;
}

export const initialState: DeliverState = {
  formValues: {
    type: 'DELIVER',
    version: '2.0',
    config: {
      dropoff_location: '',
      dropoff_message: '',
    },
  },
};

const deliverSlice = createSlice({
  name: 'deliverSlice',
  initialState,
  reducers: {
    setDeliverFormValues: (state, { payload }) => {
      state.formValues = {
        ...state.formValues,
        config: {
          ...state.formValues.config,
          ...payload,
        },
      };
    },
    resetDeliverFormValues: (state) => {
      state.formValues = initialState.formValues;
    },
  },
});

export const { setDeliverFormValues, resetDeliverFormValues } = deliverSlice.actions;

export default deliverSlice.reducer;
