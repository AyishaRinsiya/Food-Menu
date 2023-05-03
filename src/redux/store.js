import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlices";

const store = configureStore({
  reducer: {
    menuItem: menuReducer,
  },
});
export default store;
