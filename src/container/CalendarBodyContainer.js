import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CalendarBody from "../components/CalendarBody";
import { toggleLoading } from "../features/calendarSlice";

const CalendarBodyContainer = () => {
  const now = moment(useSelector((state) => state.date.now));
  const dispatch = useDispatch();
  const firstWeekDay = Number(now.clone().startOf("month").format("d"));
  const lastWeekDay = Number(now.clone().endOf("month").format("d"));
  const lengthOfMonth = Number(now.clone().endOf("month").format("D"));
  const prevMonth = now.clone().subtract(1, "months");
  const nextMonth = now.clone().add(1, "months");
  const [monthPosts, setMonthPosts] = useState(null);
  const days = [];

  useEffect(() => {
    const fetchMonthPost = async () => {
      dispatch(toggleLoading());
      try {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${localStorage.getItem("token")}`;
        const response = await axios.get(
          `/posts/month?startDate=${days[0].date}&endDate=${
            days[days.length - 1].date
          }`
        );

        setMonthPosts(() => {
          const set = new Set();
          for (let i = 0; i < response.data.list.length; i++) {
            if (!set.has(response.data.list[i].postDate)) {
              set.add(response.data.list[i].postDate);
            }
          }
          return set;
        });

        dispatch(toggleLoading());
      } catch (e) {
        dispatch(toggleLoading());
      }
    };
    fetchMonthPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [now.toDate().getTime()]);

  if (firstWeekDay !== 0) {
    const prevLastDay = Number(prevMonth.clone().endOf("month").format("DD"));
    const startOfPrevDay = prevLastDay - (firstWeekDay - 1);

    for (let i = startOfPrevDay; i < prevLastDay + 1; i++) {
      const date = moment(`${prevMonth.format("YYYY-MM")}-${i}`);
      days.push({
        day: i,
        date: date.format("YYYY-MM-DD"),
        weekDay: date.format("dd"),
        isNow: false,
      });
    }
  }

  for (let i = 1; i < lengthOfMonth + 1; i++) {
    const date = moment(`${now.format("YYYY-MM")}-${i}`);
    days.push({
      day: i,
      date: date.format("YYYY-MM-DD"),
      weekDay: date.format("dd"),
      isNow: true,
    });
  }

  if (lastWeekDay !== 6) {
    for (let i = 1; i < 7 - lastWeekDay; i++) {
      const date = moment(`${nextMonth.format("YYYY-MM")}-${i}`);
      days.push({
        day: i,
        date: date.format("YYYY-MM-DD"),
        weekDay: date.format("dd"),
        isNow: false,
      });
    }
  }

  return <CalendarBody days={days} monthPosts={monthPosts} />;
};

export default CalendarBodyContainer;
