import {combineReducers} from '@reduxjs/toolkit';
import demoReducer from '../Demo/DemoSlice';

export const reduxCombineReducer = combineReducers({
  Demo: demoReducer,
});
