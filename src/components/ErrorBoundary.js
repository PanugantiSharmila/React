import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, info) {
    console.log(error, " : ", info);
  }
  render() {
    if (this.state.hasError) {
      return <h1>There is no hero name in the props check the names </h1>;
    }
    return this.props.children;
  }
}
