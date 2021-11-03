import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePassword, changeUserName } from "../features/loginSlice";
import { Link } from "react-router-dom";

const MyPage = ({ history }) => {
  const userName = useSelector((state) => state.login.userName);
  const password = useSelector((state) => state.login.password);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [fetchUser, setFetchUser] = useState(null);
  const [error, setError] = useState(null);

  const onClickLogOut = () => {
    localStorage.removeItem("token");
    dispatch(changeUserName(""));
    dispatch(changePassword(""));
    history.push("/");
  };

  useEffect(() => {
    const check = async () => {
      try {
        setError(null);
        setLoading(true);
        setFetchUser(null);

        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${localStorage.getItem("token")}`;

        const response = await axios.get(
          "/login",
          JSON.stringify({ userName, password })
        );
        dispatch(changeUserName(response.data.userName));
        setFetchUser(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div>로딩중...</div>;
  }
  if (error) {
    localStorage.clear();
    return <div>로그인을 해주세요.</div>;
  }
  if (!fetchUser) {
    return null;
  }

  return (
    <div className="MyPage">
      로그인되었습니다. {userName}님 반갑습니다!
      <br />
      <button onClick={onClickLogOut}>로그아웃</button>
      <Link to={"/allPost"}>포스트</Link>
      <Link to={"/main"}>
        <button>달력</button>
      </Link>
    </div>
  );
};

export default MyPage;
