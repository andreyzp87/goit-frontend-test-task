import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "./campersOps";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    total: 0,
    currentPage: 1,
    loading: false,
    error: null,
    isPageLoad: true,
    camper: null,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    resetItems: (state) => {
      state.items = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;

        state.items =
          state.isPageLoad || state.currentPage === 1
            ? action.payload.items
            : [...state.items, ...action.payload.items];

        state.total = action.payload.total;

        state.isPageLoad = false;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isPageLoad = false;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.camper = action.payload;
        state.loading = false;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCamperById.rejected, (state, { error }) => {
        state.error = error;
        state.loading = false;
      });
  },
  selectors: {
    selectCampers: (state) => state.items,
    selectTotal: (state) => state.total,
    selectCurrentPage: (state) => state.currentPage,
    selectError: (state) => state.error,
    selectLoading: (state) => state.loading,
    selectIsPageLoad: (state) => state.isPageLoad,
    selectCamper: (state) => state.camper,
  },
});

export const { setCurrentPage, resetItems } = campersSlice.actions;

export const {
  selectCampers,
  selectTotal,
  selectCurrentPage,
  selectError,
  selectLoading,
  selectIsPageLoad,
  selectCamper,
} = campersSlice.selectors;

export const campersReducer = campersSlice.reducer;
