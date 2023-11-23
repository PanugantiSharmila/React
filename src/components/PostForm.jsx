import React, { useState } from "react";

export const PostForm = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "Post",
      body: JSON.stringify({
        userId,
        title,
        body: desc,
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
