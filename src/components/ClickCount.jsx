import React, { Component } from "react";
//import UpdatedComponent from "./withCounter";
import withCounter from "./withCounter";

class ClickCount extends Component {
  render() {
    console.log(this.props.name);
    const { count, incrementCount, name } = this.props;
    return (
      <>
        <button onClick={incrementCount}>
          Clicked {count} times {name}
        </button>
      </>
    );
  }
}
export default withCounter(ClickCount, 2);
