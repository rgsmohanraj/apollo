import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Form, Input } from "antd";
import { DMSdata } from "./mockDMSData";
import { SearchOutlined } from '@ant-design/icons';
import { DocumentsFoldericon } from "../../assests/images/nav-icons/icons";
import "./style.scss"
import { Link } from "react-router-dom";
const Reports = () => {

    return (
        <>
            <div className="product-details">
                <Row>
                    <div className="d-flex j-space-between">
                        <div className="py-3 fs-24 fw-600 color-heading-text">Documents</div>
                        <div className="search">
                            <Input placeholder="Search Credit Filter" className="searchInput"
                            /><SearchOutlined className="ant-input-suffix" /></div>
                    </div>
                    <Form layout="vertical">
                        <Col lg="12">
                            <Row>
                                {DMSdata && DMSdata.map((field, index) =>
                                    <React.Fragment key={field.key}>
                                        <Col lg="4" className="a-center">
                                            <Link to="/documents/dmsproduct" className="td-none">
                                                <div className="bg-white a-center mt-1rem pd-05rem cr-pointer br-radius-4px d-flex">
                                                    <DocumentsFoldericon /> <div className="ff-inter fw-400 fs-14 cl-000000 ml-05rem">{field.value}</div>
                                                </div>
                                            </Link>
                                        </Col>
                                    </React.Fragment>
                                )}
                            </Row>
                        </Col>
                    </Form>
                </Row>
            </div>

        </>
    )
}

export default Reports;