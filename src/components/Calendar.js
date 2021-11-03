import "moment/locale/ko";
import CalendarBodyContainer from "../container/CalendarBodyContainer";
import styled from "styled-components";
import CalendarHeaderContainer from "../container/CalendarHaederContainer";

const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: 580px;
  border: 1px solid black;
  border-radius: 30px;
  box-sizing: border-box;
`;

const Calendar = () => {
  return (
    <CalendarBox>
      <CalendarHeaderContainer />
      <CalendarBodyContainer />
    </CalendarBox>
  );
};

export default Calendar;
