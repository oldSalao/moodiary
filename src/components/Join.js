import styled from "styled-components";

const JoinBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
  height: 35%;
  max-width: 200px;
  max-height: 250px;
  justify-content: space-between;
`;

const JoinHeaderBox = styled.span`
  font-size: 35px;
  font-weight: bolder;
`;

const JoinFormBox = styled.form`
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

const Join = ({
  loading,
  error,
  joinFlag,
  onChangeUserName,
  onChangePassword,
  onJoin,
}) => {
  if (loading) {
    return <div>로딩중</div>;
  }
  if (error) {
    return <div>에러발생</div>;
  }
  if (joinFlag) {
    return <div>회원가입 완료</div>;
  }

  return (
    <JoinBox>
      <JoinHeaderBox>회원가입</JoinHeaderBox>
      <JoinFormBox>
        <input
          type="text"
          placeholder="아이디 입력"
          onChange={onChangeUserName}
        ></input>
        <input
          type="text"
          placeholder="비밀번호 입력"
          onChange={onChangePassword}
        ></input>
        <button type="submit" onClick={onJoin}>
          회원가입
        </button>
      </JoinFormBox>
    </JoinBox>
  );
};

export default Join;
