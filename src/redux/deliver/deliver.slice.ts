import { createSlice } from 'typeDux';
import { NavigationGoal } from 'types/r2c2';

interface DeliverState {
  deliverLocations: NavigationGoal[];
  deliverFormValues: {
    name: 'start_delivery';
    context: {
      dropoff_location: string;
      dropoff_message: string;
      transit_message: string;
    };
  };
}

export const initialState: DeliverState = {
  deliverLocations: [],
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
    setDeliverLocations: (state, { payload }) => {
      state.deliverLocations = payload.filter(
        (location: NavigationGoal) => !location?.tags?.includes('internal'),
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

export const { setDeliverFormValues, resetDeliverFormValues, setDeliverLocations } =
  deliverSlice.actions;

export default deliverSlice.reducer;
