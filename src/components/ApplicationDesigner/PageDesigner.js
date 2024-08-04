import React from 'react';
import {
  TabsVertical,
  TabListVertical,
  Tab,
  TabPanels,
  TabPanel,
} from '@carbon/react';
import FormDesigner from './FormDesigner';

const PageDesigner = () => {
  return (
    <TabsVertical>
      <TabListVertical aria-label="List of tabs" scrollIntoView={true}>
        <Tab>Start Center</Tab>
        <Tab>Workorder List</Tab>
        <Tab>Workorder Detail</Tab>
      </TabListVertical>
      <TabPanels aria-label="List of panels">
        <TabPanel>
          <FormDesigner form={'startcenter'} />
        </TabPanel>
        <TabPanel>
          <FormDesigner form={'workorder_list'} />
        </TabPanel>
        <TabPanel>
          <FormDesigner form={'workorder_detail'} />
        </TabPanel>
      </TabPanels>
    </TabsVertical>
  );
};
export default PageDesigner;
