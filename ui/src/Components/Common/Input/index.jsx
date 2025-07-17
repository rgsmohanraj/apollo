import React, { useEffect } from "react";
import { Form } from 'react-bootstrap';
import "./style.scss";

const InputComponent = ({ label, value = '', name, id, required, onChange, controlId, labelaction, type, validated }) => {
    useEffect(() => {
        const input = document.querySelector('.no-scroll');
        if (input) {
            input.addEventListener('wheel', handleWheel);
            return () => input.removeEventListener('wheel', handleWheel);
        }
    }, [validated]);
    const handleWheel = (event) => {
        event.preventDefault();
    };
    return (
        <Form.Group className={labelaction ? "" : "mb-3"} controlId={controlId}>
            {labelaction ? " " : <Form.Label className={required ? 'mandatory' : ''}>{label}</Form.Label>}
            <Form.Control
                className="no-spinners no-scroll"
                type={type}
                size="sm"
                id={id}
                required={required}
                placeholder={`Please Enter`}
                name={name}
                autoComplete="off"
                value={value}
                onChange={onChange}
                isInvalid={!value && validated && required}
            />
            {required && validated && !value && (
                <Form.Control.Feedback type="invalid">
                    {`Please provide a valid ${label}`}
                </Form.Control.Feedback>
            )}
        </Form.Group>
    )
}
export default InputComponent;
