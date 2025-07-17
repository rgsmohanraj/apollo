import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Form, Input } from "antd";
import { DMSFileData } from "../mockDMSData";
import { SearchOutlined } from '@ant-design/icons';
import { DMSArrowLefticon, DMSFileicon, DMSJPGicon } from "../../../assests/images/nav-icons/icons";
import { Link } from "react-router-dom";
import "../style.scss";
const dmsFile = () => {

    return (
        <>
            <div className="product-details">
                <Row>
                    <div className="d-flex j-space-between">
                        <div className="py-3 fs-24 fw-600 color-heading-text d-flex a-center"><Link to="/documents/dmslnid" className="mb-02rem"><DMSArrowLefticon /> </Link><div className="ml-05rem">Documents - KYC</div></div>
                        <div className="search">
                            <Input placeholder="Search Credit Filter" className="searchInput"
                            /><SearchOutlined className="ant-input-suffix" /></div>
                    </div>
                    <div className="d-flex mt-1rem">
                    {DMSFileData && DMSFileData.map((field, index) =>
                        <React.Fragment key={field.key}>
                               
                                    <Link to="/documents/dmsfile" className="td-none">
                                    <div className="dmsfile">
                                        <div className="pdb-05rem">{field.value == "Voter ID.jpg" ? <><DMSJPGicon /></> : <><DMSFileicon /></>}</div>
                                        <div className="ff-inter fw-500 fs-14 cl-414042 ">{field.value}</div>
                                        </div>
                                    </Link>
                                
                        </React.Fragment>
                    )}
                    </div>
                </Row>
            </div>

        </>
    )
}

export default dmsFile;