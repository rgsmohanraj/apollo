import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../style.scss";
import { InitialFilterData, CreditFilterData } from "../CreditFilter";
import { Typography, Modal } from 'antd';
import { CheckCircleOutlined, CaretRightOutlined } from '@ant-design/icons';
import FooterSubmit from '../../../../../Components/Common/FooterSubmit';
import ModalComponent from '../../../../../Components/Common/Modal';
import { UpdateCreditFilterContext } from '../../../../../Context/UpdateCreditFilterContext';

const {Text } = Typography;

export const Summary = () => {
    const {edit}=useContext(UpdateCreditFilterContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [createFilterSuccess, setCreateFilterSuccess] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
        setCreateFilterSuccess(false);
    };
    const handleCreateFilterSuccess = () => {
        setIsModalOpen(false);
        setCreateFilterSuccess(true);
    }
    const modalProps = {
        title: "Confirmation",
        width: '27%',
        onCloseBtnColor: "",
        fontSize: "16px",
        className: "confirmation-dialog ff-inter bg-main-white card-box-shadow",
        okText: "Yes",
        cancelText: "No",
        okButtonProps: { className: 'confirmation-dialog-ok-button ff-inter fw-600 w-auto gradient-primary gray-box-shadow height-32 border-0' },
        cancelButtonProps: { className: 'confirmation-dialog-cancel-button ff-inter fw-600 w-auto bg-main-white color-primary height-32' },
        onCloseBtnColor: ""
    }
    return (
        <>
            <Text type="primary" className="br-crumbs">Partners <CaretRightOutlined /> Early Salary Service Private Limited <CaretRightOutlined /> <span style={{ fontSize: "12px", fontWeight: 400, color: "black" }}>SME Auto Lending</span></Text>
            <div className="sopcredit-title">Credit Filter</div>
            <div className='s-initialfilter'>
                <div className='s-rulecombination'>
                    <h4 className='cl-2C4C86 ff-poppins fs-18 fw-600'>Initial Filter</h4>
                    {InitialFilterData.map((condition, conditionIndex) => {
                        return (
                            <>
                                {conditionIndex == 0 ? <></> :
                                    <span className='s-combiners fw-400 fs-14 ff-inter'>{condition.combiner}</span>}
                                <div className='s-condition-subcondition d-flex'>
                                    <div>
                                        <span className='fw-700 fs-14 ff-inter cl-414042'> {condition.category}</span>
                                        <span className='fw-400 fs-14 ff-inter cl-373AF'> {condition.relation}</span>
                                        <span className='fw-400 fs-14 ff-inter cl-1B212D'> {condition.val} </span>
                                    </div>
                                    {condition.subConditions.map((subCondition, subConditionIndex) => {
                                        return (<div>
                                            <span className='pdl-03rem fw-400 fs-14 ff-inter cl-1B212D'>({subCondition.operation})</span>
                                            <span className='fw-400 fs-14 ff-inter cl-373AF'> {subCondition.relation}</span>
                                            <span className='fw-400 fs-14 ff-inter cl-1B212D'> {subCondition.val}</span>
                                        </div>)
                                    })}
                                </div>
                            </>)
                    })}
                </div>
            </div>

            <div className="pdb-2rem">
                {
                    CreditFilterData.map((ruleset, rulesetIndex) => {
                        return (
                            <>
                                {rulesetIndex == 0 ? <></>
                                    : <div className='s-rulesetcombiner'>{ruleset.combiner}</div>}
                                <div className='s-customeruleset fw-400 fs-14 ff-inter'>
                                    <h4 className='pd-13rem cl-2C4C86 ff-poppins fs-18 fw-600 border-bottom-gray'>{ruleset.customRuleSet}</h4>
                                    {ruleset.rules.map((rule, ruleIndex) => {
                                        return (
                                            <>
                                                {ruleIndex == 0 ? <></>
                                                    : <span className='s-combiners fw-400 fs-14 ff-inter'>{rule.combiner}</span>}
                                                <div className='s-rulecombination'>
                                                    <h4 className='cl-2C4C86 ff-poppins fs-18 fw-600'>{rule.ruleCombination}</h4>
                                                    {rule.conditions.map((condition, conditionIndex) => {
                                                        return (
                                                            <>
                                                                {conditionIndex == 0 ? <></> :
                                                                    <span className='s-combiners fw-400 fs-14 ff-inter'>{condition.combiner}</span>}
                                                                <div className='s-condition-subcondition d-flex'>
                                                                    <div>
                                                                        <span className='fw-700 fs-14 ff-inter cl-414042'> {condition.category}</span>
                                                                        <span className='fw-400 fs-14 ff-inter cl-373AF'> {condition.relation}</span>
                                                                        <span className='fw-400 fs-14 ff-inter cl-1B212D'> {condition.val} </span>
                                                                        <span className='fw-400 fs-14 ff-inter cl-1B212D'>{condition.inMonths ? "in": " "} {condition.inMonths} </span>
                                                                        
                                                                    </div>
                                                                    {condition.subConditions.map((subCondition, subConditionIndex) => {
                                                                        return (<div>
                                                                            <span className='pdl-03rem fw-400 fs-14 ff-inter cl-1B212D'>({subCondition.operation})</span>
                                                                            <span className='fw-400 fs-14 ff-inter cl-373AF'> {subCondition.relation}</span>
                                                                            <span className='fw-400 fs-14 ff-inter cl-1B212D'> {subCondition.val}</span>
                                                                        </div>)
                                                                    })}
                                                                </div>
                                                            </>)
                                                    })}
                                                </div>
                                            </>)
                                    })}
                                </div>
                            </>)
                    })
                }
            </div>


            <div>
                <FooterSubmit isButton="true" checkBox={true} title={edit ? "Update Configuration" : "Confirm Configuration"}isCancelPresent={true} type="button"navItem="creditFilterItems" onClick={showModal} path="summary" />
                <ModalComponent open={isModalOpen} {...modalProps}
                    onOk={() => handleCreateFilterSuccess(false)}
                    onClose={() => setIsModalOpen(false)}>
                    <span className="py-2">Are you sure to {edit ? "update" : "create"} this Credit Filter?</span>
                </ModalComponent>
                <ModalComponent
                    open={createFilterSuccess}
                    className="success-dialog ff-inter bg-main-white card-box-shadow"
                    okText={
                        <Link to="/end-borrowers" style={{ textDecoration: "none" }}>
                            <span className="d-flex align-items-center justify-content-center ff-inter">
                                Proceed
                            </span>
                        </Link>
                    }
                    onClose={() => setCreateFilterSuccess(false)}
                    okButtonProps={{ className: 'success-dialog-ok-button ff-inter fw-600 gradient-primary w-auto height-32 color-light gray-box-shadow' }}
                    cancelButtonProps={{ className: 'success-dialog-cancel-button ff-inter fw-600 w-auto bg-main-white gray-box-shadow color-primary' }}
                >
                    <div className="d-flex align-items-center w-100 justify-content-center">
                        <CheckCircleOutlined className="success-dialog-icon" />
                    </div>
                    <p className="w-100 d-flex justify-content-center align-items-center text-center mb-24px">The credit filter has been successfully {edit ? "updated" : "created" },<br />you’re ready to accept the end borrower applications.</p>
                </ModalComponent>
            </div>
        </>
    )
}