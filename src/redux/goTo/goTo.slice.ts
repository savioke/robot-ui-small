import { createSlice } from 'typeDux';
import { TaskConfigGoTo, TaskFormValues } from 'types/r2c2';

interface GoToState {
  formValues: TaskFormValues<TaskConfigGoTo>;
}

export const initialState: GoToState = {
  formValues: {
    type: 'GO_TO',
    version: '2.0',
    config: {
      destination: '',
      transit_message: '',
    },
  },
};

const goToSlice = createSlice({
  name: 'goToSlice',
  initialState,
  reducers: {
    setGoToFormValues: (state, { payload }) => {
      state.formValues = {
        ...state.formValues,
        config: {
          ...state.formValues.config,
          ...payload,
        },
      };
    },
    resetGoToFormValues: (state) => {
      state.formValues = initialState.formValues;
    },
  },
});

export const { setGoToFormValues, resetGoToFormValues } = goToSlice.actions;

export default goToSlice.reducer;
