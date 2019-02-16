import React, { Component } from 'react';
import DemoContainer from './comtainers/Demo';
import Step1Container from './comtainers/step1/step1';
import Step2Container from './comtainers/step2/step2';

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
          <Route path="/step2" component={Step2Container} />
        </Switch>
      </Router>
    );
  }
}

export default App;
