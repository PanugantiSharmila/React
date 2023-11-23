import axios from "axios";
import React, { Component } from "react";

export default class PostFormAxios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <input
            type="text"
            placeholder="User ID"
            name="userId"
            value={this.state.userId}
            onChange={this.changeHandler}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={this.state.title}
            onChange={this.changeHandler}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Desc"
            value={this.state.body}
            name="body"
            onChange={this.changeHandler}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}
