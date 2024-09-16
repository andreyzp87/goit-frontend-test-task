import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperById } from "./campersOps";

const camperSlice = createSlice({
  name: "camper",
  initialState: {
    data: null,
    currentTab: "features",
    loading: false,
    error: null,
  },
  reducers: {
    setCurrentTab(state, action) {
      if (state.tabs.indexOf(action.payload) < 0) {
        return;
      }
      state.currentTab = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.data = action.payload;
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
    selectData: (state) => state.data,
    selectCurrentTab: (state) => state.currentTab,
    selectLoading: (state) => state.loading,
    selectError: (state) => state.error,
  },
});

export const { selectData, selectCurrentTab, selectLoading, selectError } =
  camperSlice.selectors;

export const { setCurrentTab } = camperSlice.actions;

export default camperSlice.reducer;
