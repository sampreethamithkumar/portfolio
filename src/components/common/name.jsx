import React, { Component } from "react";

class Name extends Component {
  state = {
    name: "SAMPREETH AMITH KUMAR",
  };

  render() {
    return <React.Fragment>{this.state.name} </React.Fragment>;
  }
}

export default Name;
