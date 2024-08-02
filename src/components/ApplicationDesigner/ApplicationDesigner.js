import React from 'react';
import {
  TabsVertical,
  TabListVertical,
  Tab,
  TabPanels,
  TabPanel,
} from '@carbon/react';
import FormDesigner from './FormDesigner';

const ApplicationDesigner = () => {
  return (
    <div>
      <TabsVertical style={{ height: '100%' }}>
        <TabListVertical aria-label="List of tabs">
          <Tab>Start Center</Tab>
          <Tab>Workorder List</Tab>
          <Tab>Workorder Detail</Tab>
          <Tab>Workorder ...</Tab>
          <Tab>Workorder ...</Tab>
          <Tab>Workorder ...</Tab>
          <Tab>Workorder ...</Tab>
          <Tab>Workorder ...</Tab>
        </TabListVertical>
        <TabPanels>
          <TabPanel>
            <FormDesigner form={'startcenter'} />
          </TabPanel>
          <TabPanel>
            <FormDesigner form={'workorder_list'} />
          </TabPanel>
          <TabPanel>
            <FormDesigner form={'workorder_detail'} />
          </TabPanel>
          <TabPanel>...</TabPanel>
          <TabPanel>...</TabPanel>
          <TabPanel>...</TabPanel>
          <TabPanel>...</TabPanel>
          <TabPanel>...</TabPanel>
        </TabPanels>
      </TabsVertical>
    </div>
  );
};
export default ApplicationDesigner;
