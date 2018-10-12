import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return <FormContainer className="formContainer" />;
  }
}

const FormContainer = () => {
  return (
    <div>
      <form>
        <div className="form-text">Username</div>
        <input type="text" name="user" />
        <div className="form-text">Password</div>
        <input type="text" name="user" />
      </form>
    </div>
  );
};

export default App;
