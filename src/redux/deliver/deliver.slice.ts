import { createSlice } from 'typeDux';
import { NavigationGoal, DeliverValues } from 'types/r2c2';

interface DeliverState {
  deliverLocations: NavigationGoal[];
  formValues: DeliverValues;
}

export const initialState: DeliverState = {
  deliverLocations: [],
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
    setDeliverLocations: (state, { payload }) => {
      state.deliverLocations = payload.filter(
        (location: NavigationGoal) => !location?.tags?.includes('internal'),
      );
    },
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

export const { setDeliverFormValues, resetDeliverFormValues, setDeliverLocations } =
  deliverSlice.actions;

export default deliverSlice.reducer;
