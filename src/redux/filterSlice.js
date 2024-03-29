import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: "filter",
    initialState: "",
    reducers: {
        search: (state, action) => {return state = action.payload},
  }
});

export const { search } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;