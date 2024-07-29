import React, { useState, useEffect } from 'react';
import { Button } from '@carbon/react';
import { Add } from '@carbon/icons-react';
import ApplicationHeader2 from '../components/ApplicationHeader/ApplicationHeader2';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import { Content, Theme } from '@carbon/react';
import ApplicationCards from './ApplicationCards';
import FormDesigner from './FormDesigner';

const CarbonSample = () => {
  return (
    <Router>
      <Theme theme="g100">
        <ApplicationHeader2 />
      </Theme>
      <Content>
        <Switch>
          <Route exact path="/" component={ApplicationCards} />
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
};
export default CarbonSample;
