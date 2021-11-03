import LoginContainer from "./container/LoginContainer";
import JoinContainer from "./container/JoinContainer";
import { Route } from "react-router";
import Calendar from "./components/Calendar";
import MyPage from "./components/MyPage";
import Post from "./components/Post";
import PostList from "./components/PostList";
import AllPost from "./components/AllPost";
import styled from "styled-components";
import MainContainer from "./container/MainContainer";

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
      <Route path="/" component={LoginContainer} exact={true} />
      <Route path="/join" component={JoinContainer} exact={true} />
      <Route path="/allPost" component={AllPost} />
      <Route path="/post" component={Post} />
      <Route path="/myPage" component={MyPage} exact={true} />
      <Route path="/main" component={MainContainer} />
      <Route path="/postList" component={PostList} />
    </AppBox>
  );
};

export default App;
