import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  password: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    changeUserName: (state, action) => {
      state.userName = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { changeUserName, changePassword } = loginSlice.actions;

export default loginSlice.reducer;
