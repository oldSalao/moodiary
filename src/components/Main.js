import Calendar from "./Calendar";
import rightArrow from "../image/keyboard-right-arrow-button.png";
import leftArrow from "../image/keyboard-left-arrow-button.png";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const MainBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const LeftButtonBox = styled.div`
  margin-right: 40px;
  cursor: pointer;
`;

const RightButtonBox = styled.div`
  margin-left: 40px;
  cursor: pointer;
`;

const Main = ({ onClickPrev, onClickNext }) => {
  const loading = useSelector((state) => state.date.loading);

  if (!localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }

  return (
    <MainBox>
      <LeftButtonBox onClick={onClickPrev}>
        <img
          src={leftArrow}
          alt="leftArrow"
          style={{ width: "50px", height: "50px" }}
        />
      </LeftButtonBox>
      <Calendar />
      <RightButtonBox onClick={onClickNext}>
        <img
          src={rightArrow}
          alt="rightArrow"
          style={{ width: "50px", height: "50px" }}
        />
      </RightButtonBox>
      {loading && (
        <div
          style={{
            position: "absolute",
            alignSelf: "center",
          }}
        >
          <CircularProgress />
        </div>
      )}
    </MainBox>
  );
};

export default Main;
