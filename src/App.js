import React, { Component } from 'react';
import './app.scss';
import { Content, Theme, Grid, Column, Row } from '@carbon/react';
import ApplicationHeader from './components/ApplicationHeader';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import ApplicationCards from './content/ApplicationCards';
import ApplicationCreator from './components/ApplicationDesigner/ApplicationCreator';
import ApplicationNavigation from './components/ApplicationDesigner/ApplicationNavigation';
import PageDesigner from './components/ApplicationDesigner/PageDesigner';

class App extends Component {
  render() {
    const hash = window.location.hash;
    // alert(hash);

    return hash === '#/' ? (
      <Router basename="/">
        <Theme theme="g100">
          <ApplicationHeader />
        </Theme>

        <Theme theme="g10">
          <Grid condensed>
            <Column lg={16} style={{ height: '100%' }}>
              <Content
                style={{
                  margin: '64 0 0 0',
                  top: 48,
                }}>
                <Switch>
                  <Route exact path="/" component={ApplicationCards} />
                  <Route
                    exact
                    path="/appcreator"
                    component={ApplicationCreator}
                  />
                </Switch>
              </Content>
            </Column>
          </Grid>
        </Theme>
      </Router>
    ) : (
      <Router basename="application">
        <Theme theme="g100">
          <ApplicationHeader />
        </Theme>

        <Theme theme="g10">
          <Grid condensed>
            <Column lg={3} style={{ height: '100%' }}>
              <ApplicationNavigation />
            </Column>

            <Column lg={13} style={{ height: '100%' }}>
              <Content
                style={{
                  margin: '64 0 0 0',
                  top: 48,
                }}>
                <Switch>
                  <Route
                    exact
                    path="/components"
                    render={() => <h3>components</h3>}
                  />
                  <Route exact path="/pagedesigner" component={PageDesigner} />
                  <Route exact path="/routes" render={() => <h3>routes</h3>} />
                  <Route
                    exact
                    path="/resources"
                    render={() => <h3>resources</h3>}
                  />
                  <Route
                    exact
                    path="/datasources"
                    render={() => <h3>datasources</h3>}
                  />
                  <Route
                    exact
                    path="/settings"
                    render={() => <h3>settings</h3>}
                  />
                </Switch>
              </Content>
            </Column>
          </Grid>
        </Theme>
      </Router>
    );
  }
}

export default App;
