import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import "moment/locale/ko";

const initialState = {
  now: new Date().getTime(),
};

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    prevMonth: (state) => {
      state.now = moment(state.now).subtract(1, "months").toDate().getTime();
    },
    nextMonth: (state) => {
      state.now = moment(state.now).add(1, "months").toDate().getTime();
    },
  },
});

export const { prevMonth, nextMonth } = dateSlice.actions;

export default dateSlice.reducer;
