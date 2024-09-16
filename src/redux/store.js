import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campersSlice";
import { filtersReducer } from "./filtersSlice";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "campers",
//   storage,
//   whitelist: ["favoriteIds"],
// };

// const persistedCampersReducer = persistReducer(persistConfig, campersReducer);

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
  },
});

// export const persistor = persistStore(store);
