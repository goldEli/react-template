import { configureStore } from "@reduxjs/toolkit";
import home from "./home";
export const store = configureStore({
  reducer: {
    home,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
