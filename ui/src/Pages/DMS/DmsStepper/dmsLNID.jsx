import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Form, Input } from "antd";
import { DMSLNData } from "../mockDMSData";
import { SearchOutlined } from '@ant-design/icons';
import { DMSArrowLefticon, DocumentsFoldericon } from "../../../assests/images/nav-icons/icons";
import { Link } from "react-router-dom";
const dmsLNID = () => {

    return (
        <>
            <div className="product-details">
                <Row>
                    <div className="d-flex j-space-between">
                        <div className="py-3 fs-24 fw-600 color-heading-text d-flex a-center"><Link to="/documents/dmsendborrower" className="mb-02rem"><DMSArrowLefticon /> </Link><div className="ml-05rem">Documents - LN20221206004</div></div>
                        <div className="search">
                            <Input placeholder="Search Credit Filter" className="searchInput"
                            /><SearchOutlined className="ant-input-suffix" /></div>
                    </div>
                    <Form layout="vertical">
                        <Col lg="12">
                            <Row>
                                {DMSLNData && DMSLNData.map((field, index) =>
                                    <React.Fragment key={field.key}>
                                        <Col lg="4" className="a-center">
                                            <Link to="/documents/dmsfile" className="td-none">
                                                <div className="bg-white a-center jc-center mt-1rem pd-05rem cr-pointer br-radius-4px d-flex">
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

export default dmsLNID;