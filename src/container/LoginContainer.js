import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../components/Login";
import { changePassword, changeUserName } from "../features/loginSlice";

const LoginContainer = () => {
  const userName = useSelector((state) => state.login.userName);
  const password = useSelector((state) => state.login.password);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onChangeUserName = (e) => {
    dispatch(changeUserName(e.target.value));
  };

  const onChangePassword = (e) => {
    dispatch(changePassword(e.target.value));
  };

  const onClickLogin = (e) => {
    e.preventDefault();
    const fetchLogin = async () => {
      try {
        setError(null);
        setLoading(true);

        const response = await axios.post(
          "/login",
          JSON.stringify({
            userName: userName,
            password: password,
          }),
          {
            headers: {
              "Content-Type": `application/json`,
            },
          }
        );

        localStorage.setItem("token", response.data.token);
      } catch (e) {
        setError(e);
        dispatch(changeUserName(""));
        dispatch(changePassword(""));
      }
      setLoading(false);
    };
    fetchLogin();
  };

  return (
    <Login
      loading={loading}
      error={error}
      onChangeUserName={onChangeUserName}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
    />
  );
};

export default LoginContainer;
