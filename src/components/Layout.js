import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const LayoutBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Layout = ({ children }) => {
  return (
    <LayoutBox>
      <Header />
      {children}
      <Footer />
    </LayoutBox>
  );
};

export default Layout;
