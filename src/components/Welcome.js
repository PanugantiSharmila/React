import { Component } from "react";

class Welcome extends Component {
  render() {
    //console.log(this.props.name)
    const {name,alias}=this.props
    return <h1>Hello !!{name} also known as {alias}</h1>;

  }
  
}
export default Welcome;
