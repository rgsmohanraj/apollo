import React from 'react';
import { Row } from "react-bootstrap";
import { Button, Select } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import CreateSubconditions from './CreateSubconditions';
import SelectComponent from '../../../../../Components/Common/Select';
import InputComponent from '../../../../../Components/Common/Input';
import { CategoryFields, CombinerOptionsFields, LocationFields, RelationFields } from '../../creditfilter/CreditFilter-ConfigureComponents/mockCreditFilterJson';
import { DeleteBoxicon, PlusAddBlueicon } from '../../../../../assests/images/nav-icons/icons';

const Createconditions = ({ conditionID, condition, conditionIndex, conditionsets, setConditionsets, handleConditionChange, handleSubconditionChange }) => {
  const genDefaultSubCondition = () => {
    let res = { "subConditionID": uuidv4(), "operation": "AND", "relation": "", "val": "" };
    return res
  }
  const genDefaultCondition = () => {
    let res = { "conditionID": uuidv4(), "subConditions": [], "category": "", "relation": "", "val": "", "combiner": "AND" }
    return res
  }
  function handleRemoveConditions(conditionID) {
    setConditionsets((prev) => {
      return prev.filter((condition) => condition.conditionID !== conditionID);
    })
  }
  return (
    <>
      {conditionIndex !== 0 && (<>
        <div className='dashed-lines-initial-conditioncombiner'></div>
        <div className='ml-6'>
          <Select
            defaultValue="AND"
            name="combiner"
            className='combiner'
            value={condition.combiner}
            onChange={(e) => handleConditionChange(condition.conditionID, { target: { name: "combiner", value: e } })}
            options={CombinerOptionsFields}
          />
        </div>
        <div className='dashed-lines-initial-conditioncombiner'></div>
      </>)
      }
      <div className='condition-wrapper'>
        <div className='d-flex a-center'>
          <div className='condition-fields'>
            <SelectComponent
              labelaction={true}
              name="category"
              value={condition.category}
              onChange={(e) => handleConditionChange(condition.conditionID, { target: { name: "category", value: e.target.value } })}
              options={CategoryFields}
            />
          </div>
          <div className='condition-fields'>
            <SelectComponent
              labelaction={true}
              name="relation"
              value={condition.relation}
              onChange={(e) => handleConditionChange(condition.conditionID, { target: { name: "relation", value: e.target.value } })}
              options={RelationFields}
            />
          </div>
          <div className='condition-fields'>
            {/* {condition.category === "30DPD" ? (
              <SelectComponent
                labelaction={true}
                name="val"
                value={condition.val}
                onChange={(e) => handleConditionChange(condition.conditionID, { target: { name: "val", value: e.target.value } })}
                options={LocationFields}
              />
            ) : ( */}
              <InputComponent
                labelaction={true}
                autoComplete='off'
                name="val"
                value={condition.val}
                onChange={(e) => handleConditionChange(condition.conditionID, e)}
              />
            {/* )} */}
          </div>
            {condition.category === "30DPD" &&<>
            <div className='condition-fields d-flex'>
            <span style={{margin:"0rem 0.3rem"}}> in </span>
              <InputComponent
                labelaction={true}
                autoComplete='off'
                name="inMonths"
                value={condition.inMonths}
                onChange={(e) => handleConditionChange(condition.conditionID, { target: { name: "months", value: e.target.value } })}
              />
              </div>
              </>
            }

          <span
            className='mt-02rem cr-pointer'
            onClick={() => handleRemoveConditions(condition.conditionID)}
          ><DeleteBoxicon /></span>
          {
            condition.subConditions.length == 0 && condition.category != "30DPD" &&
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

        {condition.subConditions.map((subcondition, subconditionindex) => (
          <CreateSubconditions key={subcondition.subConditionID} subConditionID={subcondition.subConditionID} conditionID={conditionID} condition={condition} conditioncategory={condition.category} subcondition={subcondition} subconditionindex={subconditionindex} conditionsets={conditionsets} setConditionsets={setConditionsets} handleSubconditionChange={handleSubconditionChange} />
        ))}
      </div>
      {conditionIndex == conditionsets.length - 1 && (
        <>
          <div className='dashed-lines-condition'></div>
          <Button
            className="addcondition-button"
            onClick={() =>
              setConditionsets((prev) => [...prev, genDefaultCondition()])}
          ><span className='mr-05rem'><PlusAddBlueicon /></span> Add Condition</Button></>)
      }
    </>
  )
}

export default Createconditions;