import React, { Component } from 'react';
//import { Button, Card, Elevation, FormGroup, InputGroup } from "@blueprintjs/core";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import classes from './Login.css';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, Input } from 'mdbreact';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className={classes.Back}>
      <div className={classes.Login}>
        <h2>Sign in</h2>
        <form>
          <input type="text" placeholder="Email" /><br />
          <input type="password" placeholder="Password" /><br />
          <div>
            <label >Remember me</label>
            <input type="checkbox" onChange={this.handleCheck} defaultChecked={true} />
            <button>Login</button></div>

        </form>
      </div>
      </div>
    );
  }
}