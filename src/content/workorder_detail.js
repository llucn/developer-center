import { Form, FormBuilder } from '@formio/react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import ReactJson from '@microlink/react-json-view';
import './Style/formio.scss';

const WorkorderDetail = () => {
  const [jsonSchema, setSchema] = useState(
    require('./workorder_detail_form.json')
  );

  const [jsonBuilder, setBuilder] = useState(
    require('./workorder_detail_builder.json')
  );

  // const [jsonSchema, setSchema] = useState({ components: [] });

  const onFormChange = schema => {
    setSchema({ ...schema, components: [...schema.components] });
  };

  return (
    <>
      <FormBuilder form={jsonSchema} onChange={onFormChange} />

      {/* <Card title="Form JSON Schema" className="my-4">
        <Card.Body>
          <Card.Title className="text-center">As JSON Schema</Card.Title>
          <ReactJson src={jsonSchema} name={null} collapsed={true}></ReactJson>
        </Card.Body>
      </Card>
      <Card className="my-4">
        <Card.Body>
          <Card.Title className="text-center">As Rendered Form</Card.Title>
          <Form form={jsonSchema} />
        </Card.Body>
      </Card> */}
    </>
  );
};
export default WorkorderDetail;
