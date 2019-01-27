import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Register.css';
import { registerUser } from '../../store/actions/authActions';
import * as actions from '../../store/actions/registerActions'


class Register extends Component {

  state = {
    name: '',
    surname: '',
    email: '',
    password: '',
    type: ''
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
    let { name, surname, fullname, email, password, type} = this.state;
    console.log(this.state);

    this.props.register(name, surname, email, password, type)
    .then((msg) => console.log(msg)); /*this.props.history.replace('/teacher')*/
    
  }


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

// const mapStateToProps = (state) => {
//   return {
//     name: state.register.name,
//     surname: state.register.surname,
//     email: state.register.email,
//     password: state.register.password,
//     type: state.register.type
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return{
    
    register: (name, surname, email, password, type) => dispatch( registerUser(name, surname, email, password, type) )

  }
}

export default connect(null, mapDispatchToProps)(Register);