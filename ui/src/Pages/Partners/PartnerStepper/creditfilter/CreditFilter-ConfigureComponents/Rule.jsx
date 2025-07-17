import React from 'react';
import Subcondition from './Subcondition';
import { Select, Button } from 'antd';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { CategoryFields, RelationFields, LocationFields, CombinerOptionsFields } from "./mockCreditFilterJson";
import SelectComponent from '../../../../../Components/Common/Select';
import { DeleteBoxicon, Deleteicon, Duplicateicon, PlusAddBlueicon } from '../../../../../assests/images/nav-icons/icons';
import InputComponent from '../../../../../Components/Common/Input';
import { Row } from "react-bootstrap";

const Rule = ({ rulesetID, ruleID, rule, ruleindex, rulesets, setRulesets, handleRulesetChange, handleSubcondition }) => {
    const genDefaultSubCondition = () => {
        let res = { "subConditionID": uuidv4(), "operation": "AND", "relation": "", "val": "" };
        return res
    }
    const genDefaultCondition = () => {
        let res = { "conditionID": uuidv4(), "subConditions": [], "category": "", "relation": "", "val": "", "combiner": "AND" }
        return res
    }
    function handleRemoveRule(rulesetID, ruleID) {
        setRulesets((prev) => {
            let updatedRulesets = prev.map((ruleset) => {
                if (ruleset.rulesetID !== rulesetID) {
                    return ruleset;
                }
                let tempRuleset = { ...ruleset };
                tempRuleset.rules = tempRuleset.rules.filter((rule) => rule.ruleID !== ruleID);
                return tempRuleset;
            });
            // updatedRulesets = updatedRulesets.filter((ruleset) => ruleset.rules.length > 0);
            return updatedRulesets;
        });
    }
    function handleRemoveRuleConditions(rulesetID, ruleID, conditionID) {
        setRulesets((prev) => {
            let updatedRulesets = prev.map((ruleset) => {
                if (ruleset.rulesetID !== rulesetID) {
                    return ruleset
                }
                let tempRuleset = ruleset
                tempRuleset.rules = tempRuleset.rules.map((rule) => {
                    if (rule.ruleID !== ruleID) {
                        return rule
                    }
                    let tempRule = rule
                    tempRule.conditions = tempRule.conditions.filter((condition) => condition.conditionID !== conditionID);
                    return tempRule
                })
                tempRuleset.rules = tempRuleset.rules.filter((rule) => rule.conditions.length > 0)
                return tempRuleset
            })
            // you can add if you want 
            // updatedRulesets = updatedRulesets.filter((ruleset) => ruleset.rules.length > 0);
            return updatedRulesets;
        })
    }
    const handleDuplicateRule = () => {
        const originalRuleset = rulesets.find(ruleset => ruleset.rules.some(r => r.ruleID === ruleID));
        const originalRule = originalRuleset.rules.find(r => r.ruleID === ruleID);
        const newRuleID = uuidv4();
        const newConditions = originalRule.conditions.map(condition => {
            const newConditionID = uuidv4();
            const newSubConditions = condition.subConditions.map(subCondition => ({
                ...subCondition,
                subConditionID: uuidv4()
            }));
            return {
                ...condition,
                conditionID: newConditionID,
                subConditions: newSubConditions
            };
        });
        const duplicatedRule = {
            ...originalRule,
            ruleID: newRuleID,
            conditions: newConditions
        };
        const updatedRulesets = rulesets.map(ruleset => {
            if (ruleset.rulesetID === originalRuleset.rulesetID) {
                return {
                    ...ruleset,
                    rules: [...ruleset.rules, duplicatedRule]
                };
            }
            return ruleset;
        });
        setRulesets(updatedRulesets);
    };
    return (
        <>
            {ruleindex == 0 ? (null) : (<>
                <div className='dashed-lines-combinationcombiner'></div>
                <div className='ml-6'>
                    <Select
                        defaultValue="AND"
                        className='combiner'
                        name="combiner"
                        value={rule.combiner}
                        onChange={(e) => {
                            setRulesets((prev) => {
                                return prev.map((ruleset) => {
                                    if (ruleset.rulesetID !== rulesetID) {
                                        return ruleset
                                    }
                                    let tempRuleset = { ...ruleset };
                                    tempRuleset.rules = tempRuleset.rules.map((rule) => {
                                        if (rule.ruleID !== ruleID) {
                                            return rule
                                        }
                                        let tempRule = { ...rule }
                                        tempRule.combiner = e;
                                        return tempRule
                                    })
                                    return tempRuleset;
                                })
                            })
                        }}
                        options={CombinerOptionsFields}
                    />
                </div>
                <div className='dashed-lines-combinationcombiner'></div>
            </>
            )}
            <div className='combination-wrapper'>
                <div className='conditions-wrapper'>
                    <div className=" fs-16 fw-600 ff-poppins color-heading-text pdb-05rem">Rule Combination <span>{ruleindex + 1}</span></div>
                    {rule.conditions.map((condition, conditionIndex) => {
                        let conditionIDD = condition.conditionID;
                        return <div key={conditionIndex}>
                            {conditionIndex !== 0 && (
                                <>
                                    <div className='dashed-lines-conditioncombiner'></div>
                                    <div className='ml-6'>
                                        <Select
                                            defaultValue="AND"
                                            className='combiner'
                                            name="combiner"
                                            value={condition.combiner}
                                            onChange={(e) =>
                                                handleRulesetChange(rulesetID, ruleID, condition.conditionID, { target: { name: "combiner", value: e } })
                                            }
                                            options={CombinerOptionsFields}
                                        />
                                    </div>
                                    <div className='dashed-lines-conditioncombiner'></div>
                                </>)
                            }
                            <div className='condition-wrapper'>
                                <div className=' a-center d-flex' >
                                    <div className='condition-fields'>
                                        <SelectComponent
                                            labelaction={true}
                                            name="category"
                                            value={condition.category}
                                            onChange={(e) => {
                                                handleRulesetChange(rulesetID, ruleID, condition.conditionID, { target: { name: "category", value: e.target.value } });
                                            }}
                                            options={CategoryFields}
                                        />
                                    </div>
                                    <div className='condition-fields'>
                                        <SelectComponent
                                            labelaction={true}
                                            name="relation"
                                            value={condition.relation}
                                            onChange={(e) =>
                                                handleRulesetChange(rulesetID, ruleID, condition.conditionID, { target: { name: "relation", value: e.target.value } })
                                            }
                                            options={RelationFields}
                                        />
                                    </div>
                                    <div className='condition-fields'>
                                        {/* {condition.category != "30DPD" ? (
                                            <SelectComponent
                                                labelaction={true}
                                                name="val"
                                                value={condition.val}
                                                onChange={(e) =>
                                                    handleRulesetChange(rulesetID, ruleID, condition.conditionID, { target: { name: "val", value: e.target.value } })
                                                }
                                                options={LocationFields}
                                            />
                                        ) :
                                         ( */}
                                            <InputComponent
                                                autoComplete='off'
                                                labelaction={true}
                                                name="val"
                                                value={condition.val}
                                                onChange={(e) =>
                                                    handleRulesetChange(rulesetID, ruleID, condition.conditionID, e)
                                                }
                                            />
                                        {/* )} */}
                                    </div>
                                    
                                        {condition.category === "30DPD" &&
                                        <div className='condition-fields d-flex'>
                                            <span style={{margin:"0rem 0.3rem"}}> in </span>
                                            <InputComponent
                                                labelaction={true}
                                                autoComplete='off'
                                                name="inMonths"
                                                value={condition.inMonths}
                                                onChange={(e) =>
                                                    handleRulesetChange(rulesetID, ruleID, condition.conditionID, { target: { name: "inMonths", value: e.target.value } })
                                                }
                                            />
                                            </div>}
                                    <span
                                        className='mt-02rem cr-pointer '
                                        onClick={() =>
                                            handleRemoveRuleConditions(rulesetID, ruleID, condition.conditionID)
                                        }><DeleteBoxicon /></span>
                                    {
                                        condition.subConditions.length == 0 &&condition.category != "30DPD"&&
                                        <Button
                                            className="add-button"
                                            onClick={() => {
                                                setRulesets((prev) => {
                                                    return prev.map((ruleset) => {
                                                        if (ruleset.rulesetID !== rulesetID) {
                                                            return ruleset
                                                        }
                                                        let tempRuleset = { ...ruleset };
                                                        tempRuleset.rules = tempRuleset.rules.map((rule) => {
                                                            if (rule.ruleID !== ruleID) {
                                                                return rule
                                                            }
                                                            let tempRule = { ...rule }
                                                            tempRule.conditions = tempRule.conditions.map((condition) => {
                                                                if (condition.conditionID !== conditionIDD) {//see above line for conditionIDD for your doubt okkk..
                                                                    return condition
                                                                }
                                                                let tempCondition = { ...condition }
                                                                tempCondition.subConditions = [...tempCondition.subConditions, genDefaultSubCondition()];
                                                                return tempCondition
                                                            })
                                                            return tempRule
                                                        })
                                                        return tempRuleset;
                                                    })
                                                })
                                            }}
                                        ><span className='mr-05rem'><PlusAddBlueicon /></span>Add</Button>
                                    }
                                </div>
                                {condition.subConditions.map((subcondition, subconditionindex) => (
                                    <Subcondition key={subcondition.subConditionID} subConditionID={subcondition.subConditionID} rulesetID={rulesetID} ruleID={ruleID} conditionID={condition.conditionID} condition={condition} conditioncategory={condition.category} subcondition={subcondition} subconditionindex={subconditionindex} rulesets={rulesets} setRulesets={setRulesets} handleSubcondition={handleSubcondition} />
                                ))}
                            </div>
                        </div>
                    })}
                    <div className='dashed-lines-condition'></div>
                    <Button
                        className="addcondition-button"
                        onClick={() => {
                            setRulesets((prev) => {
                                return prev.map((ruleset) => {
                                    if (ruleset.rulesetID !== rulesetID) {
                                        return ruleset
                                    }
                                    let tempRuleset = { ...ruleset };
                                    tempRuleset.rules = tempRuleset.rules.map((rule) => {
                                        if (rule.ruleID !== ruleID) {
                                            return rule
                                        }
                                        let tempRule = { ...rule }
                                        tempRule.conditions = [...tempRule.conditions, genDefaultCondition()]; // Use spread operator to create a new array
                                        return tempRule
                                    })
                                    return tempRuleset;
                                })
                            })
                        }}
                    ><span className='mr-05rem'><PlusAddBlueicon /></span> Add Condition</Button>
                </div>
                <div className='duplicate-delete-wrapper'>
                    <Button
                        className="duplicate-button"
                        onClick={handleDuplicateRule}
                    >
                        <span className='mr-05rem'><Duplicateicon /></span>Duplicate
                    </Button>
                    <Button
                        className='delete-button mt-1rem ml-07rem'
                        onClick={() => handleRemoveRule(rulesetID, ruleID)}
                    >
                        <span className='mr-05rem'><Deleteicon /></span>Delete
                    </Button>
                </div>
            </div>
        </>
    )
}
export default Rule