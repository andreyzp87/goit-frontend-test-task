import { createSlice } from "@reduxjs/toolkit";

const initialFilters = {
  location: "",
  form: null,
  equipment: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    currentFilters: null,
  },
  reducers: {
    setCurrentFilters(state, action) {
      state.currentFilters = action.payload;
    },
    resetFilters(state) {
      state.currentFilters = { ...initialFilters };
    },
  },
  selectors: {
    selectCurrentFilters: (state) => state.currentFilters,
  },
});

export const { setCurrentFilters, resetCurrentFilters } = filtersSlice.actions;

export const { selectCurrentFilters } = filtersSlice.selectors;

export const filtersReducer = filtersSlice.reducer;
