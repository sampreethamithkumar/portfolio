import React, { Component } from "react";
import Arrow from "./arrow";
import "../../css/common/dropDownContainer.css";
import { Link } from "react-router-dom";

class DropDownContainer extends Component {
  state = {
    expand: true,
  };

  handleExpand = () => {
    this.setState({ expand: !this.state.expand });
  };

  render() {
    const { title, subtitle, content, url, urlName } = this.props;
    return (
      <div className="row div_container">
        <div className="col">
          <h2>{title}</h2>
        </div>
        <div className="col-3">
          <Arrow expand={this.state.expand} expandDiv={this.handleExpand} />
        </div>
        <div>
          {" "}
          {subtitle && <h4 style={{ marginLeft: "10px" }}>{subtitle}</h4>}
        </div>
        {this.state.expand && (
          <div className="row">
            <div className="col">
              <p>{content}</p>
              {url && urlName && (
                <div>
                  <h6>Project Link:</h6>
                  <a target="_blank" href={url}>
                    {urlName}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default DropDownContainer;
