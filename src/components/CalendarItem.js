import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CalendarItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

const CalendarItem = ({ day, date, isNow, posted }) => {
  const loading = useSelector((state) => state.date.loading);

  if (loading) {
    return (
      <CalendarItemBox>
        <div></div>
      </CalendarItemBox>
    );
  }

  const style = {};

  if (!isNow) {
    style.color = "grey";
  }
  if (posted) {
    style.color = "red";
  }

  return (
    <CalendarItemBox>
      <Link
        to={`/postList?date=${date}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div
          style={{
            width: "100%",
            color: style.color,
          }}
        >
          <div>{day}</div>
        </div>
      </Link>
    </CalendarItemBox>
  );
};

export default CalendarItem;
