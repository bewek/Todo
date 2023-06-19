import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userSubmit: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLoggedIn = true;
    },
    logout: state => {
      state.isLoggedIn = false;
    },
    userInfo: (state, action) => {
      state.userSubmit = [...state.userSubmit, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {login, logout, userInfo} = userSlice.actions;

export default userSlice.reducer;
