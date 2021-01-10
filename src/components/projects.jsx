import React, { Component } from "react";
import DropDownContainer from "./common/dropDrownContainer";

const Projects = () => {
  return (
    <div>
      <h1 className="text_font_heading">Projects</h1>
      <DropDownContainer
        title={"MERN Stack Web Application"}
        content={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ipsa, placeat voluptatem eum voluptas, illum saepe pariatur facere aliquam nobis maxime id debitis veritatis possimus aliquid. Consequuntur dolore blanditiis asperiores?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, necessitatibus temporibus mollitia excepturi officiis molestiae optio consequuntur qui eaque laudantium fugit tempora suscipit aut ullam et nihil animi blanditiis! Eos.`}
        url={"https://aqueous-wildwood-44646.herokuapp.com/"}
        urlName={"Website"}
      />
      <DropDownContainer
        title={"Customer Management System"}
        content={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ipsa, placeat voluptatem eum voluptas, illum saepe pariatur facere aliquam nobis maxime id debitis veritatis possimus aliquid. Consequuntur dolore blanditiis asperiores?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, necessitatibus temporibus mollitia excepturi officiis molestiae optio consequuntur qui eaque laudantium fugit tempora suscipit aut ullam et nihil animi blanditiis! Eos.`}
        url={"https://aqueous-wildwood-44646.herokuapp.com/"}
        urlName={"GitHub"}
      />
    </div>
  );
};

export default Projects;
