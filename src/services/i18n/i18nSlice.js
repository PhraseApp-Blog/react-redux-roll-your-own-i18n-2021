import { createSlice } from "@reduxjs/toolkit";
import {
  defaultLang,
  supportedLangs,
} from "../../config/i18nConfig";

const initialState = {
  lang: defaultLang,
  supportedLangs: { ...supportedLangs },
  translations: {
    en: {
      tagline: "Continuous improvement",
      ratings: "Ratings",
    },
    de: {
      tagline: "Ständige Verbesserung",
      ratings: "Bewertungen",
    },
    fr: {
      tagline: "Amélioration continue",
      ratings: "Évaluations",
    },
  },
};

export const i18nSlice = createSlice({
  name: "i18n",
  initialState,
  reducers: {
    setLang: (state, action) => {
      console.log({ setLang });
      state.lang = action.payload;
    },
  },
});

export const { setLang } = i18nSlice.actions;

export const selectTranslations = (state) =>
  state.i18n.translations[state.i18n.lang];

export default i18nSlice.reducer;
