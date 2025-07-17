import React from 'react';
import { Form } from 'react-bootstrap';

const DateComponent = ({ label, value = '', name, onChange, required, controlId, errorMsg, validated }) => {
  const isValid = !required && value !== '';

  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="date"
        value={value}
        size="sm"
        name={name}
        placeholder={`Please Enter ${label}`}
        onChange={onChange}
        required={required}
        isInvalid={!isValid && validated}
      />
      {!isValid && validated&&
        <Form.Control.Feedback type="invalid">
          {`Please Enter ${label}`}
        </Form.Control.Feedback>}
    </Form.Group>
  );
};

export default DateComponent;
