import React from "react";
import "../css/home.css";
import "../css/image.css";
import Greating from "./common/greating";
import Image from "./common/image";
import ContactDetails from "./common/contactDetails";
import SocialMediaIcons from "./common/socialMediaIcons";

const Home = (props) => {
  return (
    <div className="row">
      <div className="col-md">
        <div className="center">
          <Greating />
          <br />
          <ContactDetails />
          <br />
          <SocialMediaIcons />
        </div>
      </div>
      <div className="col-md">
        <Image />
      </div>
    </div>
  );
};

export default Home;
