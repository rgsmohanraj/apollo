import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import "./endBorrowerComponent.scss";
import {ApplicationIcon, LoanValueIcon} from "../../../assests/images/partner-icons/icons";

const EndBorrowerNameCardComponent = () => {
    return (
        <Card className="border-0 pa-24 br-4px gray-box-shadow mb-16px">
            <Row>
                <Col lg={1}>
                    <div className="bg-heading height-80 width-80 d-flex rounded-circle align-items-center justify-content-center">
                        <div className="ff-poppins fs-24 fw-600 lh-36 color-primary">GP</div>
                    </div>
                </Col>
                <Col lg={2} className="d-flex flex-column justify-content-center">
                    <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                        Name
                    </div>
                    <div className="color-apollo-black fs-14 fw-500 lh-18">
                        Gowtham Pandian
                    </div>
                </Col>
                <Col lg={2} className="d-flex flex-column justify-content-center">
                    <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                        Date of Birth
                    </div>
                    <div className="color-apollo-black fs-14 fw-500 lh-18">
                        06-01-1993
                    </div>
                </Col>
                <Col lg={2} className="d-flex flex-column justify-content-center">
                    <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                        Address
                    </div>
                    <div className="color-apollo-black fs-14 fw-500 lh-18">
                        2/56, East Street, Thoppur
                    </div>
                </Col>
                <Col lg={2} className="d-flex flex-column justify-content-center">
                    <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                        Mail ID
                    </div>
                    <div className="color-apollo-black fs-14 fw-500 lh-18">
                        gowtham123@gmail.com
                    </div>
                </Col>
                <Col lg={2} className="d-flex flex-column justify-content-center">
                    <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                        Mobile Number
                    </div>
                    <div className="color-apollo-black fs-14 fw-500 lh-18">
                        9876543210
                    </div>
                </Col>
            </Row>
        </Card>
    );
};

export default EndBorrowerNameCardComponent;