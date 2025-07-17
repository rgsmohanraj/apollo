import React from "react";
import {Modal} from "antd";
import {Col, Row} from "react-bootstrap";

const ViewPartnerDetailsModalComponent = ({viewPartnerDetailModal, setViewPartnerDetailModal}) => {
    return (
        <Modal  
            centered
            open={viewPartnerDetailModal}
            onCancel={() => setViewPartnerDetailModal(false)}
            width={1185}
            style={{
                top: 36,
                paddingBottom: '36px'
            }}
            className="ff-inter partner-detail-modal"
            footer=""
        >
            {/*Basic Details*/}
            <div>
                <div className="heading bg-heading d-flex align-items-center fs-14 fw-600 lh-21 ff-poppins color-blue">Basic Details</div>
                <Row className="pa-16 mb-8px">
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Partner Name</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Early Salary Services Private Limited</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Partner Company Reg. Date</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">06-01-2011</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Source</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">-</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">PAN Number</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">AAAAA12341Z</p>
                    </Col>
                </Row>
                <Row className="pa-16 mb-8px">
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">CIN Number</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">L - 27100 * MH - 1907 - PLC 000260</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Address 1</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">2/56, East Street, Thoppur</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Address 2</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">2/56, East Street, Thoppur</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">State</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Tamil Nadu</p>
                    </Col>
                </Row>
                <Row className="pa-16 mb-8px">
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">City</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Madurai</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Pincode</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">625 008</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Country</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">India</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Constitution</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Private Limited Company</p>
                    </Col>
                </Row>
                <Row className="pa-16 mb-8px">
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Key Person</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Pitchai</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Industry</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">-</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Sector</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">-</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Sub-sector</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">-</p>
                    </Col>
                </Row>
                <Row className="pa-16 mb-8px">
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">GST Number</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">22AAAA0000A1Z5</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">GST Registration</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">-</p>
                    </Col>
                </Row>
            </div>

            {/*Partner Details*/}
            <div>
                <div className="heading bg-heading d-flex align-items-center fs-14 fw-600 lh-21 ff-poppins color-blue">Partner Details</div>
                <Row className="pa-16 mb-8px">
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Partner Type</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">-</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Modal Limit</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">-</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Approved Limit</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">5,00,00,00,000</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Pilot Limit</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">1,00,00,000</p>
                    </Col>
                </Row>
                <Row className="pa-16 mb-8px">
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Partner Float Limit</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">-</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Balance Limit</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">-</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Agreement Start Date</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">-</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Agreement Expiry Date</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">-</p>
                    </Col>
                </Row>
                <Row className="pa-16 mb-8px">
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Underlying Assets</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">-</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Security</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">-</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">FLDG Calculation On</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">-</p>
                    </Col>
                </Row>
            </div>

            {/*Beneficiary Details*/}
            <div>
                <div className="heading bg-heading d-flex align-items-center fs-14 fw-600 lh-21 ff-poppins color-blue">Beneficiary Details</div>
                <Row className="pa-16 mb-8px">
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Beneficiary Name</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">-</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Beneficiary Account Number</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">3578 8950 5689</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">IFSC Code</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">SBIN568900</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">MICR Code</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">112045622</p>
                    </Col>
                </Row>
                <Row className="pa-16 mb-8px">
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Swift Code</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">-</p>
                    </Col>
                    <Col lg={3}>
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Branch</p>
                        <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter mb-0">Guindy</p>
                    </Col>
                </Row>
            </div>
        </Modal>
    );

};

export default ViewPartnerDetailsModalComponent;