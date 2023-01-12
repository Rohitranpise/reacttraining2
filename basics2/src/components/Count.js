import React, { Component } from "react";
import UpdatedComp from "./HigherOrComp";
class Count extends Component {
  render() {
    const { count, handler } = this.props;
    return (
      <button onClick={handler}>Count {count} times
      </button>
    );
  }
}

export default UpdatedComp(Count);
