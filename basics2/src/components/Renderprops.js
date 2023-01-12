import React, { Component } from "react";

class Renderprops extends Component {
  render() {
    return <div>{this.props.name(true)}</div>;
  }
}

export default Renderprops;
