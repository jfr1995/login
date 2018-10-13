import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <ContactContainer />
        <FormContainer />
      </div>
    );
  }
}

const ContactContainer = () => {
  return (
    <div className="contact-container">
      <ul className="contact-list">
        <li>Email</li>
        <li>Address</li>
        <li>Phone number</li>
      </ul>
    </div>
  );
};

const FormContainer = () => {
  return (
    <div>
      <form>
        <div className="form-text">Username</div>
        <input type="text" className="input-fld" />
        <div className="form-text">Password</div>
        <input type="text" className="input-fld" />
      </form>
    </div>
  );
};

export default App;
