import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
  height: 35%;
  max-width: 200px;
  max-height: 250px;
  justify-content: space-between;
`;

const LoginHeaderBox = styled.span`
  font-size: 35px;
  font-weight: bolder;
`;

const LoginFormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 150px;
  height: 100%;
  & input {
    box-sizing: border-box;
    width: 100%;
  }
  & button {
    width: 100%;
  }
`;

const Login = ({
  loading,
  error,
  onChangeUserName,
  onChangePassword,
  onClickLogin,
}) => {
  if (loading) {
    return <div>로딩중...</div>;
  }
  if (error) {
    return <div>로그인실패</div>;
  }
  if (localStorage.getItem("token")) {
    return <Redirect to={"/myPage"} />;
  }

  return (
    <LoginBox>
      <LoginHeaderBox>Login</LoginHeaderBox>
      <LoginFormBox>
        <input
          type="text"
          placeholder="아이디를 입력하세요."
          onChange={onChangeUserName}
        />
        <input
          type="text"
          placeholder="비밀번호를 입력하세요."
          onChange={onChangePassword}
        />
        <button onClick={onClickLogin}>로그인</button>
        <Link to="/join">
          <button>회원가입</button>
        </Link>
        <Link to="/calendar">
          <button>달력</button>
        </Link>
      </LoginFormBox>
    </LoginBox>
  );
};

export default Login;
