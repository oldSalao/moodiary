import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Join from "../components/Join";
import { changePassword, changeUserName } from "../features/joinSlice";

const JoinContainer = () => {
  const userName = useSelector((state) => state.join.userName);
  const password = useSelector((state) => state.join.password);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [joinFlag, setJoinFlag] = useState(false);

  const onChangeUserName = (e) => {
    dispatch(changeUserName(e.target.value));
  };

  const onChangePassword = (e) => {
    dispatch(changePassword(e.target.value));
  };

  const onJoin = (e) => {
    e.preventDefault();
    const join = async () => {
      try {
        setError(null);
        setLoading(true);

        // 응답 헤더에 location 있는거 저장하는 법 고민
        const response = await axios.post(
          "/join",
          JSON.stringify({ userName: userName, password: password }),
          { headers: { "Content-Type": `application/json` } }
        );

        setLoading(false);
        setJoinFlag(true);
      } catch (e) {
        setError(e);
      }
    };
    join();
  };
  return (
    <Join
      loading={loading}
      error={error}
      joinFlag={joinFlag}
      onChangeUserName={onChangeUserName}
      onChangePassword={onChangePassword}
      onJoin={onJoin}
    />
  );
};

export default JoinContainer;
