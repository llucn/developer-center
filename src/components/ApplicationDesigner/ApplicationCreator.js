import React, { useState } from 'react';
import { Form, Stack, TextInput, Button } from '@carbon/react';
import { useHistory } from 'react-router-dom';

const ApplicationCreator = () => {
  const [appname, setAppname] = useState('');

  const history = useHistory();
  const navigateTo = () => history.push('/');

  const handleCreateApplication = () => {
    fetch('http://localhost:3001/application/createapp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        appname: appname,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    navigateTo();

    return false;
  };

  const onChange = e => {
    setAppname(e.target.value);
  };

  return (
    <div
      style={{
        // display: 'flex',
        margin: 'auto',
        width: '50%',
        padding: '10px',
      }}>
      <Form labelText="Create Application" onSubmit={handleCreateApplication}>
        <Stack gap={6}>
          <TextInput
            id="appname"
            type="text"
            labelText="Application Name"
            defaultValue={appname}
            onChange={onChange}
            placeholder="Application Name"
          />
          <Button type="submit" kind="primary">
            Create Application
          </Button>
        </Stack>
      </Form>
    </div>
  );
};

export default ApplicationCreator;
