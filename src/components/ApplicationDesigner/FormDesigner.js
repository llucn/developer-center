import { Form, FormBuilder } from '@formio/react';
import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from '@carbon/react';
import { Save } from '@carbon/icons-react';

import './Style/formio.scss';

const FormDesigner = props => {
  console.log('props.form: ', props.form);

  // for demo only, we are using hardcoded json files
  const jsonMap = {
    startcenter: 'startCenter.json',
    workorder_list: 'workOrders.json',
    workorder_detail: 'workOrderDetail.json',
  };

  const [jsonSchema, setSchema] = useState();

  const [jsonOptions, setOptions] = useState();

  const [jsonSubmission, setSubmission] = useState();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFormConfig = async () => {
      const baseUrl = 'http://localhost:3001/formdesign/formconfig';

      const schemaResponse = await fetch(baseUrl + '/' + jsonMap[props.form]);
      const schemaJson = await schemaResponse.json();
      setSchema(schemaJson);

      // const optionsResponse = await fetch(baseUrl + '/' + jsonMap[props.form]);
      // const optionsJson = await optionsResponse.json();
      // setSchema(optionsJson);

      // const submissionResponse = await fetch(baseUrl + '/' + jsonMap[props.form]);
      // const submissionJson = await submissionResponse.json();
      // setSchema(submissionJson);

      setIsLoading(false);
    };

    fetchFormConfig();
  }, []);

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
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
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

          <Card className="my-4">
            <Card.Body>
              <Card.Title className="text-center">
                <h3>Preview</h3>
              </Card.Title>
              <Form form={jsonSchema} submission={jsonSubmission} />
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default FormDesigner;
