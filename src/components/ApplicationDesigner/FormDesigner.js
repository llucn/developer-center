import { Form, FormBuilder } from '@formio/react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import ReactJson from '@microlink/react-json-view';
import { Button } from '@carbon/react';
import { Save } from '@carbon/icons-react';

import './Style/formio.scss';

const FormDesigner = props => {
  console.log('props.form: ', props.form);

  const [jsonSchema, setSchema] = useState(
    require('./' + props.form + '_form.json')
  );

  const [jsonOptions, setOptions] = useState(
    require('./' + props.form + '_options.json')
  );

  const onFormChange = schema => {
    setSchema({ ...schema, components: [...schema.components] });
  };

  const saveForm = () => {
    console.log(jsonSchema);
    fetch('http://localhost:8080/formio/saveform', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonSchema),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Card className="my-4">
        <Card.Body>
          <FormBuilder
            form={jsonSchema}
            options={jsonOptions}
            onChange={onFormChange}
          />
        </Card.Body>
      </Card>
      <Button kind="primary" onClick={saveForm}>
        <Save size="16" />
        Save
      </Button>

      <Card title="Form JSON Schema" className="my-4">
        <Card.Body>
          <Card.Title className="text-center">As JSON Schema</Card.Title>
          <ReactJson src={jsonSchema} name={null} collapsed={true} />
        </Card.Body>
      </Card>
      <Card className="my-4">
        <Card.Body>
          <Card.Title className="text-center">As Rendered Form</Card.Title>
          <Form
            form={jsonSchema}
            submission={{
              data: {
                workorderid: '150867',
                wonum: 'MYWO1',
                description: 'my workorder 123',
              },
            }}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default FormDesigner;
