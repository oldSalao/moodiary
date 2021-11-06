import QueryString from "qs";
import Layout from "../components/Layout";
import PostListContainer from "../container/PostListContainer";

const PostListPage = ({ location }) => {
  const query = QueryString.parse(location.search, { ignoreQueryPrefix: true });
  return (
    <Layout>
      <PostListContainer query={query} />
    </Layout>
  );
};

export default PostListPage;
