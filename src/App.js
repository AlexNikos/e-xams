import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import Layout from './containers/Layout/Layout';
import Spinner from './components/UI/Spinner/Spinner';


class App extends Component {

  state = {
    auth: null
  }

  componentWillMount() {
    console.log('[App WillMount] ');

  }

  componentDidMount() {
    console.log(' [App DidMount] ');

  }

  componentWillUpdate() {
    console.log('[App WillUpdate] ');
  }

  componentDidUpdate() {
    console.log('[App DidUpdate] ');

  }

  //set auth state that fetches from Spinner component
  setAuth = (auth) => {
    this.setState({ auth });
  }

  render() {

    return (
      <div>
        <Switch>
          <Route exact path="/teacher" exact component={Layout} />
          <Route exact path="/student" exact component={Layout} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" render={props => <Spinner setAuth={this.setAuth} {...props} />} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    );
  }
}

export default App;