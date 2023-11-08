import { combineReducers } from '@reduxjs/toolkit';

/** Reducers */
import ui from './ui/ui.slice';
import deliver from './deliver/deliver.slice';
import task from './task/task.slice';

const rootReducer = combineReducers({
  deliver,
  task,
  ui,
});

export default rootReducer;
