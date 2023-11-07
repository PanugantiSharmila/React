import { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export class LifeCycleA extends Component {
  constructor() {
    super();
    this.state = { name: "CGG" };
    console.log("LifeCycle A constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log(" getDerivedStateFromProps");
    return null; //null or newstate
  }
  shouldComponentUpdate() {
    console.log("LifeCycle A shoulComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Lifecycle A getSnapshotBeforeUpdate");
    return null;
  }
  changeState = () => {
    this.setState({ name: "Welcome" });
  };

  render() {
    console.log("Lifecycle A render");
    return (
      <div>
        LifeCycleA
        <button onClick={this.changeState}>change state</button>
        <LifeCycleB />
      </div>
    );
  }
  componentDidUpdate() {
    console.log("Lifecycle A omponentDidUpdate");
  }
  componentDidMount() {
    console.log("LifeCycle A componentDidMount");
  }
}
