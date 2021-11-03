import styled from "styled-components";

const CalendarHeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
`;

const MonthBox = styled.div`
  display: flex;
  width: 25%;
  margin-top: auto;
  margin-bottom: auto;
  flex-direction: row;
  justify-content: space-around;
  flex: none;
  & div {
    width: 100%;
    text-align: center;
  }
`;

const WeekDaysBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: 40px;
`;

const WeekDayBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CalendarHeader = ({ now, onClickPrev, onClickNext }) => {
  return (
    <CalendarHeaderBox>
      <MonthBox>
        {/* <button onClick={onClickPrev}>-</button> */}
        <div style={{ fontSize: "25px" }}>
          {now.clone().format("YYYY년 M월")}
        </div>
        {/* <button onClick={onClickNext}>+</button> */}
      </MonthBox>
      <WeekDaysBox>
        <WeekDayBox>
          <div style={{ color: "red" }}>SUN</div>
        </WeekDayBox>
        <WeekDayBox>
          <div>MON</div>
        </WeekDayBox>
        <WeekDayBox>
          <div>TUE</div>
        </WeekDayBox>
        <WeekDayBox>
          <div>WEN</div>
        </WeekDayBox>
        <WeekDayBox>
          <div>THU</div>
        </WeekDayBox>
        <WeekDayBox>
          <div>FRI</div>
        </WeekDayBox>
        <WeekDayBox>
          <div style={{ color: "blue" }}>SAT</div>
        </WeekDayBox>
      </WeekDaysBox>
    </CalendarHeaderBox>
  );
};

export default CalendarHeader;
