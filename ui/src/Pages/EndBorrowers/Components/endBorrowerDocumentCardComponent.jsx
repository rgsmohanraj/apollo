import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import {FilePdfOutlined} from "@ant-design/icons";

const EndBorrowerDocumentCardComponent = ({title, Documents}) => {
    return (
        <Card className="border-0 pa-16 gray-box-shadow br-4px mb-16px">
            <Card.Title className="d-flex mb-16px">
                <div className="ff-poppins fw-600 fs-18 lh-28 color-heading-text p-0">{title}</div>
            </Card.Title>
            <Row>
                {Documents.map((document, index) => (
                    <Col key={index} lg={2}>
                            <div className="height-60 width-60 d-flex align-items-center justify-content-center bg-heading br-4px file-icon mb-8px">
                                <FilePdfOutlined className="color-primary" />
                            </div>
                            <div className="fw-400 fs-12">{document}</div>
                    </Col>
                ))}
            </Row>

        </Card>
    );
};

export default EndBorrowerDocumentCardComponent;