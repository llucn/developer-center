import React from 'react';
import { useState } from 'react';
import { Form, Stack, TextInput, Button } from '@carbon/react';

const ApplicationCreator = () => {
  const { appname, setAppname } = useState('');

  const handleCreateApplication = () => {
    // TODO: Implement create application logic
    console.log();
  };
  return (
    <div
      style={{
        // display: 'flex',
        margin: 'auto',
        width: '50%',
        padding: '10px',
      }}>
      <Form labelText="Create Application">
        <Stack gap={6}>
          <TextInput
            id="appname"
            type="text"
            labelText="Application Name"
            size={'lg'}
            placeholder="Application Name"
          />
          <Button
            type="submit"
            kind="primary"
            onSubmit={handleCreateApplication}>
            Create Application
          </Button>
        </Stack>
      </Form>
    </div>
  );
};
export default ApplicationCreator;
