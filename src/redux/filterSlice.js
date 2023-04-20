import { createSlice } from '@reduxjs/toolkit';

const initialStateFilter = '';
export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilter,
  reducers: {
    showElementsFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { showElementsFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
