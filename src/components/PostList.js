import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PostList = ({ query }) => {
  const { date } = query;
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPostList = async () => {
      setLoading(true);
      try {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${localStorage.getItem("token")}`;
        const response = await axios.get(
          `posts/date?offset=0&limit=10&date=${date}`
        );
        setPosts(response.data.list);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    fetchPostList();
  }, [date]);

  if (loading) {
    return <div>로딩중</div>;
  }

  return (
    <div>
      <div>{date}</div>
      {posts &&
        posts.map((post) => {
          return (
            <Link key={post.postId} to={`/post?postId=${post.postId}`}>
              {post.title}
            </Link>
          );
        })}
    </div>
  );
};

export default PostList;
