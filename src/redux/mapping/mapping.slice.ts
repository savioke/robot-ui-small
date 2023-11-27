import { createSlice } from 'typeDux';
import { TaskConfigMapping, TaskFormValues } from 'types/r2c2';

interface MappingState {
  formValues: TaskFormValues<TaskConfigMapping>;
}

export const initialState: MappingState = {
  formValues: {
    type: 'RUN_MAPPING',
    version: '2.0',
    config: {
      name: '',
      override_existing: false,
    },
  },
};

const mappingSlice = createSlice({
  name: 'goToSlice',
  initialState,
  reducers: {
    setMappingFormValues: (state, { payload }) => {
      state.formValues = {
        ...state.formValues,
        config: {
          ...state.formValues.config,
          ...payload,
        },
      };
    },
    resetMappingFormValues: (state) => {
      state.formValues = initialState.formValues;
    },
  },
});

export const { setMappingFormValues, resetMappingFormValues } = mappingSlice.actions;

export default mappingSlice.reducer;
