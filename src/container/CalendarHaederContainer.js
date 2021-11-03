import moment from "moment";
import { useSelector } from "react-redux";
import CalendarHeader from "../components/CalendarHeader";

const CalendarHeaderContainer = () => {
  const now = moment(useSelector((state) => state.date.now));

  return <CalendarHeader now={now} />;
};

export default CalendarHeaderContainer;
