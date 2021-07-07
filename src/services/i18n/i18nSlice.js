import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import {
  defaultLang,
  supportedLangs,
} from "../../config/i18nConfig";
import { fetchTranslations } from "./i18nAPI";

const initialState = {
  status: "loading",
  lang: defaultLang,
  supportedLangs: { ...supportedLangs },
  translations: {},
};

export const setLangAsync = createAsyncThunk(
  "i18n/setLangAsync",
  async (lang, { getState, dispatch }) => {
    const resolvedLang = lang || getState().i18n.lang;

    const translations = await fetchTranslations(
      resolvedLang,
    );

    dispatch(i18nSlice.actions.setLang(resolvedLang));

    return translations;
  },
);

export const i18nSlice = createSlice({
  name: "i18n",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setLangAsync.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(
      setLangAsync.fulfilled,
      (state, action) => {
        state.translations = action.payload;
        state.status = "idle";
      },
    );
  },
});

export default i18nSlice.reducer;
