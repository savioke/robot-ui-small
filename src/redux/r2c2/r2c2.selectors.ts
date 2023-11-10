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

export const getIsRelayRoboticsEmployee = (state: RootState) => {
  return (
    state.r2c2.user.org === 'org_lrZufETqIbfEmbPy' || state.r2c2.user.org === 'org_PeQjFz4IO7Ph3jJp'
  );
};

export const getFavorites = (state: RootState) => {
  return state.r2c2.favorites;
};