import { createSlice } from 'typeDux';

interface RobotUiState {
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
  deliverFormValues: {
    name: 'start_delivery',
    context: {
      dropoff_location: '',
      dropoff_message: '',
      transit_message: '',
    },
  },
};

const deliverSlice = createSlice({
  name: 'deliverSlice',
  initialState,
  reducers: {
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

export const { setDeliverFormValues, resetDeliverFormValues } = deliverSlice.actions;

export default deliverSlice.reducer;
