import { Link } from "react-router-dom";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

const CalendarItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

const CalendarItem = ({ day, date, weekDay, isNow, posted, loading }) => {
  if (loading) {
    return (
      <CalendarItemBox>
        <div>
          <CircularProgress />
        </div>
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
      {/* <div style={style}>{`${weekDay}요일`}</div> */}
    </CalendarItemBox>
  );
};

export default CalendarItem;
