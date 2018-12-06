import React, { Component } from 'react';
//import { Button, Card, Elevation, FormGroup, InputGroup } from "@blueprintjs/core";
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import classes from './Login.css';
//import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, Input } from 'mdbreact';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }


  handleChange = event => {
    this.setState({
      email: event.target.value
    });
    console.log(this.state.email);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.email);
  }

  render() {
    return (
      <div className={classes.Back}>
        <div className={classes.Login}>
          <h2>Sign in</h2>
          <form>
            <input type="text" 
            placeholder="Email" 
            onChange={(event)=>this.handleChange(event)}/><br />
            <input type="password" placeholder="Password" /><br />
          </form>
          <div style={ {display: 'inline-block', width: '70%'}}>
            <div style={ {display: 'inline-block', width: '40%', float: 'left'}}>
              <label >Remember me</label>
              <input style={ {height: '100%'}} type="checkbox" onChange={this.handleCheck} defaultChecked={true} />
            </div>
            <button onClick={(event)=>this.handleSubmit(event)}>Login</button>
          </div>
          <p>Need an account? Create one here</p>
        </div>
      </div>
    );
  }
}