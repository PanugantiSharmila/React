import React, { Component } from "react";
import { ComponentF } from "./ComponentF";
import UserContext, { UserConsumer } from "./userContext";

class ComponentE extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        ComponentE context {this.context}
        <ComponentF />
      </div>
    );
  }
}
//ComponentE.contextType = UserContext;
export default ComponentE;
