import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  token: '',
  userRegistered: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log(state.isLoggedIn);
      state.isLoggedIn = true;
    },
    logout: state => {
      state.isLoggedIn = false;
    },
    addToken: (state, action) => {
      state.token = action.payload;
    },
    userInfo: (state, action) => {
      console.log('state', [...state.userRegistered, action.payload]);
      state.userRegistered = [...state.userRegistered, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {login, logout, userInfo} = authSlice.actions;

export default authSlice.reducer;
