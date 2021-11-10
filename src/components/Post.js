import { Skeleton } from "@mui/material";
import styled from "styled-components";

const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 50%;
`;

const PostHeaderBox = styled.div``;

const PostMoodBox = styled.div`
  font-size: 20px;
`;

const PostContentBox = styled.div`
  padding: 1rem 0;
`;

const PostButtonBox = styled.button`
  /* width: 100%; */
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  padding: 0.25rem 1rem;
  color: black;
  outline: none;
  cursor: pointer;
`;

const Post = ({ post, loading }) => {
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
      <PostBox>
        <h2>
          <Skeleton variant="rectangular" width={130} height={32} />
        </h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Skeleton variant="circular" width={25} height={25} />
          <Skeleton variant="rectangular" width={80} height={27} />
        </div>
        <hr style={{ width: "50%" }} />
        <Skeleton variant="rectangular" width={200} height={150} />
      </PostBox>
    );
  }

  return (
    <PostBox>
      <PostHeaderBox>
        {post && <h2 style={{ textAlign: "center" }}>{post.postDate}</h2>}
      </PostHeaderBox>
      <PostMoodBox>
        {post && `${moodImoji[post.mood.toLowerCase()]} ${post.mood}`}
      </PostMoodBox>
      <hr style={{ width: "50%" }} />
      <PostContentBox>{post && post.memo}</PostContentBox>
      <PostButtonBox>수정</PostButtonBox>
      <PostButtonBox>삭제</PostButtonBox>
    </PostBox>
  );
};

export default Post;
