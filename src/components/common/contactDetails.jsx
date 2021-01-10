import React, { Component } from "react";

class ContactDetails extends Component {
  state = {
    phone: "+61-478826487",
    email: "sampreethamithkumar@gmail.com",
    address: "284 Neerim road, Carnegie VIC - 3163",
    mailto: "mailto: sampreethamithkumar@gmail.com",
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-1" style={{ marginLeft: "10px" }}>
            <i class="fa fa-phone fa-lg" aria-hidden="true"></i>
          </div>
          <div className="col" style={{ fontSize: "1.2rem" }}>
            {this.state.phone}
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-1" style={{ marginLeft: "10px" }}>
            <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
          </div>
          <div className="col" style={{ fontSize: "1.1rem" }}>
            <a style={{ color: "black" }} href={this.state.mailto}>
              {this.state.email}
            </a>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-1" style={{ marginLeft: "12px" }}>
            <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i>
          </div>
          <div className="col" style={{ fontSize: "1.2rem" }}>
            {this.state.address}
          </div>
        </div>
      </div>
    );
  }
}

export default ContactDetails;
