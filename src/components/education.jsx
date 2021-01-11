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
          content={`Being a self taught programmer, I always felt my learning was unstructured. That's when I decided, I have to take up a master's degree in Programming to enhance my knowledge in programming as well as strengthen my fundamentals with a structured course. Started my master's degree during pandemic with not much exposure to people and australian culture, Things were tough in the initial. However, out of all the odds, my passion for learning helped me score exceptional grades during my 2 semesters in Monash University.`}
        />
        <DropDownContainer
          title={"Bachelors of Engineering in Electronics and Communication"}
          subtitle={"Visvesvaraya Technological University, VTU"}
          content={`Taking electronics as en elective during my 12th grade, made me more enthusiastic to learn more in detail about semi conductors and capacitors. This enthusiasm led me to purse a Bachelors degress in Electronics and Communication. During my bachelors degree, I gained strong knowledge on working and building of semi conductors chips. I participated in many robotics and PCB designing workshops. I also did a one month Internship in Bharat Sanchar Nigam Limited(BSNL) to learn more about wireless transmission technology.`}
        />
      </div>
    );
  }
}

export default Education;
