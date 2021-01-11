import React from "react";
import DropDownContainer from "./common/dropDrownContainer";

const Projects = () => {
  return (
    <div>
      <h1 className="text_font_heading">Projects</h1>
      <DropDownContainer
        title={"MERN Stack Web Application"}
        content={`Fictitious Movie Rental services, to manage movies and their customer. Website developed using MongoDB, Express.js, React and Node.js. The Web- application mainly focus on all the major functionality faced in everyday life. Hosting done on Heroku.`}
        url={"https://aqueous-wildwood-44646.herokuapp.com/"}
        urlName={"Website"}
      />
      <DropDownContainer
        title={"Customer Management System"}
        content={`Fictitious Australian based company to manage their Customers and Staff developed in Java Server Faces Technology. The web application consists of two types of users (Admin and staff). Both the users have the capability to perform CRUD operation on customers. However, Admin has additional functionality such as assigning a customer to a staff, Creating/Removing a staff, Consuming and Producing the Printer type using RESTful webservices.`}
        url={"https://github.com/sampreethamithkumar/AUSPrinting-Ltd"}
        urlName={"GitHub"}
      />
      <DropDownContainer
        title={"Property Management System"}
        content={`Fictitious Australian property agent web application to perform CRUD operations on property. Project mainly concentrated on UI designing using bootstrap framework. Backend was developed using JSF technology and MySQL database.`}
        url={"https://github.com/sampreethamithkumar/FIT5042_lab"}
        urlName={"GitHub"}
      />
      <DropDownContainer
        title={"Auto Text Completion"}
        content={`Autocomplete or word complete is a feature which predicts the rest of the word a user is typing.
Autocomplete speeds up human-computer interactions when it correctly predicts the word a user intends to enter after only a few characters have been typed into a text input field. It is a text based application developed using Java.`}
        url={"https://github.com/sampreethamithkumar/AutoTextCompletion"}
        urlName={"GitHub"}
      />
      <DropDownContainer
        title={"Retail Store Software Simulation"}
        content={`Team of 4 members, worked individually to develop a fictitious Bake shop software. Software was developed using a Java to maintain customer orders. Three types of users’ login (Owner, Staff, Manager) with each user having different tasks to perform.`}
        url={"https://github.com/sampreethamithkumar/BakeShop"}
        urlName={"GitHub"}
      />
      <DropDownContainer
        title={"Game Development"}
        content={`A mini game project developed to learn and develop games using pygame module in python.

A game to shoot down the ballon. Balloon moves in X and Y directions. Player presses space bar to fire bullet and uses arrow key to move left and right. Number of bullets to shoot down the balloon is displayed. One the Balloon has been shot, Game has ended.`}
        url={"https://github.com/sampreethamithkumar/BalloonShooting"}
        urlName={"GitHub"}
      />
      <DropDownContainer
        title={"Disease Spreading Simlation"}
        content={`In the past, there have been viral disease epidemics which have got out of hand.This project works on simulating the way such diseases spread. Application developed using python.`}
        url={
          "https://github.com/sampreethamithkumar/DiseaseSpreadingSimulation"
        }
        urlName={"GitHub"}
      />
      <DropDownContainer
        title={"Software Simulation"}
        content={`The koala is a marsupial and is native to Australia. Koalas typically live in open eucalyptus (gum tree) forests. Koalas live mainly in trees and eat up to 1 kg of leaves per day. Their diet is restricted to a few varieties of gum trees (e.g., Manna Gum, Swamp Gum, Blue Gum, and River Red Gum). Koalas use some other varieties of trees (e.g. Wattle) for shelter on hot days. Only one koala at a time will occupy a shelter tree. Whilst moving on the ground between trees, koalas are exposed to attacks from predators. After bushfires in January 2020, several koala reserves were left devastated when forest habitat burnt leaving many koalas dead or injured and without sufficient food. The koala rescue team’s work is to inspect the reserves and provide help to the koalas. Unfortunately, the team operates within a restricted budget and sometimes has to make difficult decisions. The aim of the rescue team is to save as many koalas as possible within a limited budget. The koala reserve consists of a series of observation points where the rescue team pauses, observes the koala population, the trees, and the predators, and decides how the koalas can be helped. The help may be to move a koala to a safe haven if it is injured or there is not enough food or shelter.`}
        url={"https://github.com/sampreethamithkumar/KoalaRescue"}
        urlName={"GitHub"}
      />
      <DropDownContainer
        title={"Card Guess Game"}
        content={`The aim of the Guess a C♠rd Game is for a player to correctly guess a playing card drawn randomly by the computer. The player has a set number of attempts to guess the card. However, palyer's points at the start of the game and are penalised for each incorrect attempt. The game ends when a correct guess is entered, the points are zero or less, or the player has run out of guesses. The points remaining at the end of the game are counted as the score for the game. The player may play a series of games, with cumulative game results displayed after the final game when the player decides to stop playing.`}
        url={"https://github.com/sampreethamithkumar/CardGuessGame"}
        urlName={"GitHub"}
      />
      <DropDownContainer
        title={"Inventory System Simulation"}
        content={`The Australian firm was established in January 1st, 2000. For the past 20 years, there have been no
changes to the inventory management system. There was also no change in product model in the
past 20 years as it is quite robust design, the product model will not change in the future either.

Based on the previous data, prediction of stock and revenue at the end of the year is found.`}
        url={
          "https://github.com/sampreethamithkumar/Simulating_a_inventory_system"
        }
        urlName={"GitHub"}
      />
      <DropDownContainer
        title={"24Hour Web developement Hackathon"}
        content={`Microsoft presents India Innovation Series in Bangalore an initiative of IncubateIndia

Our Project Idea was shortlisted to top 10 among 30+ teams participating.
We were privileged to present our Project to the jury.
Being a fresher to the industry, and competing against Industry Experienced people was challenging and reaching the top 10 was pure Happiness.

  Using MapmyIndia web API we designed a project : Travel Diaries

Agenda of the Project
* To build a single platform to Connect friends and Maps.

Problem statement
* Most of the Time Travelers have a hard time finding the perfect review about a particular place.
* Deciding based on the fake reviews that we see could be tedious.

Objective
* To overcome the problems that Traveller are facing today.
`}
        url={"https://firechat-94411.web.app/"}
        urlName={"Website"}
      />
    </div>
  );
};

export default Projects;
