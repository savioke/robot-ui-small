import { RootState } from 'typeDux';

export const getGoToFormValues = (state: RootState) => {
  return state.goTo.formValues;
};
