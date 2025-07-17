import React, { useContext, useState } from 'react';
import { CloneProductIconWhite } from "../../assests/images/partner-icons/icons";
import { Tabs } from 'antd';
import { Button, Modal, Select } from "antd";
import { Col, Row } from "react-bootstrap";
import { productCardData } from "../Partners/mockPartnerData";
import PageHeader from "../../Components/Common/Page-Header";
import { EndBorrowerView } from "../../Pages/Products/ViewTab/endBorrower";
import { CreditFilterView } from "../../Pages/Products/ViewTab/creditFilter";
import { ProductSchemaView } from "../../Pages/Products/ViewTab/productSchema";
import { ProductSopView } from "../../Pages/Products/ViewTab/productSop";
import { useNavigate } from "react-router-dom";
import { UpdateCreditFilterContext } from '../../Context/UpdateCreditFilterContext';
import ButtonComponent from "../../Components/Common/Button";
import {FilterOutlined} from "@ant-design/icons";

const ProductView = () => {
    const { edit,setEdit } = useContext(UpdateCreditFilterContext)
    const navigate = useNavigate();
    const navigateProduct = () => {
        navigate("/products")
    }
    const [cloneProductModal, setCloneProductModal] = useState(false);

    const handleCloneModal = () => {
        setCloneProductModal(true);
    }

    const productsDropdown = productCardData.map((product, index) => ({
        label: product.title,
        value: index.toString(),
    }))

    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: 'End Borrowers',
            children: <EndBorrowerView />,
        },
        {
            key: '2',
            label: 'Product Schema',
            children: <ProductSchemaView />,
        },
        {
            key: '3',
            label: 'SOP',
            children: <ProductSopView />,
        },
        {
            key: '4',
            label: 'Credit Filter',
            children: <CreditFilterView />,
        },
    ];

    const EditCreditFilter = () => {
        setEdit(true);
        console.log("change edit", edit)
        navigate("/products/create/initialfilter")
    }

    const navigateCreditFilterButton = <ButtonComponent hasTitle={true} title="Edit" style="secondary" rootClassName="fw-600 fs-14 lh-18" onClick={EditCreditFilter}/>;

    return (
        <div className="partner-page">
            {/*Page Header*/}
            <PageHeader
                title="~ Product Name"
                handleClick={navigateProduct}
                isBreadcrumbPresent={true}
                isLargeButton={true}
                largeButtonClick={handleCloneModal}
                largeButtonTitle={<span className="ms-2">Clone Project</span>}
                isLargeButtonPrefixIcon={true}
                largeButtonPrefixIcon={<CloneProductIconWhite />}
                largeButtonRootClassName="ms-2"
            />
            <Modal
                title={
                    <span className="clone-product-modal-heading ff-poppins fs-18 fw-600">Choose Partner</span>
                }
                centered
                open={cloneProductModal}
                onOk={() => setCloneProductModal(false)}
                onCancel={() => setCloneProductModal(false)}
                className="ff-inter clone-product-modal"
                footer={
                    <Button className="w-auto gradient-primary">Clone Product</Button>
                }
            >
                <Row className="pa-24 m-0">
                    <Col lg={12} className="pe-16px ps-0">
                        <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">Partner</p>
                        <Select
                            options={productsDropdown}
                            className="w-100"
                            placeholder={`Please Select Partner`}
                        />
                    </Col>
                </Row>
            </Modal>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange}  tabBarExtraContent={navigateCreditFilterButton}/>
        </div>
    );
};



export default ProductView;