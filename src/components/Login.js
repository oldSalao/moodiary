import { CircularProgress } from "@mui/material";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
  max-width: 200px;
`;

const LoginHeaderBox = styled.span`
  font-size: 35px;
  font-weight: bolder;
  padding-bottom: 1rem;
`;

const LoginFormBox = styled.form`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
`;

const InputBox = styled.input`
  width: 100%;
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
  margin-top: 1rem;
  outline: none;
`;

const ButtonBox = styled.button`
  width: 100%;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  padding: 0.25rem 1rem;
  color: black;
  outline: none;
  cursor: pointer;
`;

const Login = ({
  loading,
  error,
  onChangeUserName,
  onChangePassword,
  onClickLogin,
}) => {
  if (localStorage.getItem("token")) {
    return <Redirect to={"/main"} />;
  }

  return (
    <LoginBox>
      <LoginHeaderBox>Login</LoginHeaderBox>
      <LoginFormBox>
        <InputBox
          type="text"
          placeholder="아이디를 입력하세요."
          onChange={onChangeUserName}
        />
        <InputBox
          type="password"
          placeholder="비밀번호를 입력하세요."
          onChange={onChangePassword}
        />
        {loading ? (
          <ButtonBox onClick={onClickLogin}>
            <CircularProgress size="20px" />
          </ButtonBox>
        ) : (
          <ButtonBox onClick={onClickLogin}>
            로그인
            {error && (
              <>
                <br />
                <span style={{ color: "red", fontSize: "small" }}>
                  로그인 실패
                </span>
              </>
            )}
          </ButtonBox>
        )}

        <Link to="/join">
          <ButtonBox>회원가입</ButtonBox>
        </Link>
      </LoginFormBox>
    </LoginBox>
  );
};

export default Login;
