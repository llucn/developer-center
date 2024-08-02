import { Form, FormBuilder } from '@formio/react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import ReactJson from '@microlink/react-json-view';
import { Button } from '@carbon/react';
import { Save } from '@carbon/icons-react';

import './Style/formio.scss';

const FormDesigner = props => {
  console.log('props.form: ', props.form);

  // for demo only, we are using hardcoded json files
  const jsonMap = {
    startcenter: 'startCenter.json',
    workorder_list: 'workOrder.json',
    workorder_detail: 'workOrderDetail.json',
  };

  const [jsonSchema, setSchema] = useState(
    require('./' + props.form + '_form.json')
  );

  const [jsonOptions, setOptions] = useState(
    require('./' + props.form + '_options.json')
  );

  const [jsonSubmission, setSubmission] = useState(
    require('./' + props.form + '_submission.json')
  );

  const onFormChange = schema => {
    setSchema({ ...schema, components: [...schema.components] });
  };

  const saveForm = () => {
    console.log(jsonSchema);
    fetch('http://localhost:3001/formdesign/saveform', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formname: jsonMap[props.form],
        formjson: jsonSchema,
      }),
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
        Save Form
      </Button>

      {/* <Card title="Form JSON Schema" className="my-4">
        <Card.Body>
          <Card.Title className="text-center">As JSON Schema</Card.Title>
          <ReactJson src={jsonSchema} name={null} collapsed={true} />
        </Card.Body>
      </Card> */}

      <Card className="my-4">
        <Card.Body>
          <Card.Title className="text-center">Preview</Card.Title>
          <Form form={jsonSchema} submission={jsonSubmission} />
        </Card.Body>
      </Card>
    </>
  );
};

export default FormDesigner;
