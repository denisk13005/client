import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  return (
    <div>
      <h1 style={{ margin: "0" }}>POSTS </h1>
      <section
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </section>
    </div>
  );
};

export default Posts;
