import { RootState } from 'typeDux';

export const getMappingFormValues = (state: RootState) => {
  return state.mapping.formValues;
};
