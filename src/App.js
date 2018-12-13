import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import Layout from './containers/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/register" component={Register} />
        <Route path="/" exact component={Login} />
        <Route path="/main" component={Layout} />
      </div>
    );
  }
}

export default App;
