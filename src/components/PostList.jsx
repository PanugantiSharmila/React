import React, { useEffect, useState } from "react";

export const PostList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      PostList
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
