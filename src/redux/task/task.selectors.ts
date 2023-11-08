import { RootState } from 'typeDux';

export const getTaskConfig = (state: RootState) => {
  return state.task.taskConfig;
};
