import React from 'react';
import {
  TabsVertical,
  TabListVertical,
  Tab,
  TabPanels,
  TabPanel,
} from '@carbon/react';
import PageDesigner from './PageDesigner';

const ApplicationDesigner = () => {
  return (
    <TabsVertical defaultSelectedIndex={1}>
      <TabListVertical
        aria-label="List of tabs"
        scrollIntoView={true}
        contained>
        <Tab>Components</Tab>
        <Tab>Pages</Tab>
        <Tab>Routes</Tab>
        <Tab>Resources</Tab>
        <Tab>Datasources</Tab>
        <Tab>Settings</Tab>
      </TabListVertical>
      <TabPanels>
        <TabPanel>Components</TabPanel>
        <TabPanel>
          <PageDesigner />
        </TabPanel>
        <TabPanel>Routes</TabPanel>
        <TabPanel>Resources</TabPanel>
        <TabPanel>Datasources</TabPanel>
        <TabPanel>Settings</TabPanel>
      </TabPanels>
    </TabsVertical>
  );
};
export default ApplicationDesigner;
