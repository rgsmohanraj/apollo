import React from 'react'
import { Col, Row } from "react-bootstrap";
import { createLoanData } from "../../Partners/PartnerStepper/sopconfiguration/mockSOPdata"

export const ProductSopView = () => {

  return (
    <>
      <div>
        {
        createLoanData.map(section => (
          section.sections.map(section1 => (   
          <div key={section1.fieldName}>
            <div className="heading bg-heading d-flex align-items-center fs-14 fw-600  ff-poppins color-blue ps-2">{section1.name}</div>
            <Row className="pa-16 mb-8px">
            {section1.dataPoints.map(dataPoint => (
              <Col lg={3} className='mb-4' key={dataPoint.fieldName}>
                  <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">{dataPoint.name}</p>
              </Col>
              ))}
            </Row>
          </div>
        ))))}
      </div>
    </>
  )
}
