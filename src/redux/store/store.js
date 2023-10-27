import { configureStore } from '@reduxjs/toolkit';

import { contactSlice } from 'redux/slice/contactSlice';
import { filterSlice } from 'redux/slice/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
});
