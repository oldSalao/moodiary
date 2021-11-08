import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import PostList from "../components/PostList";

const PostListContainer = ({ query }) => {
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

  return <PostList query={query} date={date} posts={posts} loading={loading} />;
};

export default PostListContainer;
