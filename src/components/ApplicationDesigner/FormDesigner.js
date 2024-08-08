import { Form, FormBuilder } from '@formio/react';
import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from '@carbon/react';
import { Save } from '@carbon/icons-react';
import config from '../../config/config';

import './Style/formio.scss';

const FormDesigner = props => {
  // console.log('props.form: ', props.form);

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
      const baseUrl = config.developer_center_server + '/formdesign/formconfig';

      const schemaResponse = await fetch(baseUrl + '/' + jsonMap[props.form]);
      const schemaJson = await schemaResponse.json();
      setSchema(schemaJson);

      // const schemaResponse = await fetch(baseUrl + '/' + props.form + '_form.json');
      // const schemaJson = await schemaResponse.json();
      // setSchema(schemaJson);

      // const optionsResponse = await fetch(baseUrl + '/' + props.form + '_options.json');
      // const optionsJson = await optionsResponse.json();
      // setOptions(optionsJson);

      // const submissionResponse = await fetch(baseUrl + '/' + props.form + '_submission.json');
      // const submissionJson = await submissionResponse.json();
      // setSubmission(submissionJson);

      setIsLoading(false);
    };

    fetchFormConfig();
  }, []);

  const onFormChange = schema => {
    setSchema({ ...schema, components: [...schema.components] });
  };

  const saveForm = async () => {
    const response = await fetch(
      config.developer_center_server + '/formdesign/saveform',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formname: jsonMap[props.form],
          formjson: jsonSchema,
        }),
      }
    );
    console.log(await response.json());
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
