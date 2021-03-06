import { Route } from "react-router";
import MyPage from "./components/MyPage";
import AllPost from "./components/AllPost";
import styled from "styled-components";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import MainPage from "./pages/MainPage";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import WritePage from "./pages/WritePage";

const AppBox = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <AppBox>
      <Route path="/" component={LoginPage} exact={true} />
      <Route path="/join" component={JoinPage} exact={true} />
      <Route path="/allPost" component={AllPost} />
      <Route path="/post" component={PostPage} />
      <Route path="/myPage" component={MyPage} exact={true} />
      <Route path="/main" component={MainPage} />
      <Route path="/postList" component={PostListPage} />
      <Route path="/write" component={WritePage} />
    </AppBox>
  );
};

export default App;
