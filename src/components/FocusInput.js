import { Component } from "react";
import React from "react";

export class FocusInput extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    return <input type="text" ref={this.inputRef} />;
  }
}
