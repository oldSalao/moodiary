import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PostListBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
`;

const PostListHeaderBox = styled.div``;

const PostListBodyBox = styled.div``;

const TitleBox = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid darkgrey;
  }
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

const PostListButtonBox = styled.button`
  border: none;
  width: 100%;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: black;
  outline: none;
  cursor: pointer;
`;

const PostList = ({ date, posts, loading }) => {
  const moodImoji = {
    happy: "😁",
    delight: "😄",
    excited: "😃",
    soso: "🙂",
    sad: "😥",
    gloomy: "😭",
    angry: "👿",
  };

  if (loading) {
    return (
      <PostListBox>
        <PostListHeaderBox>
          <h2>
            <Skeleton variant="rectangular" width={130} height={32} />
          </h2>
          <hr style={{ width: "100%", marginBottom: "1rem" }} />
        </PostListHeaderBox>
        <PostListBodyBox>
          <Skeleton variant="rectangular" width={130} height={150} />
        </PostListBodyBox>
      </PostListBox>
    );
  }

  return (
    <PostListBox>
      <PostListHeaderBox>
        <h2>{date}</h2>
        <hr style={{ width: "100%", marginBottom: "2rem" }} />
      </PostListHeaderBox>
      <PostListBodyBox>
        {posts &&
          posts.map((post) => {
            return (
              <TitleBox>
                <Link
                  key={post.postId}
                  to={`/post?postId=${post.postId}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {moodImoji[post.mood.toLowerCase()]} {post.title}
                </Link>
              </TitleBox>
            );
          })}
      </PostListBodyBox>
      <Link to="/write">
        <PostListButtonBox>추가</PostListButtonBox>
      </Link>
    </PostListBox>
  );
};

export default PostList;
