import { RootState } from 'typeDux';

export const getTaskConfig = (state: RootState) => {
  return state.r2c2.taskConfig;
};

export const getDisplayState = (state: RootState) => {
  return state.r2c2.displayState;
};

export const getBatteryState = (state: RootState) => {
  return state.r2c2.displayState.battery;
};

export const getDeliverStatus = (state: RootState) => {
  return state.r2c2.deliverStatus;
};

export const getUser = (state: RootState) => {
  return state.r2c2.user;
};

export const getFavorites = (state: RootState) => {
  return state.r2c2.favorites;
};

export const getUtilities = (state: RootState) => {
  return state.r2c2.utilities;
};

export const getGoals = (state: RootState) => {
  return state.r2c2.goals;
};

export const getMaps = (state: RootState) => {
  return state.r2c2.maps;
};

export const getDashboardOptions = (state: RootState) => {
  return state.r2c2.maps;
};

export const getDeliveryOptions = (state: RootState) => {
  return state.r2c2.deliveryOptions;
};
