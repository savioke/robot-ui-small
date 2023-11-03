import { RootState } from 'typeDux';

export const getDeliverFormValues = (state: RootState) => {
  return state.deliver.deliverFormValues;
};

export const getDeliverLocations = (state: RootState) => {
  return [...state.deliver.deliverLocations].sort(
    (a, b) => -b.floor_name.localeCompare(a.floor_name),
  );
};
