import {
  useDispatch as reduxUseDispatch,
  useSelector as reduxUseSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import { makeStore } from 'store';

export * from '@reduxjs/toolkit';

type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useDispatch: () => AppDispatch = reduxUseDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = reduxUseSelector;

export interface ServiceErrorResponse {
  status?: number;
  data: {
    title: string;
    detail: string;
    message?: string;
    status: number;
    statusCode?: number;
  };
}
