// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
import { CircularProgress } from "@mui/material";

const Post = ({ post, loading }) => {
  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      <div>{post && `postId : ${post.postId}`}</div>
      <div>{post && `메모 : ${post.memo}`}</div>
    </div>
  );
};

export default Post;
