import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Layout />
    </>
  );
};

export default Layout;
