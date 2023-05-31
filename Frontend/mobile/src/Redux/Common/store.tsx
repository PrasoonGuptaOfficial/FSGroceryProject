import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import reduxStorage from './reduxStorage';
import {persistReducer, persistStore} from 'redux-persist';
import {reduxCombineReducer} from './reduxCombineReducer';

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
};

const persistedReducer = persistReducer(persistConfig, reduxCombineReducer);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export const persistorStore = persistStore(Store);
