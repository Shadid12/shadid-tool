import React, { Component } from 'react';
import DemoContainer from './comtainers/Demo';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={DemoContainer} />
      </Router>
    );
  }
}

export default App;
