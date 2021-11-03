import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  password: "",
};

export const joinSlice = createSlice({
  name: "join",
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

export const { changeUserName, changePassword } = joinSlice.actions;

export default joinSlice.reducer;
