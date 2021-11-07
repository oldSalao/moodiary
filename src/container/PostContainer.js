import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Post from "../components/Post";

const PostContainer = ({ query }) => {
  const postId = query.postId;
  const [loading, setLoading] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPostList = async () => {
      setLoading(true);
      try {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${localStorage.getItem("token")}`;
        const response = await axios.get(`posts/${postId}`);
        setPost(response.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    fetchPostList();
  }, [postId]);

  return <Post query={query} post={post} loading={loading}></Post>;
};

export default PostContainer;
