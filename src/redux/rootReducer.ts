import { combineReducers } from '@reduxjs/toolkit';

/** Reducers */
import ui from './ui/ui.slice';
import deliver from './deliver/deliver.slice';

const rootReducer = combineReducers({
  deliver,
  ui,
});

export default rootReducer;
