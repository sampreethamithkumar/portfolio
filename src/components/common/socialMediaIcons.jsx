import React, { Component } from "react";

class SocialMediaIcons extends Component {
  handleLinkedClick = () => {
    window.open("https://www.linkedin.com/in/sampreethamithkumar/", "_blank");
  };

  handleFacebookClick = () => {
    window.open("https://www.facebook.com/sampreethamith96", "_blank");
  };

  handleInstagramClick = () => {
    window.open("https://www.instagram.com/sampreethamith/", "_blank");
  };

  render() {
    return (
      <div style={{ marginLeft: "30px" }}>
        <i
          className="fa fa-facebook-official fa-2x"
          aria-hidden="true"
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={this.handleFacebookClick}
        ></i>
        <i
          class="fa fa-instagram fa-2x"
          aria-hidden="true"
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={this.handleInstagramClick}
        ></i>
        <i
          class="fa fa-linkedin-square fa-2x"
          aria-hidden="true"
          style={{ cursor: "pointer" }}
          onClick={this.handleLinkedClick}
        ></i>
      </div>
    );
  }
}

export default SocialMediaIcons;
