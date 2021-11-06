import QueryString from "qs";
import Layout from "../components/Layout";
import PostContainer from "../container/PostContainer";

const PostPage = ({ location }) => {
  const query = QueryString.parse(location.search, { ignoreQueryPrefix: true });
  return (
    <Layout>
      <PostContainer query={query} />
    </Layout>
  );
};

export default PostPage;
