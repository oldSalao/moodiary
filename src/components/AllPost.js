import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const AllPost = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        setLoading(true);
        setPost(null);
        setError(null);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${localStorage.getItem("token")}`;
        const response = await axios.get("/posts");
        setLoading(false);
        setPost(response.data);
      } catch (e) {
        setError(e);
        console.log(error);
      }
    };
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div>로딩중</div>;
  }
  if (error) {
    return <div>에러발생</div>;
  }

  return (
    <div>
      {post &&
        post.list.map((post) => {
          return (
            <div key={post.postId}>
              {post.title} : {post.postDate}
            </div>
          );
        })}
    </div>
  );
};

export default AllPost;
