import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import "./style.scss";

const SelectComponent = ({ label, onChange, options, required,name,value,labelaction, validated }) => {

  return (
    <Form.Group className={labelaction?"":"mb-3"}>
     {labelaction ? " " :<Form.Label className={required ? 'mandatory' : ''}>{label}</Form.Label>}
      <Form.Select
        aria-label={label}
        size="sm"
        name={name}
        value={value}
        onChange={onChange}
        isInvalid={required && !value && validated}
      >
        <option value="" hidden>{`Please Select`}</option>
        {options && options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
      
      {required && validated && !value && (
        <Form.Control.Feedback type="invalid">
          {`Please select a valid ${label}`}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default SelectComponent;

