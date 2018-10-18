import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavContainer />
      </div>
    );
  }
}

const NavContainer = () => {
  return (
    <div className="nav-container">
      <button> test 1</button>
      <button> test 2</button>
    </div>
  );
};

export default App;
