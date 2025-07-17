import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import {ApplicationIcon, LoanValueIcon} from "../../../assests/images/partner-icons/icons";

const PartnerDetailsCardComponent = ({type, title, subTitleCount, subTitle, dataPoints}) => {
  return (
      <Card className="partner-detail-section-card pa-24 bg-main-white card-box-shadow border-0">
          <Row className="me-0 ms-0 border-bottom-gray">
              <Col lg={6} className="p-0">
                  <h4 className="fs-18 lh-28 fw-600 color-heading-text ff-poppins">
                      {title}
                  </h4>
                  <h4 className="fs-24 lh-36 fw-600 ff-poppins">
                      {subTitleCount}
                  </h4>
                  <p className="fs-12 lh-16 fw-400 ff-inter mb-18px color-breadcrumbs-child">
                      {subTitle}
                  </p>
              </Col>
              <Col lg={6} className="d-flex align-items-center justify-content-end">
                  <div className="bg-heading height-80 width-80 d-flex rounded-circle align-items-center justify-content-center">
                      { type == "application" && <ApplicationIcon />}
                      { type == "loanValue" && <LoanValueIcon />}
                  </div>
              </Col>
          </Row>

          {/*Iterative Block*/}
          {Object.entries(dataPoints).map(([lable, value], index, array) => (
              <Row key={lable} className={`${index !== array.length - 1 ? 'border-bottom-gray' : ''}`}>
                  <Col lg={8} className="partner-detail-data-col">
                      <p className="fs-14 lh-18 fw-400 ff-inter color-breadcrumbs-child m-0">{lable}</p>
                  </Col>
                  <Col lg={4} className="partner-detail-data-col d-flex justify-content-end">
                      <p className="fs-14 fw-500 ff-inter lh-18 color-apollo-black m-0">
                          {value}
                      </p>
                  </Col>
              </Row>
          ))}
      </Card>
  );
};

export default PartnerDetailsCardComponent;