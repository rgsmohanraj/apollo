import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { stepperMenuItems } from "../../../Pages/Partners/PartnerStepper/stepper-paths";
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Checkbox } from "antd";

const FooterSubmit = ({ title, onClick, type, checkBox, isCancelPresent, isButton, isNextBtn, isPrevBtn, path, navItem, children,productSchema, handleSubmit, step }) => {
    const navigate = useNavigate();
    var currentStepper = [];
    var currentIndex = "";

    const handleStepperNavigation = (id) => {
        stepperMenuItems && stepperMenuItems.forEach((ele) => {
            if (ele.hasOwnProperty(navItem))
                currentStepper = ele[navItem];
        })
        if (currentStepper) {
            currentIndex = currentStepper.indexOf(path);
            if (id === "next") {
                if (currentIndex < currentStepper.length - 1) {
                    navigate(`/products/create/${currentStepper[currentIndex + 1]}`);
                }
            }
            if (id === "previous") {
                if (currentIndex > 0) {
                    navigate(`/products/create/${currentStepper[currentIndex - 1]}`);
                }
            }
        }
    }
    return (
        <div className="position-fixed bottom-0 right-0 bg-disabled sticky-footer">
            <Row>
                <Col lg="12">
                    <div className={checkBox ? "d-flex j-space-between" : "d-flex justify-content-end"}>
                        {checkBox &&
                            <div className="d-flex a-center "><Checkbox /><span className="ff-inter fw-400 fs-14 ml-05rem"> I agree with these filters</span>
                            </div>}
                        <div className="d-flex">
                            {isCancelPresent &&
                                <Button style={`secondary`} hasTitle={true} title="Cancel" onClick={() => navigate(-1)} type="button" rootClassName="w-auto me-2" />
                            }
                            {isPrevBtn &&
                                <Button style={`secondary`} id="previous" hasTitle={true} type={type} title="Previous" hasPrefixIcon={true} prefixIcon={<ArrowLeftOutlined />}
                                    // onClick=
                                    // {(event) => {
                                    //     productSchema ? handleSubmit(event,'previous',step)
                                    //     :handleStepperNavigation('previous');
                                    // }}
                                    onClick={(event)=>handleSubmit(event,'prev',step)}
                                    rootClassName="w-auto me-2" />
                            }{
                                isNextBtn &&
                                <Button style={`primary`} id="next" hasTitle={true} type={type} title="Next" hasSuffixIcon={true} suffixIcon={<ArrowRightOutlined />}
                                    // onClick=
                                    // {(event) => {
                                    //     productSchema ? handleSubmit(event,'next',step)
                                    //     :handleStepperNavigation('next');
                                    // }}
                                    onClick={(event)=>handleSubmit(event,'next',step)}
                                    rootClassName="w-auto" />
                            }
                            {
                                isButton &&
                                <Button style={`primary`} hasTitle={true} title={title} type={type} onClick={onClick} rootClassName="w-auto" />
                            }
                        </div>
                    </div>
                </Col>
            </Row>
            {children}
        </div>
    );
};

export default FooterSubmit;