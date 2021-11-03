import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";
import dateReducer from "../features/calendarSlice";
import joinReducer from "../features/joinSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    date: dateReducer,
    join: joinReducer,
  },
});
