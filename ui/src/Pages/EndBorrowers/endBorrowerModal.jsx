import React from "react";
import {productCardData} from "../../Pages/Partners/mockPartnerData";
import { Col, Row } from "react-bootstrap";
import { Button,  Select } from "antd";
import ModalComponent from "../../Components/Common/Modal";
import {  useNavigate } from "react-router-dom";
import ButtonComponent from "../../Components/Common/Button";

const EndBorrowerModal = ({open,onClose}) => {
    const navigate = useNavigate();
    const showBorrower = () => {
        navigate("/end-borrowers")
        onClose();
    }
    const productsDropdown = productCardData.map((product, index) => ({
        label: product.title,
        value: index.toString(),
    }))


    const modalProps={
        title:'Choose Partner & Product',
        footer:'',
        width:'37.5%'
    }

    return (
        <>
           
            
            <ModalComponent open={open} {...modalProps} onClose={()=>onClose()}>
        <Row className="py-4 m-0">
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
                <div className="d-flex align-items-center justify-content-center">
                    <ButtonComponent type="button" hasTitle={true} title="Proceed" onClick={showBorrower} style="primary" />
                </div>
       </ModalComponent>
            {/* <Modal
                title={
                    <span className="clone-product-modal-heading ff-poppins fs-18 fw-600">Choose Partner & Product</span>
                }
                centered
                open={endBorrowerModal}
                onOk={() => setEndBorrowerModal(false)}
                onCancel={() => setEndBorrowerModal(false)}
                className="ff-inter clone-product-modal"
                footer={
                    <Button className="w-auto gradient-primary" onClick={showBorrower}>Proceed</Button>
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
            </Modal> */}
            {/* {borrowerPage && (
            <div>end borrower</div>
            )} */}
        </>
    );
        // return (
        //   <div>
        //     {/* Your modal content */}
        //     <button onClick={closeModal}>Close Modal</button>
        //   </div>
        // );
}
export default EndBorrowerModal;