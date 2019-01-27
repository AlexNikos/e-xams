import React, { Component } from 'react';
import classes from './Spinner.css';
import { connect } from 'react-redux';
import { fetchUser } from '../../../store/actions/authActions';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

class Spinner extends Component {

  componentWillMount() {
    console.log('[Spinner WillMount] ' + this.props.isAuth);
    
  }

  componentDidMount() {
    console.log(' [Spinner DidMount] ' + this.props.isAuth);

    this.props.fetchUserStatus().then(auth => {
      this.props.setAuth(auth);
      this.props.history.replace('/teacher');
      console.log('Auth is ' + auth);
  }).catch(auth => {
    this.props.setAuth(auth);
    this.props.history.replace('/login');
    console.log('Auth is ' + auth);
  });

  }

  componentWillUpdate() {
    console.log('[Spinner WillUpdate] ');
  }

  componentDidUpdate() {
    console.log('[Spinner DidUpdate] ');
  }

  render() {

    return (
      <div className={classes.Loader}>Loading...</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserStatus: () => dispatch(fetchUser())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Spinner);

