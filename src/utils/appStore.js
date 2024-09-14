import { configureStore } from "@reduxjs/toolkit";
import cartReducder from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducder,
  },
});

export default appStore;
