
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import InputComponent from "../../../../../Components/Common/Input";
import SelectComponent from "../../../../../Components/Common/Select";
import SwitchComponent from "../../../../../Components/Common/SwitchComponent";
import TableComponent from "../../../../../Components/TableComponent/TableComponent";
import ButtonComponent from "../../../../../Components/Common/Button";
// import { Form } from "antd";
// import { formObj } from "../stepper-fields";
import { RightArrow } from "../../../../../assests/images/nav-icons/icons";
import FooterSubmit from "../../../../../Components/Common/FooterSubmit";
import PageHeader from "../../../../../Components/Common/Page-Header";
import ModalComponent from "../../../../../Components/Common/Modal";
import { CheckCircleOutlined, PlusOutlined, CaretRightOutlined } from "@ant-design/icons";
import { EyeIcon, Deleteicon } from "../../../../../assests/images/nav-icons/icons";
import "../style.scss";

export const ServicerFeeInterest = ({ validated, handleSubmit, formObj, setProductFormObj }) => {
    const [servicerFeeInterestForm, setServicerFeeInterestForm] = useState({});
    const [isProductModal, setIsProductModal] = useState(false);
    const [isProductSuccessModal, setIsProductSuccessModal] = useState(false);
    const modalProps = {
        title: "Confirmation",
        width: '27%',
        onCloseBtnColor: "",
        fontSize: "16px",
        className: "confirmation-dialog ff-inter bg-main-white card-box-shadow",
        okText: "Yes",
        cancelText: "No",
        okButtonProps: { className: 'confirmation-dialog-ok-button ff-inter fw-600 w-auto gradient-primary gray-box-shadow height-32 border-0' },
        cancelButtonProps: { className: 'confirmation-dialog-cancel-button ff-inter fw-600 w-auto bg-main-white color-primary height-32' },
        onCloseBtnColor: ""
    }

    const handleChange = (e) => {
        let { name, value, checked } = e.target;
        if (value === "on") value = checked;
        setServicerFeeInterestForm(prev => ({ ...prev, [name]: value }))
    }
    console.log(validated, "ServicerFeeInterest-validated")
    const navigate = useNavigate();
    useEffect(() => {
        // console.log(servicerFeeInterestForm)
    }, [servicerFeeInterestForm]);

    const onCreateClick = () => {
        setIsProductModal(true)
    }
    const onConfirmationOk = () => {
        setIsProductModal(false);
        setIsProductSuccessModal(true)
    }
    const addNewFees = () => {
        if (servicerFeeInterestData.length < 1)
            return setServicerFeeInterestData(() => [
                ...servicerFeeInterestData,
                {
                    servicerSplitRatio: {
                        type: "select",
                        key: "1",
                        label: "Servicer Split Ratio",
                        name: "servicerFeeChargesRatio",
                        placeholder: "Enter Servicer Split Ratio",
                        required: true,
                        selectedValue: "",
                        errorMsg: "Please Enter Servicer Split Ratio",
                        options: [
                            { label: "Fixed Split", value: 1 },
                            { label: "Dynamic Split", value: 2 }
                        ]
                    },
                    selectFees: {
                        type: "select",
                        key: "2",
                        label: "Select Fees",
                        name: "charges",
                        placeholder: "Enter Select Fees",
                        required: true,
                        selectedValue: "",
                        errorMsg: "Please Enter Select Fees",
                        options: [
                            { label: "Option 1", value: 1 },
                            { label: "Option 2", value: 2 }
                        ]
                    },
                    selfShare: {
                        type: "number",
                        key: "3",
                        label: "Servicer Fee Self Share",
                        name: "sfSelfShareCharge",
                        placeholder: "Enter Servicer Fee Self Share",
                        required: true,
                        value: "",
                        minLength: 1,
                        maxLength: 3,
                        pattern: /^[0-9]+(\.[0-9]+)?$/,
                        fieldType: "percentage",
                        errorMsg: "Please Enter Servicer Fee Self Share"
                    },
                    partnerShare: {
                        type: "number",
                        key: "4",
                        label: "Servicer Fee Partner Share",
                        name: "sfPartnerShareCharge",
                        placeholder: "Enter Servicer Fee Partner Share",
                        required: true,
                        value: "",
                        minLength: 1,
                        maxLength: 3,
                        pattern: /^[0-9]+(\.[0-9]+)?$/,
                        fieldType: "percentage",
                        errorMsg: "Please Enter Servicer Fee Partner Share"
                    },
                    enableGstLoss: {
                        type: "switch",
                        key: "5",
                        name: "sfChargeAmtGstLossEnabled",
                        checked: true,
                        value: "",
                        required: false,
                        errorMsg: "Please Enter ENABLE GST LOSS"
                    },
                    gstLoss: {
                        type: "number",
                        key: "6",
                        name: "sfChargeAmtGstLoss",
                        placeholder: "Enter GST LOSS %",
                        required: false,
                        value: "",
                        minLength: 1,
                        maxLength: 2,
                        pattern: /^[0-9]+(\.[0-9]+)?$/,
                        fieldType: "percentage",
                        errorMsg: "Please Enter GST LOSS %"
                    },
                    active: {
                        type: "switch",
                        key: "7",
                        name: "active",
                        required: false,
                        checked: false,
                        value: "",
                        errorMsg: "Please Enter Active",
                    },

                }
            ])
        setServicerFeeInterestData(() => [...servicerFeeInterestData, servicerFeeInterestData[0]])
    };
    const servicerFeeColumns = [
        {
            title: 'SERVICER SPLIT RATIO',
            dataIndex: 'servicerSplitRatio',
            key: 'servicerSplitRatio',
            width: '14%',
            render: (text, record) =>
                <>
                    <div className='feename-select'>
                        <SelectComponent labelaction={true} {...text} name={text.name} value={servicerFeeInterestForm[text.name]} onChange={handleChange} />
                    </div>
                </>
        },
        {
            title: 'SELECT FEES',
            dataIndex: 'selectFees',
            key: 'selectFees',
            width: '14%',
            render: (text, record) =>
                <div className='feename-select'>
                    <SelectComponent labelaction={true} {...text} name={text.name} value={servicerFeeInterestForm[text.name]} onChange={handleChange} />
                </div>
        },
        {
            title: 'SELF SHARE',
            dataIndex: 'selfShare',
            key: 'selfShare',
            width: '14%',
            render: (text, record) =>
                <div className='feename-select'>
                    <InputComponent labelaction={true} {...text} name={text.name} value={servicerFeeInterestForm[text.name]} onChange={handleChange} />
                </div>
        },
        {
            title: 'PARTNER SHARE',
            dataIndex: 'partnerShare',
            key: 'partnerShare',
            width: '14%',
            render: (text, record) =>
                <div className='feename-select'>
                    <InputComponent labelaction={true} {...text} name={text.name} value={servicerFeeInterestForm[text.name]} onChange={handleChange} />
                </div>
        },
        {
            title: "ENABLE GST LOSS",
            dataIndex: 'enableGstLoss',
            key: 'enableGstLoss',
            width: '14%',
            render: (text, render, index) =>
                <div className='feename-select'>
                    <SwitchComponent {...text} name={text.name} value={servicerFeeInterestForm[text.name]} onChange={handleChange} />
                </div>
        },
        {
            title: 'GST LOSS %',
            dataIndex: 'gstLoss',
            key: 'gstLoss',
            width: '14%',
            render: (text, record) =>
                <div className='feename-select'>
                    <InputComponent labelaction={true} {...text} name={text.name} value={servicerFeeInterestForm[text.name]} onChange={handleChange} />
                </div>
        },
        {
            title: 'ACTIVE',
            dataIndex: 'active',
            key: 'active',
            width: '9%',
            render: (text, render, index) =>
                <div className='feename-select'>
                    <SwitchComponent {...text} name={text.name} value={servicerFeeInterestForm[text.name]} onChange={handleChange} />
                </div>
        },
        {
            title: "ACTION",
            dataIndex: 'partnershare',
            key: 'partnerShare',
            width: '5%',
            render: (text, render, index) =>
                //     <div className="d-flex justify-content-space-around">
                //     <div className="view-icon">
                //         <EyeIcon />
                //     </div>
                //     <div className="delete-icon pointer" onClick={() => {
                //         const servicerFeeObj = [...servicerFeeInterestData];
                //         servicerFeeObj.splice(index, 1);
                //         setServicerFeeInterestData(servicerFeeObj);
                //     }
                //     }>
                //         <Deleteicon />
                //     </div>
                // </div>
                <div className="d-flex justify-content-center pointer" onClick={() => {
                    const servicerFeeObj = [...servicerFeeInterestData];
                    servicerFeeObj.splice(index, 1);
                    setServicerFeeInterestData(servicerFeeObj);
                }
                }>
                    <Deleteicon />
                </div>
        }
    ]

    const [servicerFeeInterestData, setServicerFeeInterestData] = useState([
        {
            servicerSplitRatio: {
                type: "select",
                key: "1",
                label: "Servicer Split Ratio",
                name: "servicerFeeChargesRatio",
                placeholder: "Enter Servicer Split Ratio",
                required: true,
                selectedValue: "",
                errorMsg: "Please Enter Servicer Split Ratio",
                options: [
                    { label: "Fixed Split", value: 1 },
                    { label: "Dynamic Split", value: 2 }
                ]
            },
            selectFees: {
                type: "select",
                key: "2",
                label: "Select Fees",
                name: "charges",
                placeholder: "Enter Select Fees",
                required: true,
                selectedValue: "",
                errorMsg: "Please Enter Select Fees",
                options: [
                    { label: "Option 1", value: 1 },
                    { label: "Option 2", value: 2 }
                ]
            },
            selfShare: {
                type: "number",
                key: "3",
                label: "Servicer Fee Self Share",
                name: "sfSelfShareCharge",
                placeholder: "Enter Servicer Fee Self Share",
                required: true,
                value: "",
                minLength: 1,
                maxLength: 3,
                pattern: /^[0-9]+(\.[0-9]+)?$/,
                fieldType: "percentage",
                errorMsg: "Please Enter Servicer Fee Self Share"
            },
            partnerShare: {
                type: "number",
                key: "4",
                label: "Servicer Fee Partner Share",
                name: "sfPartnerShareCharge",
                placeholder: "Enter Servicer Fee Partner Share",
                required: true,
                value: "",
                minLength: 1,
                maxLength: 3,
                pattern: /^[0-9]+(\.[0-9]+)?$/,
                fieldType: "percentage",
                errorMsg: "Please Enter Servicer Fee Partner Share"
            },
            enableGstLoss: {
                type: "switch",
                key: "5",
                name: "sfChargeAmtGstLossEnabled",
                checked: true,
                value: "",
                required: false,
                errorMsg: "Please Enter ENABLE GST LOSS"
            },
            gstLoss: {
                type: "number",
                key: "6",
                name: "sfChargeAmtGstLoss",
                placeholder: "Enter GST LOSS %",
                required: false,
                value: "",
                minLength: 1,
                maxLength: 2,
                pattern: /^[0-9]+(\.[0-9]+)?$/,
                fieldType: "percentage",
                errorMsg: "Please Enter GST LOSS %"
            },
            active: {
                type: "switch",
                key: "7",
                name: "active",
                required: false,
                checked: false,
                value: "",
                errorMsg: "Please Enter Active",
            },

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
                                    Servicer Fee
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
                                                                        value={servicerFeeInterestForm[field.name]}
                                                                        onChange={handleChange}
                                                                        validated={validated} />
                                                                </Col>
                                                            ) :
                                                                (field.type === "text" || field.type === "number") ? (
                                                                    <Col lg={4}>
                                                                        <InputComponent
                                                                            {...field}
                                                                            name={field.name}
                                                                            value={servicerFeeInterestForm[field.name]}
                                                                            onChange={handleChange}
                                                                            validated={validated} />
                                                                    </Col>
                                                                ) :
                                                                    (
                                                                        <Col lg={12}>
                                                                            <SwitchComponent
                                                                                {...field}
                                                                                name={field.name}
                                                                                value={servicerFeeInterestForm[field.name]}
                                                                                onChange={handleChange}
                                                                                validated={validated} />
                                                                        </Col>
                                                                    )
                                                }
                                            </React.Fragment>
                                        )}
                                        <div className="servicer-fee-grid pb-3">
                                            <TableComponent
                                                excludePadding={true}
                                                Columns={servicerFeeColumns}
                                                dataSource={servicerFeeInterestData}
                                                footerContent={<ButtonComponent
                                                    hasTitle={true}
                                                    title={<span className="ms-2">Add</span>}
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
            <ModalComponent open={isProductModal} {...modalProps} onOk={onConfirmationOk} onClose={() => setIsProductModal(false)}>
                <span className="py-2">Are you sure to create this product?</span>
            </ModalComponent>

            <ModalComponent
                open={isProductSuccessModal}
                className="success-dialog ff-inter bg-main-white card-box-shadow"
                okText={
                    <Link to="/products/create/sop-configuration" style={{ textDecoration: "none" }}>
                        <span className="d-flex align-items-center justify-content-center ff-inter">
                            Proceed to SOP
                        </span>
                    </Link>
                }
                onClose={() => setIsProductSuccessModal(false)}
                okButtonProps={{ className: 'success-dialog-ok-button ff-inter fw-600 gradient-primary w-auto height-32 color-light gray-box-shadow' }}
                cancelButtonProps={{ className: 'success-dialog-cancel-button ff-inter fw-600 w-auto bg-main-white gray-box-shadow color-primary' }}
            >
                <div className="d-flex align-items-center w-100 justify-content-center">
                    <CheckCircleOutlined className="success-dialog-icon" />
                </div>
                <p className="w-100 d-flex justify-content-center align-items-center text-center mb-24px">The product has been successfully created, <br />proceed to SOP Configuration.</p>
            </ModalComponent>

            <FooterSubmit isPrevBtn="true" isButton="true" hasTitle={true} title="Create Product" onClick={onCreateClick} type="button" handleSubmit={handleSubmit} />
        </>
    )
}