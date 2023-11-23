import { Component, Fragment } from "react";
import React from "react";

export class FocusInput extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    //1.
    this.cbRef = null;
    this.setCbRef = (element) => (this.cbRef = element);
  }
  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus();
    }
    this.inputRef.current.focus();
  }
  render() {
    return (
      <Fragment>
        <input type="text" ref={this.inputRef} />
        <br />
        <br />
        <input type="text" ref={this.setCbRef} />
      </Fragment>
    );
  }
}
