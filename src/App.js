import React, { Component } from 'react';
import './app.scss';
import { Content, Theme } from '@carbon/react';
import ApplicationHeader from './components/ApplicationHeader';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import CarbonSample from './content/CarbonSample';
import ApplicationCards from './content/ApplicationCards';
import FormDesigner from './content/FormDesigner';

class App extends Component {
  render() {
    return (
      <Router>
        <Theme theme="g100">
          <ApplicationHeader />
        </Theme>
        <Content>
          <Switch>
            <Route exact path="/" component={ApplicationCards} />
            <Route exact path="/carbon" component={CarbonSample} />
            <Route
              exact
              path="/formdesigner/workorder_list"
              render={() => <FormDesigner form={'workorder_list'} />}
            />
            <Route
              exact
              path="/formdesigner/workorder_detail"
              render={() => <FormDesigner form={'workorder_detail'} />}
            />
          </Switch>
        </Content>
      </Router>
    );
  }
}

export default App;
