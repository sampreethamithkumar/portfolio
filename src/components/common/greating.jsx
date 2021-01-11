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
          <h1 className="text_font_heading">{this.state.nameGreeting}</h1>
          <h1 className="text_font_heading">{this.state.jobRole}</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Greating;
