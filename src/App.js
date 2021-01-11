import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/common/navbar";
import Home from "./components/home";
import Education from "./components/education";
import Projects from "./components/projects";
import Contact from "./components/contact";
import About from "./components/about";
import NotFound from "./components/notfound";
import "./css/common/commonstyle.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Navbar />
        <main className="container" style={{ marginTop: "80px" }}>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/education" component={Education} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
