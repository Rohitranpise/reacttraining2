import React, { Component } from "react";
import ChildRef from "./ChildRef";

class ParentRef extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <ChildRef ref={this.inputRef} />
        <button onClick={this.handler}>focus</button>
      </div>
    );
  }
}

export default ParentRef;
