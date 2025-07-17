import React from 'react';
import {Row } from "react-bootstrap";
import { Select,Button} from 'antd';
import { v4 as uuidv4 } from 'uuid';
import SelectComponent from '../../../../../Components/Common/Select';
import InputComponent from '../../../../../Components/Common/Input';
import { CombinerOptionsFields, LocationFields, RelationFields } from '../CreditFilter-ConfigureComponents/mockCreditFilterJson';
import { DeleteBoxicon, PlusAddBlueicon } from '../../../../../assests/images/nav-icons/icons';

const CreateSubconditions = ({ conditionID, subConditionID, condition, conditioncategory, subcondition, subconditionindex, conditionsets, setConditionsets, handleSubconditionChange }) => {
    console.log('createSubconditions')
    const genDefaultSubCondition = () => {
        let res = { "subConditionID": uuidv4(), "operation": "AND", "relation": "", "val": "" };
        return res
    }
    function handleRemovesubConditions(conditionID, subConditionID) {
        setConditionsets((prev) => {
            return prev.map((condition) => {
                if (condition.conditionID !== conditionID) {
                    return condition;
                }
                let tempCondition = condition;
                tempCondition.subConditions = tempCondition.subConditions.filter((subCondition) => subCondition.subConditionID !== subConditionID);
                return tempCondition;
            });
        });
    }
    return (<>
        <div className='mb-01rem ml-27'>
            <Select
                defaultValue="AND"
                className='combiner'
                name="operation"
                value={subcondition.operation}
                onChange={(e) => handleSubconditionChange(conditionID, subConditionID, { "target": { "name": "operation", "value": e } })}
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
                        onChange={(e) => handleSubconditionChange(conditionID, subConditionID, { target: { name: "relation", value: e.target.value } })}
                        options={RelationFields}
                    />
                </div>
                <div className='condition-fields'>
                    {/* {conditioncategory === "Location" ? (
                        <SelectComponent
                            labelaction={true}
                            name="val"
                            value={subcondition.val}
                            onChange={(e) => { handleSubconditionChange(conditionID, subConditionID, { "target": { "name": "val", "value": e.target.value } }) }}
                            options={LocationFields}
                        />
                    ) : ( */}
                        <InputComponent
                            labelaction={true}
                            autoComplete='off'
                            name="val"
                            value={subcondition.val}
                            onChange={(e) => handleSubconditionChange(conditionID, subConditionID, e)}
                        />
                    {/* )} */}
                </div>
                <span
                    className='mt-02rem cr-pointer'
                    onClick={() => handleRemovesubConditions(conditionID, subConditionID)}
                ><DeleteBoxicon /></span>
                {subconditionindex === condition.subConditions.length - 1 &&
                    <Button
                        className="add-button"
                        onClick={() => {
                            setConditionsets((prev) => {
                                return prev.map((condition) => {
                                    if (condition.conditionID !== conditionID) {
                                        return condition
                                    }
                                    let tempCondition = { ...condition }
                                    tempCondition.subConditions = [...tempCondition.subConditions, genDefaultSubCondition()];
                                    return tempCondition
                                })
                            })
                        }}
                    ><span className='mr-05rem'><PlusAddBlueicon /></span>Add</Button>
                }
            </div>
    </>)
}

export default CreateSubconditions;