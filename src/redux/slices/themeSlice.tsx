import { createSlice } from '@reduxjs/toolkit';

type userState = {
  currentTheme: {
    dark: boolean;
  };
};
const initialState: userState = {
  currentTheme: {
    dark: false
  }
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme.dark = !state.currentTheme.dark;
    }
  }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
