import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import ButtonComponent from "../../../Components/Common/Button";
import {DownloadOutlined} from "@ant-design/icons";

const EndBorrowerBureauCardComponent = () => {
    return (
        <Card className="border-0 pa-16 gray-box-shadow br-4px">
            <Card.Title className="d-flex mb-16px">
                <div className="ff-poppins fw-600 fs-18 lh-28 color-heading-text p-0">Bureau</div>
                <ButtonComponent hasTitle={true} title="Bureau Response" hasPrefixIcon={true} prefixIcon={<DownloadOutlined />} style="secondary" rootClassName="ms-auto"/>
            </Card.Title>
            <Card.Body className="p-0">
                <Row>
                    <Col lg={6} className="mb-24px">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            Loan ID
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            LN20221206004
                        </div>
                    </Col>
                    <Col lg={6} className="mb-24px">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            Borrower Name
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            Pitchai Mani
                        </div>
                    </Col>
                    <Col lg={6} className="mb-24px">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            First Name
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            Pitchai
                        </div>
                    </Col>
                    <Col lg={6} className="mb-24px">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            Last Name
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            Muthukrishnan
                        </div>
                    </Col>
                    <Col lg={6} className="mb-24px">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            Customer_Reference_ID
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            OKC9925099510
                        </div>
                    </Col>
                    <Col lg={6} className="mb-24px">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            Completion Time
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            13-10-23 12:22:30
                        </div>
                    </Col>
                    <Col lg={6} className="mb-24px">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            BK_Count
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            0
                        </div>
                    </Col>
                    <Col lg={6} className="mb-24px">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            Exp. BK_Count
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            0
                        </div>
                    </Col>
                    <Col lg={6} className="mb-24px">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            Current_OD
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            0
                        </div>
                    </Col>
                    <Col lg={6} className="mb-24px">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            Exp. Current_OD Value
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            0
                        </div>
                    </Col>
                    <Col lg={6} className="mb-24px">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            SFWD
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            0
                        </div>
                    </Col>
                    <Col lg={6} className="mb-24px">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            Exp. SFWD Value
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            0
                        </div>
                    </Col>
                    <Col lg={6} className="mb-24px">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            WDF
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            0
                        </div>
                    </Col>
                    <Col lg={6} className="mb-24px">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            Exp. WDF Value
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            0
                        </div>
                    </Col>
                    <Col lg={6} className="mb-24px">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            WOF
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            0
                        </div>
                    </Col>
                    <Col lg={6} className="mb-24px">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            Exp. WOF Value
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            0
                        </div>
                    </Col>
                    <Col lg={6} className="mb-24px">
                        <div className="fs-12 fw-400 lh-16 color-tooltip-bg mb-8px">
                            EQID
                        </div>
                        <div className="color-apollo-black fs-14 fw-500 lh-18">
                            162
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default EndBorrowerBureauCardComponent;