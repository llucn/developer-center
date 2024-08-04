import React, { Component } from 'react';
import './app.scss';
import { Content, Theme } from '@carbon/react';
import ApplicationHeader from './components/ApplicationHeader';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import CarbonSample from './content/CarbonSample';
import ApplicationCards from './content/ApplicationCards';
import ApplicationCreator from './components/ApplicationDesigner/ApplicationCreator';
import ApplicationDesigner from './components/ApplicationDesigner/ApplicationDesigner';
import PageDesigner from './components/ApplicationDesigner/PageDesigner';

class App extends Component {
  render() {
    return (
      <Router>
        <Theme theme="g100">
          <ApplicationHeader />
        </Theme>
        <Theme theme="g30">
          <Content>
            <Switch>
              <Route exact path="/" component={ApplicationCards} />
              <Route exact path="/carbon" component={CarbonSample} />
              <Route exact path="/appcreator" component={ApplicationCreator} />
              <Route
                exact
                path="/appdesigner"
                component={ApplicationDesigner}
              />
              <Route exact path="/pagedesigner" component={PageDesigner} />
            </Switch>
          </Content>
        </Theme>
      </Router>
    );
  }
}

export default App;
