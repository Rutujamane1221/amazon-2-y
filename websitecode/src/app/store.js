/*import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

//THE GLOBAL STORE SETUP
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});*/

import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
