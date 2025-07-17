import React from "react";
import PageHeader from "../../Components/Common/Page-Header";
import EndBorrowerNameCardComponent from "./Components/endBorrowerNameCardComponent";
import {Col, Row} from "react-bootstrap";
import LoanListCardComponent from "./Components/loanListCardComponent";
import LoanDetailsCardComponent from "./Components/loanDetailsCardComponent";
import EndBorrowerBasicDetailsCardComponent from "./Components/endBorrowerBasicDetailsCardComponent";
import EndBorrowerBureauCardComponent from "./Components/endBorrowerBureauCardComponent";
import EndBorrowerDocumentCardComponent from "./Components/endBorrowerDocumentCardComponent";
import {mockDocumentData, mockTimelineData} from "./MockData/mockEndBorrowerData";
import EndBorrowerTimelineCardComponent from "./Components/endBorrowerTimelineCardComponent";

const ViewEndBorrowerDetails = () => {
    return (
      <>
          <PageHeader title="Gowtham Pandian" isSearchEnabled={false} isBreadcrumbPresent={true} isSuccessBadge={true} successBadgeTitle="Unique ID: VCL20221206004" />

          <EndBorrowerNameCardComponent />

          <Row className="d-flex mb-16px">
              <Col lg={6} className="d-flex flex-column">
                  <LoanListCardComponent />
              </Col>
              <Col lg={6} className="d-flex flex-column">
                  <LoanDetailsCardComponent />
              </Col>
          </Row>

          <EndBorrowerBasicDetailsCardComponent />

          <Row>
              <Col lg={6}>
                  <EndBorrowerBureauCardComponent />
              </Col>
              <Col lg={6}>
                  <EndBorrowerDocumentCardComponent title="KYC Documents" Documents={mockDocumentData}/>
                  <EndBorrowerDocumentCardComponent title="Loan Documents" Documents={mockDocumentData}/>
                  <EndBorrowerTimelineCardComponent timelineData={mockTimelineData}/>
              </Col>
          </Row>
      </>
    );
};

export default ViewEndBorrowerDetails;