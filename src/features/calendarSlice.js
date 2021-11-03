import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import "moment/locale/ko";

const initialState = {
  now: new Date().getTime(),
  loading: false,
};

export const calendarSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    prevMonth: (state) => {
      state.now = moment(state.now).subtract(1, "months").toDate().getTime();
    },
    nextMonth: (state) => {
      state.now = moment(state.now).add(1, "months").toDate().getTime();
    },
    toggleLoading: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const { prevMonth, nextMonth, toggleLoading } = calendarSlice.actions;

export default calendarSlice.reducer;
