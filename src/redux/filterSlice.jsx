import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filtered(state, action) {
      return action.payload;
    },
  },
});

export const { filtered } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
