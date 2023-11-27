import { RootState } from 'typeDux';

export const getDeliverFormValues = (state: RootState) => {
  return state.deliver.formValues;
};
