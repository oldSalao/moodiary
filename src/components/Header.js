import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = () => {
  const onClickLogOut = () => {
    localStorage.clear();
  };
  return (
    <HeaderBox>
      <h1
        style={{
          borderBottom: "1px solid",
          borderColor: "#eee",
          paddingBottom: "0.5rem",
          margin: "0",
        }}
      >
        MooDiary
      </h1>
      {localStorage.getItem("token") && (
        <Link to="/" style={{ textDecoration: "none" }}>
          <div
            style={{
              marginTop: "0.5rem",
              fontSize: "small",
              marginBottom: "0.5rem",
              cursor: "pointer",
            }}
            onClick={onClickLogOut}
          >
            로그아웃
          </div>
        </Link>
      )}
    </HeaderBox>
  );
};

export default Header;
