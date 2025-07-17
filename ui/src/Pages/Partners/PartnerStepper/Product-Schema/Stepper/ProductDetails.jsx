import React, { useState } from "react";
import { Card, Col, Row, Form } from "react-bootstrap";
import InputComponent from "../../../../../Components/Common/Input";
import SelectComponent from "../../../../../Components/Common/Select";
import DateComponent from "../../../../../Components/Common/DatePicker";
// import { formObj } from "../stepper-fields";
import FooterSubmit from "../../../../../Components/Common/FooterSubmit";
import PageHeader from "../../../../../Components/Common/Page-Header";
import { CaretRightOutlined } from '@ant-design/icons';
import "../style.scss";

export const ProductDetails = ( { validated, handleSubmit, formObj, setProductFormObj } ) => {
    const [productDetailsForm, setProductDetailsForm] = useState({});
    // const [validated, setValidated] = useState(false);

    const onChangeEvent = (e) => {
        const { name, value } = e.target;
        setProductDetailsForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    // console.log(formObj,"setProductFormObj",handleSubmit)
    console.log(validated,"ProductDetails-validated")
    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }
    //     setValidated(true);
    // };

    return (
        <>
            <div className="product-details">
                <Row>
                {/* <PageHeader isBreadcrumbPresent={true} /> */}
                <div className="fs-12 lh-16 fw-500 ff-inter pt-3 color-breadcrumbs">Partners <CaretRightOutlined /> Early Salary Services Private Limited <CaretRightOutlined /> <span className="color-tooltip-bg">Product</span></div>
                    <span className="pb-3 pt-2 fs-24 fw-600 color-heading-text">Product Schema</span>
                    <Form validated={validated} onSubmit={handleSubmit}>
                        <Col lg="12">
                            <Card className="form-card ff-inter bg-main-white card-box-shadow p-0 border-0">
                                <Card.Title className="pa-24 border-bottom-gray fs-18 fw-600 color-heading-text">
                                    Details
                                </Card.Title>
                                <Card.Body className="stepper-details-card-card-body">
                                <Row>
                                        {formObj && formObj.map((field, index) =>
                                            <Col lg="4" key={field.key}>
                                                { (field.type === "text" || field.type === "number") && (
                                                    <InputComponent
                                                        {...field}
                                                        name={field.name}
                                                        value={productDetailsForm[field.name] || ''}
                                                        onChange={onChangeEvent}
                                                        validated={validated}
                                                    />
                                                )}
                                                {field.type === "select" && (
                                                    <SelectComponent
                                                        {...field}
                                                        name={field.name}
                                                        value={productDetailsForm[field.name] || ''}
                                                        onChange={onChangeEvent}
                                                        validated={validated}
                                                    />
                                                )}
                                                {field.type === "date" && (
                                                    <DateComponent
                                                        {...field}
                                                        name={field.name}
                                                        value={productDetailsForm[field.name] || ''}
                                                        onChange={onChangeEvent}
                                                        validated={validated}
                                                    />
                                                )}
                                            </Col>
                                        )}
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Form>
                </Row>
            </div>
            <FooterSubmit isNextBtn={true} type="button" handleSubmit={handleSubmit} />
        </>
    )
}