import React, { Component } from "react";

class Greating extends Component {
  state = {
    nameGreeting: "Hi, I'm Sampreeth",
    jobRole: "Full Stack Developer",
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>{this.state.nameGreeting}</h1>
          <h1>{this.state.jobRole}</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Greating;
