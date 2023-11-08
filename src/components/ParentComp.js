import React, { Component, PureComponent } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

export class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "CGG",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "CGG" });
      console.log(this.state);
    }, 2000);
  }
  render() {
    console.log(
      "*************************Parent Component Render****************************"
    );
    return (
      <div>
        ParentComp
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;