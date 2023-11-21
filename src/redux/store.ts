import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from 'state/rootReducer';
import socketMiddleware from './middleware/socketMiddleware/socketMiddleware';

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({ serializableCheck: false }).concat([socketMiddleware]);
    },
  });

export const wrapper = createWrapper(makeStore, { debug: false });
