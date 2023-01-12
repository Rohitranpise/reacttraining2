import React from "react";

const UpdatedComp = (OriginalComp) => {
  class NewHigherOrComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    handler = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      return <OriginalComp count={this.state.count} handler={this.handler} />;
    }
  }
  return NewHigherOrComp;
};

export default UpdatedComp;
