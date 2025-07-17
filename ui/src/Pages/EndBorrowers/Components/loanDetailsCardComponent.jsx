import React from "react";
import {Card, Col, Row} from "react-bootstrap";

const LoanDetailsCardComponent = () => {
    return (
        <Card className="pa-16 border-0 br-4px gray-box-shadow flex-fill">
            <Card.Title className="ff-poppins fw-600 fs-18 lh-28 color-heading-text p-0 mb-16px">
                Loan Details-LN20221206004
            </Card.Title>
            <Card.Body className="p-0">
                <Row className="border-bottom-gray">
                    <Col lg={8} className="partner-detail-data-col">
                        <p className="fs-14 lh-18 fw-400 ff-inter color-breadcrumbs-child m-0">Partner Name</p>
                    </Col>
                    <Col lg={4} className="partner-detail-data-col d-flex justify-content-end">
                        <p className="fs-14 fw-500 ff-inter lh-18 color-apollo-black m-0">
                            Early Salary
                        </p>
                    </Col>
                </Row>
                <Row className="border-bottom-gray">
                    <Col lg={8} className="partner-detail-data-col">
                        <p className="fs-14 lh-18 fw-400 ff-inter color-breadcrumbs-child m-0">Product Name</p>
                    </Col>
                    <Col lg={4} className="partner-detail-data-col d-flex justify-content-end">
                        <p className="fs-14 fw-500 ff-inter lh-18 color-apollo-black m-0">
                            SME Auto Lending
                        </p>
                    </Col>
                </Row>
                <Row className="border-bottom-gray">
                    <Col lg={8} className="partner-detail-data-col">
                        <p className="fs-14 lh-18 fw-400 ff-inter color-breadcrumbs-child m-0">Tenure</p>
                    </Col>
                    <Col lg={4} className="partner-detail-data-col d-flex justify-content-end">
                        <p className="fs-14 fw-500 ff-inter lh-18 color-apollo-black m-0">
                            24 months
                        </p>
                    </Col>
                </Row>
                <Row className="border-bottom-gray">
                    <Col lg={8} className="partner-detail-data-col">
                        <p className="fs-14 lh-18 fw-400 ff-inter color-breadcrumbs-child m-0">Interest Rate</p>
                    </Col>
                    <Col lg={4} className="partner-detail-data-col d-flex justify-content-end">
                        <p className="fs-14 fw-500 ff-inter lh-18 color-apollo-black m-0">
                            13%
                        </p>
                    </Col>
                </Row>
                <Row className="border-bottom-gray">
                    <Col lg={8} className="partner-detail-data-col">
                        <p className="fs-14 lh-18 fw-400 ff-inter color-breadcrumbs-child m-0">Total Loan Amount</p>
                    </Col>
                    <Col lg={4} className="partner-detail-data-col d-flex justify-content-end">
                        <p className="fs-14 fw-500 ff-inter lh-18 color-apollo-black m-0">
                            ₹2,00,000
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8} className="partner-detail-data-col">
                        <p className="fs-14 lh-18 fw-400 ff-inter color-breadcrumbs-child m-0">Disbursed Date</p>
                    </Col>
                    <Col lg={4} className="partner-detail-data-col d-flex justify-content-end">
                        <p className="fs-14 fw-500 ff-inter lh-18 color-apollo-black m-0">
                            22 Sep 2023
                        </p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default LoanDetailsCardComponent;