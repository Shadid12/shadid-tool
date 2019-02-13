import React, { Component } from 'react';
import DemoContainer from './comtainers/Demo';
import Step1Container from './comtainers/step1/step1';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={DemoContainer} />
          <Route path="/step1" component={Step1Container} />
        </Switch>
      </Router>
    );
  }
}

export default App;
