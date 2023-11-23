import React, { Component } from "react";

class User extends Component {
  render() {
    return <div>User: {this.props.render(false)}</div>;
  }
}
export default User;
