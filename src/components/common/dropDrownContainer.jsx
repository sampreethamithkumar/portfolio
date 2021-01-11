import React, { Component } from "react";
import Arrow from "./arrow";
import "../../css/common/dropDownContainer.css";

class DropDownContainer extends Component {
  state = {
    expand: false,
  };

  handleExpand = () => {
    this.setState({ expand: !this.state.expand });
  };

  render() {
    const { title, subtitle, content, url, urlName } = this.props;
    return (
      <div className="row div_container">
        <div className="col">
          <h2 className="text_font_heading">{title}</h2>
        </div>
        <div className="col-3">
          <Arrow expand={this.state.expand} expandDiv={this.handleExpand} />
        </div>
        <div>
          {" "}
          {subtitle && (
            <h4 style={{ marginLeft: "10px" }} className="text_font_heading">
              {subtitle}
            </h4>
          )}
        </div>
        {this.state.expand && (
          <div className="row">
            <div className="col">
              <p style={{ fontSize: "1.2rem" }}>{content}</p>
              {url && urlName && (
                <div>
                  <h5>Project Link:</h5>
                  <a
                    target="_blank"
                    href={url}
                    style={{ fontSize: "1.2rem", marginBottom: "20px" }}
                  >
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
