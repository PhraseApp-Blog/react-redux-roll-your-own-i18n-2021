import { configureStore } from "@reduxjs/toolkit";
import i18nReducer from "../services/i18n/i18nSlice";

export const store = configureStore({
  reducer: {
    i18n: i18nReducer,
  },
});
