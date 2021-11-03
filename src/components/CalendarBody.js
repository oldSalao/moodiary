import styled from "styled-components";
import CalendarItem from "./CalendarItem";

const CalendarBodyBox = styled.div`
  display: grid;
  /* box-sizing: border-box; */
  grid-template-columns: repeat(7, 1fr);
  /* grid-gap: 1px; */
  /* background-color: black; */
`;

const CalendarBody = ({ days, monthPosts, loading }) => {
  return (
    <CalendarBodyBox>
      {days.map((day, idx) => (
        <CalendarItem
          day={day.day}
          date={day.date}
          weekDay={day.weekDay}
          isNow={day.isNow}
          posted={monthPosts && (monthPosts.has(day.date) ? true : false)}
          key={idx}
          loading={loading}
        />
      ))}
    </CalendarBodyBox>
  );
};

export default CalendarBody;
