import React, { Component } from "react";

export class RegComp extends Component {
  render() {
    console.log("Regular Comp Render");
    return <div>RegComp{this.props.name}</div>;
  }
}

export default RegComp;
