import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Form, Button, Alert } from "antd";
import { ReportsFields } from "./mockReportsData";
import SelectComponent from "../../Components/Common/Select";
import DateComponent from "../../Components/Common/DatePicker";
import "./style.scss"
const Reports = () => {
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const handleDownloadReport = () => {
        setShowSuccessAlert(true);
        setTimeout(() => {
            setShowSuccessAlert(false);
        }, 1000);
    };
    const [ReportDetails, setReportDetails] = useState({});
    const onChangeEvent = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setReportDetails((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    useEffect(() => {
        console.log(ReportDetails)
    }, [ReportDetails])
    return (
        <>
            <div className="product-details">
            {showSuccessAlert && (
                        <Alert
                            message="Reports Successfully Downloaded "
                            type="success"
                            showIcon
                            className='alert-success'
                            closable
                        />)}
                <Row>
                    <span className="py-3 fs-24 fw-600 color-heading-text">Reports</span>
                    <Form layout="vertical">
                        <Col lg="12">
                            <Card className="stepper-details-card ff-inter">
                                <Card.Title className="pa-24 border-bottom-gray fs-18 fw-600 color-heading-text">
                                    Details
                                </Card.Title>
                                <Card.Body className="stepper-details-card-card-body">
                                    <Row className="a-flex-start">
                                        {ReportsFields && ReportsFields.map((field, index) =>
                                            <React.Fragment key={field.key}>
                                                <Col sm="4">
                                                    {
                                                        field.type === "select" ?
                                                            (<SelectComponent {...field} name={field.name} value={ReportDetails[field.name]} onChange={onChangeEvent} />)
                                                            : field.type === "date" ?
                                                                (<DateComponent {...field} name={field.name} value={ReportDetails[field.name]} onChange={onChangeEvent} />)
                                                                : null
                                                    }
                                                </Col>
                                            </React.Fragment>
                                        )}
                                        <Col lg="4">
                                            <Button className="w-auto confirm-button mt-18rem" onClick={handleDownloadReport}>Download Report</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>

                            </Card>
                        </Col>
                    </Form>
                </Row>
            </div>

        </>
    )
}

export default Reports;