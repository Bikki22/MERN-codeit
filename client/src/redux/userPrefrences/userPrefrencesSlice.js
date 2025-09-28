import { DARK_THEME, LIGHT_THEME } from "@/constants/theme";
import { createSlice } from "@reduxjs/toolkit";

const userPrefrenceSlice = createSlice({
  name: "userPrefrence",
  initialState: {
    theme: LIGHT_THEME,
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme == LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    },
  },
});

export const { toggleTheme } = userPrefrenceSlice.actions;
export default userPrefrenceSlice.reducer;
