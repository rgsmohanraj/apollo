import React from "react";
import PageHeader from "../../Components/Common/Page-Header";
import {Card, Col, Row} from "react-bootstrap";
import {PaperClipOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const ViewBasicDetailEndBorrower = () => {
    return (
        <>
            <PageHeader title="Gowtham Pandian" isSearchEnabled={false} isBreadcrumbPresent={true} isSuccessBadge={true} successBadgeTitle="Unique ID: VCL20221206004" />

            <Card className="border-0 card-box-shadow bg-main-white p-0">
                <Card.Body className="pa-24">
                    <div className="partner-detail-modal">
                        <Row className="pa-16 mb-8px">
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Partner Name</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Early Salary Services Private Limited</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Product Name</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">SME Auto Lending</p>
                            </Col>
                        </Row>
                        <div className="heading bg-heading d-flex align-items-center fs-14 fw-600 lh-21 ff-poppins color-blue">Basic Details</div>
                        <Row className="pa-16 mb-8px">
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">First Name</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Gowtham</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Middle Name</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">-</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Last Name</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Pandian</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Date of Birth</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">06-01-1993</p>
                            </Col>
                        </Row>
                        <Row className="pa-16 mb-8px">
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Age</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">30</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Gender</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Male</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Mobile Number</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">9876543210</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Educational Qualification</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Bachelor of Engineering</p>
                            </Col>
                        </Row>
                        <Row className="pa-16 mb-8px">
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Personal E-mail ID</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">pandian123@gmail.com</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Official E-mail ID</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">pandian1234@gmail.com</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Father/Mother Name</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Muthukrishnan</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Spouse Name</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Jenny</p>
                            </Col>
                        </Row>
                        <Row className="pa-16 mb-8px border-bottom-gray">
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Marital Status</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Married</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">No. of dependants</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">4</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Religion</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Hindu</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Nationality</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Indian</p>
                            </Col>
                        </Row>
                        <Row className="pa-16 mb-8px">
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">PAN Number</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">AAAAA1234F</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Aadhaar Number</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">0000 1111 2222</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Driving License</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">DL 04 20220000001</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Voter ID</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">GDN0225185</p>
                            </Col>
                        </Row>
                        <Row className="pa-16 mb-8px">
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Borrower Type</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Individual</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Borrower Category</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Salaried</p>
                            </Col>
                        </Row>
                        <div className="heading bg-heading d-flex align-items-center fs-14 fw-600 lh-21 ff-poppins color-blue">Current Address</div>
                        <Row className="pa-16 mb-8px">
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Current State</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Tamil Nadu</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Current District</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Madurai</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Current City</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Madurai</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Current Address</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">06-01-1993</p>
                            </Col>
                        </Row>
                        <Row className="pa-16 mb-8px">
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Current Pincode</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">625 008</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Years of Stay In Current Address</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">6</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Residence Type Current Address</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Rented</p>
                            </Col>
                        </Row>
                        <div className="heading bg-heading d-flex align-items-center fs-14 fw-600 lh-21 ff-poppins color-blue">Permanent Address</div>
                        <Row className="pa-16 mb-8px">
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Current State</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Tamil Nadu</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Current District</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Madurai</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Current City</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Madurai</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Current Address</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">06-01-1993</p>
                            </Col>
                        </Row>
                        <Row className="pa-16 mb-8px">
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Current Pincode</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">625 008</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Years of Stay In Current Address</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">6</p>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Residence Type Current Address</p>
                                <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Rented</p>
                            </Col>
                        </Row>
                        <div className="heading bg-heading d-flex align-items-center fs-14 fw-600 lh-21 ff-poppins color-blue">Documents</div>
                        <Row className="pa-16 mb-8px">
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">ID Proof</p>
                                <div>
                                    <PaperClipOutlined className="color-primary"/> <Link to="" className="plain-link fs-14 fw-400 lh-18 color-primary">Aadhaar.pdf</Link>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Address Proof</p>
                                <div>
                                    <PaperClipOutlined className="color-primary"/> <Link to="" className="plain-link fs-14 fw-400 lh-18 color-primary">Aadhaar.pdf</Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default ViewBasicDetailEndBorrower;