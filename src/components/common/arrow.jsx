import React, { Component } from "react";
import "../../css/common/commonstyle.css";

class Arrow extends Component {
  render() {
    let classes = "";
    if (!this.props.expand) classes = "fa fa-angle-down fa-3x iClass";
    else classes = "fa fa-angle-up fa-3x iClass";

    return (
      <i
        className={classes}
        aria-hidden="true"
        onClick={this.props.expandDiv}
        style={{ cursor: "pointer" }}
      ></i>
    );
  }
}

export default Arrow;
