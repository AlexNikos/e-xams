import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
//import { Button, Card, Elevation, FormGroup, InputGroup } from "@blueprintjs/core";
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import classes from './Login.css';
//import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, Input } from 'mdbreact';

export default class Login extends Component {

  state = {
    email: "",
    password: "",
    auth: false,
    rememberMe: true
  };


  handleChange = event => {

    this.setState({
      email: event.target.value
    }, () => { console.log(this.state.email); });

  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.email);
  }

  handleCheck = () => {

    this.setState((prevState) => { return { rememberMe: !prevState.rememberMe } });

  }

  render() {
    return (
      <div className={classes.Back}>
        <div className={classes.Login}>
          <h2>Sign in</h2>
          <form>
            <input type="text"
              placeholder="Email"
              onChange={(event) => this.handleChange(event)} />
            <input type="password" placeholder="Password" />
          </form>
          <div style={{ display: 'inline-block', width: '70%', marginBottom: '10px' }}>
            <div style={{ display: 'inline-block', float: 'left' }}>
              <label >Remember me?</label>
              <input style={{ height: '100%' }}
                type="checkbox"
                onChange={() => this.handleCheck()}
                defaultChecked={true} />
            </div>
            <button onClick={(event) => this.handleSubmit(event)}>Login</button>
          </div>
          <button
            style={{ display: 'inline-block', width: '50%', float: 'none', marginTop: '20px', marginBottom:'20px' }}>Anonymous Login</button><br />
          <p style={{ display: 'inline'}}>Need an account? Create one <Link to='/register'>here</Link></p>
        </div>
      </div>
    );
  }
}