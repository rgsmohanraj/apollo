import React from "react";
import {Badge, Card, Col, Row} from "react-bootstrap";
import {InterestRateIcon, LimitIcon, RightArrowCurvedIcon, TenureIcon} from "../../../assests/images/partner-icons/icons";

const PartnerDetailsProductCardComponent = ({title, loanPercentage, status, limit, interestRate, tenure}) => {
    return (
        <Card className="product-overview-card pa-16 bg-main-white border-0 card-box-shadow">
            <Row className="mb-24px">
                <Col lg={8} className="d-flex justify-content-start align-items-center product-overview-card-header">
                    <p className="fs-14 fw-700 lh-18 ff-inter color-heading-text m-0 me-2">{title}</p>
                    <Badge className="loan-percent-badge">{loanPercentage}</Badge>
                </Col>
                <Col lg={4} className="d-flex justify-content-end align-items-center product-overview-card-header">
                    <Badge className={`loan-percent-badge ${status === 'Active' ? 'background-active color-success' : 'background-inactive color-inactive'}`}>{status}</Badge>
                </Col>
            </Row>
            <Row>
                <Col lg={9}>
                    <Row>
                        <Col lg={7} className="d-flex justify-content-start align-items-center fs-14 fw-400 ff-inter lh-18 color-lable-text mb-8px">
                            <div className="bg-disabled product-overview-data-icon d-flex justify-content-center align-items-center me-4px height-18 width-18">
                                <LimitIcon />
                            </div>
                            Limit
                        </Col>
                        <Col lg={5} className="fs-14 fw-500 ff-inter lh-18">
                            {limit}
                        </Col>

                        <Col lg={7} className="d-flex justify-content-start align-items-center fs-14 fw-400 ff-inter lh-18 color-lable-text mb-8px">
                            <div className="bg-disabled product-overview-data-icon d-flex justify-content-center align-items-center me-4px height-18 width-18">
                                <InterestRateIcon />
                            </div>
                            Interest Rate
                        </Col>
                        <Col lg={5} className="fs-14 fw-500 ff-inter lh-18">
                            {interestRate}
                        </Col>

                        <Col lg={7} className="d-flex justify-content-start align-items-center fs-14 fw-400 ff-inter lh-18 color-lable-text">
                            <div className="bg-disabled product-overview-data-icon d-flex justify-content-center align-items-center me-4px height-18 width-18">
                                <TenureIcon />
                            </div>
                            Tenure
                        </Col>
                        <Col lg={5} className="fs-14 fw-500 ff-inter lh-18">
                            {tenure}
                        </Col>
                    </Row>
                </Col>
                <Col lg={3} className="d-flex justify-content-end align-items-end">
                    <div className="product-overview-view-more-icon bg-heading d-flex align-items-center justify-content-center height-24 width-24">
                        <RightArrowCurvedIcon />
                    </div>
                </Col>
            </Row>
        </Card>
    );
};

export default PartnerDetailsProductCardComponent;