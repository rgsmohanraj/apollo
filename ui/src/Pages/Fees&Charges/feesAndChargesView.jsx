import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import PageHeader from "../../Components/Common/Page-Header";

const FeesAndChargesView = () => {
    return (
        <>
            <PageHeader title="Create Fees & Charges" isBreadcrumbPresent={true}/>
            <Card className="border-0 card-box-shadow bg-main-white p-0">
                <Card.Body className="pa-24">
                    <div className="partner-detail-modal">
                        <div className="heading bg-heading d-flex align-items-center fs-14 fw-600 lh-21 ff-poppins color-blue">Details</div>
                        <Row className="pa-16 mb-8px">
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Charge Name</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Early Salary Charges</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Type</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Fees</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Currency</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Indian Rupee</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Amount</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">1200</p>
                            </Col>
                        </Row>
                        <Row className="pa-16 mb-8px">
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Minimum Charge Amount or percentage</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">130</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Maximum Charge Amount or percentage</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">4000</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Charge Time Type</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Disbursement</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Charge Applies to</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Loan</p>
                            </Col>
                        </Row>
                        <Row className="pa-16 mb-8px">
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Charge Calculation Type</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Flat</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Charge Payment Mode</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Regular</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Charge Decimal</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">2</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Charge Rounding Mode</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">HALF_UP</p>
                            </Col>
                        </Row>
                        <Row className="pa-16 mb-8px">
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Charge Decimal Regex Amount</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">0</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Fees Charge Type</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Insurance Charges</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Is Gst Enabled ?</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Yes</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Gst</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Inclusive</p>
                            </Col>
                        </Row>
                        <Row className="pa-16 mb-8px">
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Gst Decimal</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">0</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">GST Rounding Mode</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">HALF_UP</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">GST Slab Enabled</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">No</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Active</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Yes</p>
                            </Col>
                        </Row>
                        <Row className="pa-16 mb-8px">
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Is Default Loan Charge</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">No</p>
                            </Col>
                        </Row>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
};

export default FeesAndChargesView;