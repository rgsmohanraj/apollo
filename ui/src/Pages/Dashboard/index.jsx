import React, { useState } from "react";
import { Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { PartnersIcon, InProgressIcon, DisbursementIcon, AUMIcon } from '../../assests/images/nav-icons/icons';
import ExistingPartners from "./ExistingPartners";
import ModalComponent from "../../Components/Common/Modal";
import { ConfigProvider, Form, Select } from "antd";
import './dashboard.scss';
import ButtonComponent from "../../Components/Common/Button";

const Dashboard = () => {
    const [showPlus, setShowPlus] = useState(true);
    const [isPartnerModal, setIsPartnerModal] = useState(false);
    const navigate = useNavigate();
    const partnerModalOption = (input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    const partnerModalOptionData = [
        {
            label: 'Amrit Malwa Capital Limited',
            value: '1',
        }
    ];
    const handleClick = () => {
        console.log("clicked");
        setShowPlus(!showPlus);
    };
    const showDetails = () => {

    }
    const openPartnerPage = () => {
        navigate("/partners/onboarding")
    }
    const modalProps = {
        title: "Choose Partner",
        width: '37.5%',
        onCloseBtnColor: "",
        fontSize: "16px",
        footer: null
    }

    return (
        <>
            <Row className="details-card d-flex">
                <Col className="ps-0" sm={3}>
                    <div className="box-div border-0 d-flex h-100 align-items-center w-100 bg-main-white card-box-shadow p-12px">
                        <div className="card-icon bg-disabled d-flex justify-content-center align-items-center">
                            <PartnersIcon size="28" />
                        </div>
                        <div>
                            <h4 className="fs-12 fw-500 lh-16 color-breadcrumbs-child d-inline">Total Partners</h4>
                            <h4 className="fs-24 fw-600 lh-32 color-heading-text">30</h4>
                        </div>
                    </div>
                </Col>
                <Col className="ps-0" sm={3}>
                    <div className="box-div border-0 d-flex h-100 align-items-center w-100 bg-main-white card-box-shadow p-12px">
                        <div className="card-icon bg-disabled d-flex justify-content-center align-items-center">
                            <InProgressIcon size="28" />
                        </div>
                        <div>
                            <h4 className="fs-12 fw-500 lh-16 color-breadcrumbs-child d-inline">In Progress Partners</h4>
                            <h4 className="fs-24 fw-600 lh-32 color-heading-text">1</h4>
                        </div>
                    </div>
                </Col>
                <Col className="pe-0" sm={6}>
                    <Row className="last-box-row p-12px w-100 gradient-primary">
                        <Col sm={6} className="p-0">
                            <div className="box3-div border-0 d-flex h-100 align-items-center w-100">
                                <div className="card-icon bg-main-white d-flex justify-content-center align-items-center">
                                    <DisbursementIcon size="28" />
                                </div>
                                <div>
                                    <h4 className="fw-500 fs-14 lh-18 color-light">Total Disbursement</h4>
                                    <h4 className="color-light fs-24 fw-600 lh-32">₹ 45,260 Cr</h4>
                                </div>
                            </div>
                        </Col>
                        <Col className="p-0" sm={6}>
                            <div className="box3-div border-0 d-flex h-100 align-items-center w-100 p-0">
                                <div className="card-icon bg-main-white d-flex justify-content-center align-items-center">
                                    <AUMIcon size="28" />
                                </div>
                                <div>
                                    <h4 className="fw-500 fs-14 lh-18 color-light">Total Number of Loans Disbursed</h4>
                                    <h4 className="color-light fs-24 fw-600 lh-32">₹ 3000</h4>
                                </div>
                            </div>
                        </Col>


                    </Row>
                </Col>
            </Row>
            <div className="existing-partners">
                <ExistingPartners />
            </div>

            <div className="float-container">
                <div className={`float-btn position-fixed rounded-circle gradient-primary gray-box-shadow align-items-center d-flex justify-content-center ${showPlus}`}>
                    <ConfigProvider wave={{ disabled: true }}>
                        <ButtonComponent type="button" rootClassName="roundedBtn-position position-relative bg-transparent justify-content-center border-0 w-100 h-100 rounded-circle" onClick={handleClick} hasTitle={true} title={<div className="roundedBtn-plusIcon position-absolute fs-24 color-light fw-400">+</div>} />
                    </ConfigProvider>
                    <div className={`float-items d-block position-fixed ${showPlus ? 'hidden' : ''}`}>
                        <div className="mb-3 add-partner-product bg-heading color-primary fw-400 fs-14 lh-18 gray-box-shadow d-flex align-items-center justify-content-center border-apollo-primary" onClick={() => setIsPartnerModal(true)}>+ Add Product</div>
                        <div className="add-partner-product bg-heading color-primary fw-400 fs-14 lh-18 gray-box-shadow d-flex align-items-center justify-content-center border-apollo-primary" onClick={openPartnerPage}>+ Add Partner</div>
                    </div>
                </div>
                <ModalComponent open={isPartnerModal} {...modalProps} onClose={() => setIsPartnerModal(false)}>
                    <Form className="py-3 px-0" layout="vertical">
                        <Form.Item label={<span className="input-label">Partner</span>} className="input-class">
                            <Select
                                optionFilterProp="children"
                                filterOption={partnerModalOption}
                                options={partnerModalOptionData}
                                placeholder={`Please Select Partner`}
                            />
                        </Form.Item>
                        <div className="btn-class d-flex justify-content-center">
                            <Link className="proceed-btn gradient-primary color-light text-decoration-none gray-box-shadow" to="/products/create/product-schema">Proceed</Link>
                        </div>
                        <div className="btn-class d-flex justify-content-center mt-3">
                            <Link className="partner-link position-absolute" to="/partners/onboarding">
                                Click here to create a partner
                            </Link>
                        </div>
                    </Form>
                </ModalComponent>
            </div>
        </>
    );
};

export default Dashboard;