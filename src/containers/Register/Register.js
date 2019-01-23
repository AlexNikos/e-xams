import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Register.css';
import * as actions from '../../store/actions/registerActions'


class Register extends Component {

  state = {
    name: '',
    surname: '',
    email: '',
    password: '',
    type: 'Teacher'
  };

  handleTypeChange = (event) => {
    this.setState({ type: event.target.value });
    //this.props.setType(event.target.value);
  }

  handleName = (event) =>{
    this.setState({name: event.target.value});
  }

  handleSurname = (event) =>{
    this.setState({surname: event.target.value});
  }

  handleEmail = (event) =>{
    this.setState({email: event.target.value});
  }

  handlePassword = (event) =>{
    this.setState({password: event.target.value});
  }

  handleInfo = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.registerInfo(this.state.name, this.state.surname, this.state.email, this.state.password);
  }

  // handleTest = (e) => {
  //   e.preventDefault();
  //   this.props.setTest();
  // }

  render() {

    return (
      <div className={classes.Back}>
        <div className={classes.Register}>
          <form>
            <div className={classes.Radio}>
              <div>
                <label>
                  Teacher
          </label>
                <input type="radio" value="Teacher"
                  checked={this.state.type === 'Teacher'}
                  onChange={(event) => this.handleTypeChange(event)} />
              </div>
              <div>
                <label>
                  Student
          </label>
                <input type="radio" value="Student"
                  checked={this.state.type === 'Student'}
                  onChange={(event) => this.handleTypeChange(event)} />
              </div>
            </div><br />
            <div><label>Name: </label><input type="text" onChange={ (e) => this.handleName(e)}/></div><br />
            <div><label>Surname: </label><input type="text" onChange={ (e) => this.handleSurname(e)}/></div><br />
            <div><label>Email: </label><input type="text" onChange={ (e) => this.handleEmail(e)}/></div><br />
            <div><label>Password: </label><input type="password" onChange={ (e) => this.handlePassword(e)}/></div><br />
            <button onClick={(e) => this.handleInfo(e)}>REGISTER</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.register.name,
    surname: state.register.surname,
    email: state.register.email,
    password: state.register.password,
    type: state.register.type
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    //setType: (userType) => dispatch (actions.setType(userType) ),//dispatch({type:'SET_TYPE', userType: userType}),
    registerInfo: (name, surname, email, password) => dispatch( actions.setInfo(name, surname, email, password) ),//dispatch({type:'SET_INFO', name: name, surname:surname, email: email, password: password})
    //setTest: () => dispatch( actions.setTest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);