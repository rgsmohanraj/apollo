import React, {useState} from "react";
import {PlusOutlined} from "@ant-design/icons";
import {Card, Col, Row} from "react-bootstrap";
import "./partners.scss";
import PartnerDetailsCardComponent from "./Component/partnerDetailsCardComponent";

import {
    partnerApplicationDataPoints,
    partnerLoanValueDataPoints,
    productCardData
} from "./mockPartnerData";
import {Modal, Select} from "antd";
import {Link,useNavigate} from "react-router-dom";
import {CloneProductIcon} from "../../assests/images/partner-icons/icons";
import PartnerDetailsProductCardComponent from "./Component/partnerDetailsProductCardComponent";
import ViewPartnerDetailsModalComponent from "./Component/viewPartnerDetailsModalComponent";
import PageHeader from "../../Components/Common/Page-Header";
import ButtonComponent from "../../Components/Common/Button";
import {ProfileDropdownSuffix} from "../../assests/images/nav-icons/icons";
const PartnerView = () => {

    const productsDropdown = productCardData.map((product, index) => ({
        label: product.title,
        value: index.toString(),
    }))
    const navigate = useNavigate();
    const [viewPartnerDetailModal, setViewPartnerDetailModal] = useState(false);
    const [cloneProductModal, setCloneProductModal] = useState(false);

    const viewDetailsModal = () => {
        setViewPartnerDetailModal(true);
    }
    
    const onPlusClick = () =>{
        navigate("/partners/onboarding");
    }

    const navigateProductSchema = ()=>{
        navigate("/products/create/product-schema");
    }
    return (
            <div className="partner-page">

                {/*Page Header*/}
                <PageHeader title="~ Partners Name" handleClick={onPlusClick} isBreadcrumbPresent={true} isTypeBadge={true} typeBadge="NBFC" isDetailsButton={true} detailsTitle="View Partner Details" detailsFunction={viewDetailsModal}/>

                {/*Details Section*/}
                <Row className="mb-24px me-0 ms-0">
                    <Col lg="6" className="ps-0 pe-16px">
                        <PartnerDetailsCardComponent
                            title="Application"
                            type="application"
                            subTitleCount="5400"
                            subTitle="Total Applications"
                            dataPoints={partnerApplicationDataPoints}
                        />
                    </Col>
                    <Col lg="6" className="p-0">
                        <PartnerDetailsCardComponent
                            title="Loan Value"
                            type="loanValue"
                            subTitleCount="₹ 20,000"
                            subTitle="Average Ticket Size"
                            dataPoints={partnerLoanValueDataPoints}
                        />
                    </Col>
                </Row>

                {/*Products Header Section*/}
                <Row className="me-0 ms-0 border-bottom-gray mb-16px">
                    <Col lg={6} className="d-flex justify-content-start p-0">
                        <h4 className="ff-poppins color-heading-text fw-600 fs-18 lh-28 me-16 mb-0">
                            Products
                        </h4>
                    </Col>
                    <Col lg={6} className="d-flex justify-content-end mb-16px p-0">
                        <Select
                            options={productsDropdown}
                            className="onboarding-form-item product-select-input"
                            placeholder={`All Products (${productsDropdown.length})`}
                            suffixIcon={<div className="mt-1"><ProfileDropdownSuffix /></div>}
                        />
                    </Col>
                </Row>

                {/*Product Section*/}
                <Row className="me-0 ms-0">
                    <Col lg={4}>
                        <Card className="create-product-card d-flex justify-content-center align-items-center card-box-shadow">
                            <ButtonComponent
                                title={<Link to="/products/create/product-schema" style={{textDecoration:"none"}}>Add Product</Link>}
                                hasTitle={true}
                                hasPrefixIcon={true}
                                prefixIcon={<PlusOutlined className="fs-14"/>}
                                style="primary"
                                rootClassName="add-product-button ms-2 mb-1 w-auto color-light"
                            />
                            <p className="color-lable-text mb-6px">-or-</p>
                            <ButtonComponent
                                hasTitle={true}
                                title={<span className="ms-2">Clone Project</span>}
                                rootClassName="clone-product-button fw-600 lh-18 color-heading-text"
                                style="secondary"
                                onClick={() => setCloneProductModal(true)}
                                hasPrefixIcon={true}
                                prefixIcon={<CloneProductIcon /> }
                            />
                            <Modal
                                title={
                                    <span className="ff-poppins fs-18 fw-600">Choose Partner & Product</span>
                                }
                                centered
                                open={cloneProductModal}
                                onOk={() => setCloneProductModal(false)}
                                onCancel={() => setCloneProductModal(false)}
                                className="ff-inter clone-product-modal"
                                footer={
                                    <ButtonComponent
                                        hasTitle={true}
                                        title={<span className="ms-2">Clone Project</span>}
                                        hasPrefixIcon={true}
                                        prefixIcon={<CloneProductIcon />}
                                        rootClassName="clone-product-button fw-600 lh-18 fs-14"
                                        style="primary"
                                        onClick={navigateProductSchema}
                                    />
                                }
                            >
                                <Row className="pa-24 m-0">
                                    <Col lg={6} className="pe-16px ps-0">
                                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Partner</p>
                                        <Select
                                            options={productsDropdown}
                                            className="w-100"
                                            placeholder={`Please Select Partner`}
                                        />
                                    </Col>
                                    <Col lg={6} className="p-0">
                                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Product</p>
                                        <Select
                                            options={productsDropdown}
                                            className="w-100"
                                            placeholder={`Please Select Product`}
                                        />
                                    </Col>
                                </Row>
                            </Modal>
                        </Card>
                    </Col>
                    {/*Product Overview Cards*/}
                    {productCardData.map((product, index) => (
                        <Col lg={4} className="mb-24px">
                            <Link to="/products/view/1" className="plain-link">
                                <PartnerDetailsProductCardComponent title={product.title} status={product.status} interestRate={product.interestRate} limit={product.limit} loanPercentage={product.loanPercentage} tenure={product.tenure}/>
                            </Link>
                        </Col>
                    ))}
                </Row>

                {/*View Partner Details Modal*/}
                <ViewPartnerDetailsModalComponent viewPartnerDetailModal={viewPartnerDetailModal} setViewPartnerDetailModal={setViewPartnerDetailModal}/>
            </div>
    );
};

export default PartnerView;