import React, { Component } from 'react';
import classes from './Register.css';


class Register extends Component {

  state = {

  };

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
                <input type="radio" value="Teacher" checked={true} />
              </div>
              <div>
                <label>
                  Student
          </label>
                <input type="radio" value="Student" />
              </div>
            </div><br />
            <div><label>Name: </label><input type="text"  /></div><br />
            <div><label>Surname: </label><input type="text"  /></div><br />
            <div><label>Email: </label><input type="text"  /></div><br />
            <div><label>Password: </label><input type="password"  /></div><br />
            <div><label>Password: </label><input type="password"  /></div><br />
            <button>REGISTER</button>
          </form>
        </div>
      </div>
    );
  }
}
export default Register;