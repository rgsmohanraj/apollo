import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {RightCircleOutlined} from "@ant-design/icons";

const EndBorrowerBasicDetailsCardComponent = () => {

    return (
        <Card className="pa-16 border-0 br-4px gray-box-shadow mb-16px">
            <Card.Title className="ff-poppins fw-600 fs-18 lh-28 color-heading-text p-0 mb-16px">
                End Borrower-Basic Details
            </Card.Title>
            <Card.Body className="p-0 border-bottom-gray mb-16px">
                <Row className="mb-24px">
                    <Col className="d-flex flex-column justify-content-start">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            First Name
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            Gowtham
                        </div>
                    </Col>

                    <Col className="d-flex flex-column justify-content-start">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            Middle Name
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            -
                        </div>
                    </Col>

                    <Col className="d-flex flex-column justify-content-start">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            Last Name
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            Pandian
                        </div>
                    </Col>

                    <Col className="d-flex flex-column justify-content-start">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            Date of Birth
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            06-01-1993
                        </div>
                    </Col>

                    <Col className="d-flex flex-column justify-content-start">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            Age
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            30
                        </div>
                    </Col>
                </Row>
                <Row className="mb-24px">
                    <Col className="d-flex flex-column justify-content-start">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            Gender
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            Male
                        </div>
                    </Col>

                    <Col className="d-flex flex-column justify-content-start">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            Mobile Number
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            9876543210
                        </div>
                    </Col>

                    <Col className="d-flex flex-column justify-content-start">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            Educational Qualification
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            Bachelor of Engineering
                        </div>
                    </Col>

                    <Col className="d-flex flex-column justify-content-start">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            Personal E-mail ID
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            pandian123@gmail.com
                        </div>
                    </Col>

                    <Col className="d-flex flex-column justify-content-start">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            Official E-mail ID
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            pandian1234@gmail.com
                        </div>
                    </Col>
                </Row>
                <Row className="mb-24px">
                    <Col className="d-flex flex-column justify-content-start ">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            Father/Mother Name
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            Muthukrishnan
                        </div>
                    </Col>

                    <Col className="d-flex flex-column justify-content-start">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            Spouse Name
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            Jenny
                        </div>
                    </Col>

                    <Col className="d-flex flex-column justify-content-start">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            Marital Status
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            Married
                        </div>
                    </Col>

                    <Col className="d-flex flex-column justify-content-start">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            No. of Dependants
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            4
                        </div>
                    </Col>

                    <Col className="d-flex flex-column justify-content-start">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            Religion
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            Hindu
                        </div>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer className="p-0 bg-main-white border-0">
                <Link to="/end-borrowers/basicdetail/VCL20221206004" className="plain-link color-primary fs-14 fw-500 lh-18 w-100 d-flex justify-content-start">View more <RightCircleOutlined className="fs-16 color-primary ms-2" /></Link>
            </Card.Footer>
        </Card>
    );
};

export default EndBorrowerBasicDetailsCardComponent;