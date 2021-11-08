import { Link } from "react-router-dom";
import styled from "styled-components";

const PostListBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostList = ({ date, posts, loading }) => {
  if (loading) {
    return <div>로딩중</div>;
  }

  return (
    <PostListBox>
      <h2>{date}</h2>
      {posts &&
        posts.map((post) => {
          return (
            <Link key={post.postId} to={`/post?postId=${post.postId}`}>
              <div>{post.title}</div>
            </Link>
          );
        })}
    </PostListBox>
  );
};

export default PostList;
