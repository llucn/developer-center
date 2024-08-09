import React, { useState } from 'react';
import { Form, Stack, TextInput, Button } from '@carbon/react';
import { useHistory } from 'react-router-dom';
import config from '../../config/config';

const ApplicationCreator = () => {
  const [appname, setAppname] = useState('');

  const history = useHistory();
  const navigateTo = () => history.push('/#/application/');

  const handleCreateApplication = async () => {
    const response = await fetch(
      config.developer_center_server + '/application/createapp',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          appname: appname,
        }),
      }
    );
    console.log(await response.json());

    navigateTo();
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
      <Form labelText="Create Application">
        <Stack gap={6}>
          <TextInput
            id="appname"
            type="text"
            labelText="Application Name"
            defaultValue={appname}
            onChange={onChange}
            placeholder="Application Name"
          />
          <Button
            type="button"
            kind="primary"
            onClick={handleCreateApplication}>
            Create Application
          </Button>
        </Stack>
      </Form>
    </div>
  );
};

export default ApplicationCreator;
