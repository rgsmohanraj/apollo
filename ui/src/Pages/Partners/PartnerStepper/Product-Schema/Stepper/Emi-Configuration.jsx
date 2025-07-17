import React, { useEffect, useState } from "react";
import { Card, Col, Row, Form } from "react-bootstrap";
import InputComponent from "../../../../../Components/Common/Input";
import SelectComponent from "../../../../../Components/Common/Select";
// import { Form } from "antd";
import { EmiConfigurationFields } from "../stepper-fields";
import FooterSubmit from "../../../../../Components/Common/FooterSubmit";
import PageHeader from "../../../../../Components/Common/Page-Header";
import { CaretRightOutlined } from '@ant-design/icons';
import "../style.scss";


export const EmiConfiguration = ({ validated, handleSubmit, formObj, setProductFormObj }) => {
    const [currencyForm, setCurrencyForm] = useState({});
    console.log(validated, "EmiConfiguration-validated")

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setCurrencyForm(prev => ({ ...prev, [name]: value }))
    }

    useEffect(() => {
        // console.log(currencyForm)
    }, [currencyForm]);

    return (
        <>
            <div className="emi-configuration">
                {/* <PageHeader title="Product Schema" isBreadcrumbPresent={true} isSearchEnabled={false} isCreateEnabled={false} /> */}
                <Row>
                    <div className="fs-12 lh-16 fw-500 ff-inter pt-3 color-breadcrumbs">Partners <CaretRightOutlined /> Early Salary Services Private Limited <CaretRightOutlined /> <span className="color-tooltip-bg">Product</span></div>
                    <span className="pb-3 pt-2 fs-24 fw-600 color-heading-text">Product Schema</span>
                    <Form validated={validated} onSubmit={handleSubmit}>
                        <Col lg="12" className="bottom-card-form">
                            <Card className="form-card ff-inter bg-main-white card-box-shadow p-0 border-0">
                                <Card.Title className="pa-24 border-bottom-gray fs-18 fw-600 color-heading-text m-0">
                                    EMI Configuration
                                </Card.Title>
                                <Card.Body className="p-24 mt-24">
                                    <Row>
                                        {formObj && formObj.map((field, index) =>
                                            <React.Fragment key={field.key}>
                                                {
                                                    field.type === "heading" ? (
                                                        <Col lg={12} className="pb-3">
                                                            <span className="color-tooltip-bg fw-600 fs-16 lh-28">{field.label}</span>
                                                        </Col>
                                                    ) :
                                                        field.type === "line" ? (
                                                            <Col lg={12}>
                                                                <div className="line mb-2"></div>
                                                            </Col>
                                                        ) :
                                                            field.type === "select" ? (
                                                                <Col lg={4}>
                                                                    <SelectComponent
                                                                        {...field}
                                                                        name={field.name}
                                                                        value={currencyForm[field.name]}
                                                                        onChange={handleChange}
                                                                        validated={validated} />
                                                                </Col>
                                                            ) :
                                                                (field.type === "text" || field.type === "number") ? (
                                                                    <Col lg={4}>
                                                                        <InputComponent
                                                                            {...field} name={field.name}
                                                                            value={currencyForm[field.name]}
                                                                            onChange={handleChange}
                                                                            validated={validated} />
                                                                    </Col>
                                                                ) : null
                                                }
                                            </React.Fragment>
                                        )}
                                    </Row>
                                </Card.Body>

                            </Card>
                        </Col>
                    </Form>
                </Row>
            </div>
            <FooterSubmit isNextBtn="true" isPrevBtn="true" type="button" handleSubmit={handleSubmit} />
        </>
    )
}