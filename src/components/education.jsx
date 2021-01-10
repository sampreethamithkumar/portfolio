import React, { Component } from "react";
import DropDownContainer from "./common/dropDrownContainer";

class Education extends Component {
  render() {
    return (
      <div>
        <h1 className="text_font_heading">Education</h1>
        <DropDownContainer
          title={"Master of Information Technology"}
          subtitle={"Monash University, Australia"}
          content={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ipsa, placeat voluptatem eum voluptas, illum saepe pariatur facere aliquam nobis maxime id debitis veritatis possimus aliquid. Consequuntur dolore blanditiis asperiores?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, necessitatibus temporibus mollitia excepturi officiis molestiae optio consequuntur qui eaque laudantium fugit tempora suscipit aut ullam et nihil animi blanditiis! Eos.`}
        />
        <DropDownContainer
          title={"Bachelors of Engineering in Electronics and Communication"}
          subtitle={"Visvesvaraya Technological University, VTU"}
          content={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ipsa, placeat voluptatem eum voluptas, illum saepe pariatur facere aliquam nobis maxime id debitis veritatis possimus aliquid. Consequuntur dolore blanditiis asperiores?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, necessitatibus temporibus mollitia excepturi officiis molestiae optio consequuntur qui eaque laudantium fugit tempora suscipit aut ullam et nihil animi blanditiis! Eos.`}
        />
      </div>
    );
  }
}

export default Education;
