import { GRID_VIEW, LIST_VIEW } from "@/constants/productView";
import { DARK_THEME, LIGHT_THEME } from "@/constants/theme";
import { createSlice } from "@reduxjs/toolkit";

const userPrefrenceSlice = createSlice({
  name: "userPrefrence",
  initialState: {
    theme: LIGHT_THEME,
    productView: GRID_VIEW,
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme == LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    },
  },
});

export const { toggleTheme, toggleProductView } = userPrefrenceSlice.actions;
export default userPrefrenceSlice.reducer;
