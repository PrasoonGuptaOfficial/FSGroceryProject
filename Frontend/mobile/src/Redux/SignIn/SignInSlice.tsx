import {createSlice} from '@reduxjs/toolkit';

export interface SignInState {
  isSignedIn: boolean;
  signInUserDetails: Object;
}

const initialState: SignInState = {
  isSignedIn: false,
  signInUserDetails: {},
};

export const SignInSlice = createSlice({
  name: 'SignIn',
  initialState,
  reducers: {
    signInSuccess: (state, signInDetails) => {
      const {signedIn, signedInDetails} = signInDetails.payload;
      state.isSignedIn = signedIn;
      state.signInUserDetails = signedInDetails;
      return state;
    },
  },
});

export const {signInSuccess} = SignInSlice.actions;
export default SignInSlice.reducer;
