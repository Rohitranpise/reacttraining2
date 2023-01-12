import React, { Component } from "react";
import { UserConsumer } from "./Usercontext";

class ComponentC extends Component {
  render() {
    return (
      <UserConsumer>
        {(userName) => {
          return <h3>{userName}</h3>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentC;
