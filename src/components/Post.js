import axios from "axios";
import QueryString from "qs";
import { useEffect } from "react";
import { useState } from "react";

const Post = ({ location }) => {
  const query = QueryString.parse(location.search, { ignoreQueryPrefix: true });
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

  if (loading) {
    return <div>로딩중</div>;
  }

  return (
    <div>
      <div>{post && `postId : ${post.postId}`}</div>
      <div>{post && `메모 : ${post.memo}`}</div>
    </div>
  );
};

export default Post;
