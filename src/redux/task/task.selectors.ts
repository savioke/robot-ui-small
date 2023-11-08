import { RootState } from 'typeDux';

export const getTaskConfig = (state: RootState) => {
  return state.ui.taskConfig;
};
