import React from "react";
import {Col} from "react-bootstrap";
import InputComponent from "../Components/Common/Input";
import SelectComponent from "../Components/Common/Select";
import DateComponent from "../Components/Common/DatePicker";

export const generateFormFields = (formObject, formData, setFormData ) => {
    const onChangeEvent = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        formObject &&
        formObject.map((field, index) => (
            <Col lg="4" key={field.key}>
                {field.type === "text" && (
                    <InputComponent
                        {...field}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={onChangeEvent}
                    />
                )}
                {field.type === "select" && (
                    <SelectComponent
                        {...field}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={onChangeEvent}
                    />
                )}
                {field.type === "date" && (
                    <DateComponent
                        {...field}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={onChangeEvent}
                    />
                )}
            </Col>
        ))
    );
};