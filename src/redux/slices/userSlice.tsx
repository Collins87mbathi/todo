import { createSlice } from '@reduxjs/toolkit';

type userState = {
  user: { isAuthenticated: boolean; username: string; role: string };
};
const initialState: userState = {
  user: {
    isAuthenticated: false,
    username: '',
    role: ''
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state) => {
      state.user = {
        ...state.user,
        role: 'User',
        isAuthenticated: true,
        username: 'Jane Doe'
      };
    },
    logoutUser: (state) => {
      state.user = {
        ...state.user,
        role: '',
        isAuthenticated: false,
        username: ''
      };
    }
  }
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
