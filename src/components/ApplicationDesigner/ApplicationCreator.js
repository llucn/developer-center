import React, { useState } from 'react';
import {
  Form,
  Stack,
  TextInput,
  Button,
  TextArea,
  Select,
} from '@carbon/react';
import { useHistory } from 'react-router-dom';
import config from '../../config/config';

const ApplicationCreator = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('React');

  const history = useHistory();
  const navigateTo = () => history.push('/#/application/');

  const handleCreateApplication = async () => {
    const response = await fetch(
      config.developer_center_server + '/application/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          type: type,
          description: description,
        }),
      }
    );
    console.log(await response.json());

    navigateTo();
  };

  const onChangeForName = e => {
    setName(e.target.value);
  };

  const onChangeForDescription = e => {
    setDescription(e.target.value);
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
            defaultValue={name}
            onChange={onChangeForName}
            placeholder="Application Name"
          />
          <TextArea
            id="description"
            labelText="Description"
            placeholder="Description"
            onChange={onChangeForDescription}
          />
          <Select id="type" labelText="Type" value={type}>
            <option value="React">React</option>
          </Select>
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
