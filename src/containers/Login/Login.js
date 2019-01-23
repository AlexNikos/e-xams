import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import { Button, Card, Elevation, FormGroup, InputGroup } from "@blueprintjs/core";
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import classes from './Login.css';
import { signIn } from '../../store/actions/authActions'
//import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, Input } from 'mdbreact';

class Login extends Component {

  state = {
    email: "",
    password: "",
    auth: false,
    rememberMe: true
  };


  handleEmailChange = event => {

    this.setState({
      email: event.target.value
    });

  }

  handlePassChange = event => {

    this.setState({
      password: event.target.value
    });

  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signin(this.state.email, this.state.password);
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
              onChange={(event) => this.handleEmailChange(event)} />
            <input type="password" 
            placeholder="Password" 
            onChange={(event) => this.handlePassChange(event)}/>
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

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    signin: (email, password) => dispatch( signIn(email, password) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);