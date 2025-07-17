import React from 'react'
import { InitialFilterData,CreditFilterData } from "../../Partners/PartnerStepper/creditfilter/CreditFilter";

export const CreditFilterView = () => {
    return (
        <>
            <div className='s-initialfilter'>
                <div className='s-rulecombination'>
                        <h4 className='cl-2C4C86 ff-poppins fs-18 fw-600'>InitialFilter</h4>
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

        </>
    )
}
