import React from 'react';
import { Select, Button } from 'antd';
import { RelationFields, LocationFields, CombinerOptionsFields } from "./mockCreditFilterJson";
import { v4 as uuidv4 } from 'uuid';
import { DeleteBoxicon, PlusAddBlueicon } from '../../../../../assests/images/nav-icons/icons';
import SelectComponent from '../../../../../Components/Common/Select';
import InputComponent from '../../../../../Components/Common/Input';

const Subcondition = ({ rulesetID, ruleID, conditionID, subConditionID, condition, conditioncategory, subcondition, subconditionindex, rulesets, setRulesets, handleSubcondition }) => {
    const genDefaultSubCondition = () => {
        let res = { "subConditionID": uuidv4(), "operation": "AND", "relation": "", "val": "" };
        return res
    }
    function handleRemovesubConditions(rulesetID, ruleID, conditionID, subConditionID) {
        setRulesets((prev) => {
            return prev.map((ruleset) => {
                if (ruleset.rulesetID !== rulesetID) {
                    return ruleset;
                }
                let tempRuleset = ruleset;
                tempRuleset.rules = tempRuleset.rules.map((rule) => {
                    if (rule.ruleID !== ruleID) {
                        return rule;
                    }
                    let tempRule = rule;
                    tempRule.conditions = tempRule.conditions.map((condition) => {
                        if (condition.conditionID !== conditionID) {
                            return condition;
                        }
                        let tempCondition = condition;
                        tempCondition.subConditions = tempCondition.subConditions.filter((subCondition) => subCondition.subConditionID !== subConditionID);
                        return tempCondition;
                    });
                    return tempRule;
                });
                return tempRuleset;
            });
        });
    }
    return (
        <>
        <div className='mb-01rem ml-27'>
            <Select
                defaultValue="AND"
                className='combiner'
                name="operation"
                value={subcondition.operation}
                onChange={(e) => handleSubcondition(rulesetID, ruleID, conditionID, subConditionID, { target: { name: "operation", value: e } })}
                options={CombinerOptionsFields}
            />
            </div>
                <div className='d-flex a-center'>
                <div className='condition-fields'></div>
                    <div className='condition-fields'>
                        <SelectComponent
                            labelaction={true}
                            name="relation"
                            value={subcondition.relation}
                            onChange={(e) => handleSubcondition(rulesetID, ruleID, conditionID, subConditionID, { target: { name: "relation", value: e.target.value } })}
                            options={RelationFields}
                        />
                    </div>
                    <div className='condition-fields'>
                        {/* {conditioncategory === "Location" ? (
                            <SelectComponent
                                labelaction={true}
                                name="val"
                                value={subcondition.val}
                                onChange={(e) => handleSubcondition(rulesetID, ruleID, conditionID, subConditionID, { target: { name: "val", value: e.target.value } })}
                                options={LocationFields}
                            />
                        ) : (
                            <> */}
                                <InputComponent
                                    labelaction={true}
                                    autoComplete='off'
                                    name="val"
                                    value={subcondition.val}
                                    onChange={(e) => handleSubcondition(rulesetID, ruleID, conditionID, subConditionID, e)}
                                />
                            {/* </>
                        )} */}
                    </div>
                    <span
                        className='mt-02rem cr-pointer'
                        onClick={() => handleRemovesubConditions(rulesetID, ruleID, conditionID, subConditionID)}
                    ><DeleteBoxicon /></span>
                    {subconditionindex === condition.subConditions.length - 1 &&
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
                                                if (condition.conditionID !== conditionID) {
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
        </>
    )
}
export default Subcondition