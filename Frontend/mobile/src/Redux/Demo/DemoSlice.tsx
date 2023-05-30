import {createSlice} from '@reduxjs/toolkit';

export interface DemoState {
  value: number;
}

const initialState: DemoState = {
  value: 0,
};

export const DemoSlice = createSlice({
  name: 'Demo',
  initialState,
  reducers: {},
});

export const {} = DemoSlice.actions;
export default DemoSlice.reducer;
