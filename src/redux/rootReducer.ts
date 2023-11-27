import { combineReducers } from '@reduxjs/toolkit';

/** Reducers */
import deliver from './deliver/deliver.slice';
import goTo from './goTo/goTo.slice';
import mapping from './mapping/mapping.slice';
import r2c2 from './r2c2/r2c2.slice';
import ui from './ui/ui.slice';
import socket from './socket/socket.slice';

const rootReducer = combineReducers({
  deliver,
  goTo,
  mapping,
  r2c2,
  socket,
  ui,
});

export default rootReducer;
