import axios, { Axios } from "axios";
import React, { Component } from "react";

export default class PostListAxios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errMsg: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errMsg: "Error cannot retrieve data" });
      });
  }
  render() {
    const { posts, errMsg } = this.state;
    return (
      <div>
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {errMsg ? <div>{errMsg}</div> : <h1>No error</h1>}
      </div>
    );
  }
}
