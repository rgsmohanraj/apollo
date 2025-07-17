
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Form } from "react-bootstrap";
import InputComponent from "../../../../../Components/Common/Input";
import SelectComponent from "../../../../../Components/Common/Select";
import SwitchComponent from "../../../../../Components/Common/SwitchComponent";
import DateComponent from "../../../../../Components/Common/DatePicker";
// import { Form, Button } from "antd";
import { DisbursementsFields } from "../stepper-fields";
import { RightArrow } from "../../../../../assests/images/nav-icons/icons";
import FooterSubmit from "../../../../../Components/Common/FooterSubmit";
import PageHeader from "../../../../../Components/Common/Page-Header";
import ButtonComponent from "../../../../../Components/Common/Button";
import { useNavigate } from "react-router-dom";
import { PlusOutlined, CaretRightOutlined } from "@ant-design/icons";
import TableComponent from "../../../../../Components/TableComponent/TableComponent";
import { Deleteicon } from "../../../../../assests/images/nav-icons/icons";
import "../style.scss";

export const Disbursements = ({ validated, handleSubmit, formObj, setProductFormObj }) => {
    const [settingsForm, setsettingsForm] = useState({});
    const navigate = useNavigate();
    const handleChange = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;
        let { name, value, checked } = e.target;
        if (value === "on") value = checked;
        setsettingsForm(prev => ({ ...prev, [name]: value }))
    }
    console.log(validated, "Disbursements-validated")

    useEffect(() => {
        // console.log(settingsForm)
    }, [settingsForm]);

    const createNewFees = () => {
        navigate("/fees-and-charges/create");
    }
    const addNewFees = () => {
        if (createfeesDatas.length < 1)
            return setCreatefeesDatas(() => [...createfeesDatas,
            {
                feesName: {
                    type: "select",
                    key: "1",
                    label: "Select Fees",
                    name: "selectFees",
                    placeholder: "Enter Select Fees",
                    required: true,
                    selectedValue: "",
                    errorMsg: "Please Enter Select Fees",
                    options: [
                        { label: "option 1", value: 1 },
                        { label: "option 2", value: 2 }
                    ]
                },
                clientShare: {
                    type: "number",
                    key: "2",
                    label: "Client Share",
                    name: "clientshare",
                    placeholder: "Enter Client Share",
                    required: true,
                    value: "",
                    minLength: 1,
                    maxLength: 3,
                    pattern: /^[0-9]+(\.[0-9]+)?$/,
                    fieldType: "percentage",
                    errorMsg: "Please Enter Client Share"
                },
                selfShare: {
                    type: "number",
                    key: "3",
                    label: "Self Share",
                    name: "selfshare",
                    placeholder: "Enter Self Share",
                    required: true,
                    value: "",
                    minLength: 1,
                    maxLength: 3,
                    pattern: /^[0-9]+(\.[0-9]+)?$/,
                    fieldType: "percentage",
                    errorMsg: "Please Enter Self Share"
                },
                partnerShare: {
                    type: "number",
                    key: "4",
                    label: "Partner Share",
                    name: "partnershare",
                    placeholder: "Enter Partner Share",
                    required: true,
                    value: "",
                    minLength: 1,
                    maxLength: 3,
                    pattern: /^[0-9]+(\.[0-9]+)?$/,
                    fieldType: "percentage",
                    errorMsg: "Please Enter Partner Share"
                }

            }])
        setCreatefeesDatas(() => [...createfeesDatas, createfeesDatas[0]])
    };
    const createfeesColumns = [
        {
            title: 'FEE NAME',
            dataIndex: 'feesName',
            key: 'feesName',
            width: '40%',
            render: (text, record) =>
                <>
                    <div className='feename-select'>
                        <SelectComponent labelaction={true} {...text} name={text.name} value={settingsForm[text.name]} onChange={handleChange} />
                    </div>
                </>
        },
        {
            title: 'CLIENT SHARE %',
            dataIndex: 'clientShare',
            key: 'clientShare',
            width: '18%',
            render: (text, record) =>
                <div className='feename-select'>
                    <InputComponent labelaction={true} {...text} name={text.name} value={settingsForm[text.name]} onChange={handleChange} />
                </div>
        },
        {
            title: 'SELF SHARE %',
            dataIndex: 'selfShare',
            key: 'selfShare',
            width: '18%',
            render: (text, record) =>
                <div className='feename-select'>
                    <InputComponent labelaction={true} {...text} name={text.name} value={settingsForm[text.name]} onChange={handleChange} />
                </div>
        },
        {
            title: 'PARTNER SHARE %',
            dataIndex: 'partnerShare',
            key: 'partnerShare',
            width: '18%',
            render: (text, record) =>
                <div className='feename-select'>
                    <InputComponent labelaction={true} {...text} name={text.name} value={settingsForm[text.name]} onChange={handleChange} />
                </div>
        },
        {
            title: "ACTION",
            dataIndex: 'partnershare',
            key: 'partnerShare',
            width: '6%',
            render: (text, render, index) =>
                <div className="d-flex justify-content-center pointer" onClick={() => {
                    const createfeesObj = [...createfeesDatas];
                    createfeesObj.splice(index, 1);
                    setCreatefeesDatas(createfeesObj);
                }
                }>
                    <Deleteicon />
                </div>
        }
    ]

    const [createfeesDatas, setCreatefeesDatas] = useState([
        {
            feesName: {
                type: "select",
                key: "1",
                label: "Select Fees",
                name: "selectFees",
                placeholder: "Enter Select Fees",
                required: true,
                selectedValue: "",
                errorMsg: "Please Enter Select Fees",
                options: [
                    { label: "option 1", value: 1 },
                    { label: "option 2", value: 2 }
                ]
            },
            clientShare: {
                type: "number",
                key: "2",
                label: "Client Share",
                name: "clientshare",
                placeholder: "Enter Client Share",
                required: true,
                value: "",
                minLength: 1,
                maxLength: 3,
                pattern: /^[0-9]+(\.[0-9]+)?$/,
                fieldType: "percentage",
                errorMsg: "Please Enter Client Share"
            },
            selfShare: {
                type: "number",
                key: "3",
                label: "Self Share",
                name: "selfshare",
                placeholder: "Enter Self Share",
                required: true,
                value: "",
                minLength: 1,
                maxLength: 3,
                pattern: /^[0-9]+(\.[0-9]+)?$/,
                fieldType: "percentage",
                errorMsg: "Please Enter Self Share"
            },
            partnerShare: {
                type: "number",
                key: "4",
                label: "Partner Share",
                name: "partnershare",
                placeholder: "Enter Partner Share",
                required: true,
                value: "",
                minLength: 1,
                maxLength: 3,
                pattern: /^[0-9]+(\.[0-9]+)?$/,
                fieldType: "percentage",
                errorMsg: "Please Enter Partner Share"
            }

        }
    ])

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
                                    Disbursements
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
                                                                        value={settingsForm[field.name]}
                                                                        onChange={handleChange}
                                                                        validated={validated}
                                                                    />
                                                                </Col>
                                                            ) :
                                                                (field.type === "text" || field.type === "number") ? (
                                                                    <Col lg={4}>
                                                                        <InputComponent
                                                                            {...field}
                                                                            name={field.name}
                                                                            value={settingsForm[field.name]}
                                                                            onChange={handleChange}
                                                                            validated={validated} />
                                                                    </Col>
                                                                ) :
                                                                    (
                                                                        <>
                                                                            <Col lg={field.key === '18' ? '6' : '12'} className={field.key === "18" ? 'mt-2' : ''}>
                                                                                <SwitchComponent
                                                                                    {...field}
                                                                                    name={field.name}
                                                                                    value={settingsForm[field.name]}
                                                                                    onChange={handleChange}
                                                                                    validated={validated} />
                                                                            </Col>
                                                                            <Col lg={6} className="justify-content-end mt-2" style={{ display: field.key === '18' ? 'flex' : 'none' }}>
                                                                                <ButtonComponent
                                                                                    hasTitle={true}
                                                                                    title={<span className="ms-2">Create New Fees</span>}
                                                                                    hasPrefixIcon={true}
                                                                                    prefixIcon={<PlusOutlined className="fs-14" />}
                                                                                    rootClassName="fw-600 lh-18 fs-14"
                                                                                    onClick={createNewFees}
                                                                                ></ButtonComponent>
                                                                            </Col>
                                                                        </>
                                                                    )
                                                }
                                            </React.Fragment>
                                        )}
                                        <div className="create-fee-grid pb-3">
                                            <TableComponent
                                                excludePadding={true}
                                                Columns={createfeesColumns}
                                                dataSource={createfeesDatas}
                                                footerContent={<ButtonComponent
                                                    hasTitle={true}
                                                    title={<span className="ms-2">Add Fees</span>}
                                                    hasPrefixIcon={true}
                                                    prefixIcon={<PlusOutlined className="fs-14" />}
                                                    rootClassName="fw-600 lh-18 fs-14"
                                                    onClick={addNewFees} />}
                                            />
                                        </div>
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