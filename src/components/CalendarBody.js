import styled from "styled-components";
import CalendarItem from "./CalendarItem";

const CalendarBodyBox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const CalendarBody = ({ days, monthPosts }) => {
  return (
    <CalendarBodyBox>
      {days.map((day, idx) => (
        <CalendarItem
          day={day.day}
          date={day.date}
          isNow={day.isNow}
          posted={monthPosts && (monthPosts.has(day.date) ? true : false)}
          key={idx}
        />
      ))}
    </CalendarBodyBox>
  );
};

export default CalendarBody;
