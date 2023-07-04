import {combineReducers} from '@reduxjs/toolkit';
import SignInReducer from '../SignIn/SignInSlice';

export const reduxCombineReducer = combineReducers({
  SignIn: SignInReducer,
});
