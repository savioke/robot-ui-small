import { combineReducers } from '@reduxjs/toolkit';

/** Reducers */
import ui from './ui/ui.slice';

const rootReducer = combineReducers({
  ui,
});

export default rootReducer;
