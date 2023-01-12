import React, { Component } from "react";
import UpdatedComp from "./HigherOrComp";

class HoverCount extends Component {
  render() {
    const { count, handler } = this.props;
    return <h2 onMouseOver={handler}>you just hover {count} times</h2>;
  }
}

export default UpdatedComp(HoverCount);
