import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(state, action) {
      return console.log('filterContacts');
    },
  },
});
export const { filterContacts } = filterSlice.actions;
