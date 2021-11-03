import { useDispatch } from "react-redux";
import { prevMonth, nextMonth } from "../features/dateSlice";
import Main from "../components/Main";

const MainContainer = () => {
  const dispatch = useDispatch();

  const onClickPrev = () => {
    dispatch(prevMonth());
  };

  const onClickNext = () => {
    dispatch(nextMonth());
  };
  return <Main onClickPrev={onClickPrev} onClickNext={onClickNext} />;
};

export default MainContainer;
