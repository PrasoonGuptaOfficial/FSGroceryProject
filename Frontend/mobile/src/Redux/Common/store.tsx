import {configureStore} from '@reduxjs/toolkit';
import demoReducer from '../Demo/DemoSlice';

export const Store = configureStore({
  reducer: {
    Demo: demoReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
