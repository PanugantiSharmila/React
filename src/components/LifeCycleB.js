import React, { Component } from "react";

export default class LifeCycleB extends Component {
  constructor() {
    super();
    this.state = { name: "CGG2" };
    console.log("LifeCycle B constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log(" getDerivedStateFromProps");
    return null; //null or newstate
  }
  render() {
    console.log("Lifecycle B render");
    return <div>LifeCycleB</div>;
  }
  componentDidMount() {
    console.log("LifeCycle B componentDidMount");
  }
}
