import { combineReducers } from '@reduxjs/toolkit';

/** Reducers */
import deliver from './deliver/deliver.slice';
import goTo from './goTo/goTo.slice';
import r2c2 from './r2c2/r2c2.slice';
import ui from './ui/ui.slice';

const rootReducer = combineReducers({
  deliver,
  goTo,
  r2c2,
  ui,
});

export default rootReducer;
