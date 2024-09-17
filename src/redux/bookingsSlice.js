import { createSlice } from "@reduxjs/toolkit";

const bookingsSlice = createSlice({
  name: "bookings",
  initialState: {
    bookings: [],
  },
  reducers: {
    addBooking: (state, action) => {
      state.bookings = [...state.bookings, action.payload];
    },
    removeBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        (booking) => booking.id !== action.payload
      );
    },
  },
  selectors: {
    selectBookings: (state) => state.bookings,
    selectBooked: (state, id) =>
      state.bookings.filter((booking) => booking.id === id)[0] || 0,
  },
});

export const { addBooking, removeBooking } = bookingsSlice.actions;

export const { selectBookings, selectBooked } = bookingsSlice.selectors;

export const bookingsReducer = bookingsSlice.reducer;
