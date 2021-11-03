import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";
import dateReducer from "../features/dateSlice";
import joinReducer from "../features/joinSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    date: dateReducer,
    join: joinReducer,
  },
});
