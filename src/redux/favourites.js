import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    favouriteIds: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      state.favouriteIds = [...state.favouriteIds, action.payload];
    },
    removeFavourite: (state, action) => {
      state.favouriteIds = state.favouriteIds.filter(
        (favouriteId) => favouriteId !== action.payload
      );
    },
  },
  selectors: {
    selectFavourites: (state) => state.favouriteIds,
    selectIsInside: (state, id) => state.favouriteIds.includes(id),
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;

export const { selectFavourites, selectIsInside } = favouritesSlice.selectors;

export const favouritesReducer = favouritesSlice.reducer;
