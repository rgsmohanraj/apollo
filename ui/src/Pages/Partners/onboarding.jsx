import React, {useState} from "react";
import { Link } from "react-router-dom";
import {CheckCircleOutlined, PlusOutlined} from "@ant-design/icons";
import {Card, Col, Row} from "react-bootstrap";
import { Form, Modal} from "antd";
import PageHeader from "../../Components/Common/Page-Header";
import FooterSubmit from "../../Components/Common/FooterSubmit";
import {PartnerOnboardingFormConfig} from "../../Config/partnerOnboardingFormConfig";
import {generateFormFields} from "../../Util/formUtil";

const filterOption = (input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const PartnerOnBoarding = () => {
    const [addPartnerConfirmation, setAddPartnerConfirmation] = useState(false);
    const [partnerConfirmationSuccess, setPartnerConfirmationSuccess] = useState(false);
    const [partnerFormData, setPartnerFormData] = useState({});

    const handleAddPartnerConfirmationOk = () => {
        setAddPartnerConfirmation(false);
        setPartnerConfirmationSuccess(true);  // Set the state to show the second modal
    };

    const addPartnerConfirm = () => {
        setAddPartnerConfirmation(true);
    };

    return (
        <>
            <div className="partner-page">

                {/*Page Header*/}
                <PageHeader title="Partner Onboarding" isBreadcrumbPresent={true} isSearchEnabled={false} isCreateEnabled={false}/>

                {/*Onboarding Form*/}
                <Row>
                    <Form layout="vertical">
                        <Col lg="12" className="mt-2">
                            <Card className="form-card ff-inter bg-main-white card-box-shadow p-0 border-0">
                                <Card.Title className="pa-24 border-bottom-gray fs-18 fw-600 color-heading-text m-0">
                                    Basic Details
                                </Card.Title>
                                <Card.Body className="p-24 mt-24">
                                    <Row className="pb-12px">
                                        {generateFormFields(PartnerOnboardingFormConfig.basic, partnerFormData, setPartnerFormData)}
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg="12" className="mt-4">
                            <Card className="ff-inter border-0 card-box-shadow bg-main-white p-0">
                                <Card.Title className="pa-24 border-bottom-gray fs-18 fw-600 color-heading-text m-0">
                                    Partner Details
                                </Card.Title>
                                <Card.Body className="p-24 mt-24">
                                    <Row className="pb-12px">
                                        {generateFormFields(PartnerOnboardingFormConfig.partnerDetails, partnerFormData, setPartnerFormData)}
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg="12" className="mt-4 bottom-card-form">
                            <Card className="ff-inter border-0 card-box-shadow bg-main-white p-0">
                                <Card.Title className="pa-24 border-bottom-gray fs-18 fw-600 color-heading-text m-0">
                                    Beneficiary Details
                                </Card.Title>
                                <Card.Body className="p-24 mt-24">
                                    <Row className="pb-12px">
                                        {generateFormFields(PartnerOnboardingFormConfig.beneficiaryDetails, partnerFormData, setPartnerFormData)}
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Form>
                </Row>
            </div>
            {/* Sticky Footer Section */}
            <FooterSubmit title="Create Partner" isButton="true" onClick={addPartnerConfirm} type="button" />
            <Modal
                title="Confirmation"
                centered
                open={addPartnerConfirmation}
                onOk={() => handleAddPartnerConfirmationOk(false)}
                onCancel={() => setAddPartnerConfirmation(false)}
                className="confirmation-dialog ff-inter bg-main-white card-box-shadow"
                okText="Yes"
                cancelText="No"
                okButtonProps={{ className: 'confirmation-dialog-ok-button ff-inter fw-600 w-auto gradient-primary gray-box-shadow height-32 border-0'}}
                cancelButtonProps={{ className: 'confirmation-dialog-cancel-button ff-inter fw-600 w-auto bg-main-white color-primary height-32' }}
            >
                <p>Are you sure to create this partner?</p>
            </Modal>
            <Modal
                centered
                open={partnerConfirmationSuccess}
                onOk={() => setPartnerConfirmationSuccess(false)}
                onCancel={() => setPartnerConfirmationSuccess(false)}
                className="success-dialog ff-inter bg-main-white card-box-shadow"
                okText={
                    <Link to="/products/create/product-schema" style={{textDecoration:"none"}}>
                                        <span className="d-flex align-items-center justify-content-center ff-inter">
                                            <PlusOutlined className="fs-14 me-2"/> Add Product
                                        </span>
                    </Link>
                }
                cancelText="Cancel"
                okButtonProps={{ className: 'success-dialog-ok-button ff-inter fw-600 gradient-primary w-auto height-32 color-light gray-box-shadow' }}
                cancelButtonProps={{ className: 'success-dialog-cancel-button ff-inter fw-600 w-auto bg-main-white gray-box-shadow color-primary' }}
            >
                <div className="d-flex align-items-center w-100 justify-content-center">
                    <CheckCircleOutlined className="success-dialog-icon" />
                </div>
                <p className="w-100 d-flex justify-content-center align-items-center text-center mb-24px">The partner has been successfully onboarded, you’re <br /> ready to add products.</p>
            </Modal>
        </>
    );
};

export default PartnerOnBoarding;