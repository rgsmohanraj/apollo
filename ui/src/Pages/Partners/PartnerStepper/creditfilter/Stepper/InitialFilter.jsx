import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography,Button} from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import Createconditions from "../CreditFilter-InitialFilterComponents/Createconditions";
import "../style.scss";
import { v4 as uuidv4 } from 'uuid';
import { PlusAddBlueicon } from '../../../../../assests/images/nav-icons/icons';
import FooterSubmit from '../../../../../Components/Common/FooterSubmit';
import { UpdateCreditFilterContext } from '../../../../../Context/UpdateCreditFilterContext';
import { InitialFilterData } from '../CreditFilter';

const { Text } = Typography;

export const InitialFilter = () => {

  const {edit}=useContext(UpdateCreditFilterContext);
  const genDefaultSubCondition = () => {
    let res = { "subConditionID": uuidv4(), "operation": "AND", "relation": "", "val": "" };
    return res
  }
  const genDefaultCondition = () => {
    let res = { "conditionID": uuidv4(), "subConditions": [], "category": "", "relation": "", "val": "", "combiner": "AND" }
    return res
  }
  const [conditionsets, setConditionsets] = useState(() => {
    if (!edit) {
      return [genDefaultCondition()];
    } else {
      return InitialFilterData;
    }
  });
  const handleConditionChange = (conditionID, event) => {
    setConditionsets((prev) => {
      return prev.map((condition) => {
        if (condition.conditionID !== conditionID) {
          return condition
        }
        let tempCondition = condition;
        tempCondition[event.target.name] = event.target.value;
        return tempCondition
      }
      );
    })
  }
  // useEffect(() => { 
  //   console.log("conditions", conditionsets)
  //  }, [conditionsets]);
  const handleSubconditionChange = (conditionID, subConditionID, event) => {
    setConditionsets((prev) => {
      return prev.map((condition) => {
        if (condition.conditionID !== conditionID) {
          return condition
        }
        let tempCondition = condition;
        tempCondition.subConditions = tempCondition.subConditions.map((subcondition) => {
          if (subcondition.subConditionID !== subConditionID) {
            return subcondition
          }
          let tempSubCondition = subcondition;
          tempSubCondition[event.target.name] = event.target.value;
          return tempSubCondition
        })
        return tempCondition
      })
    })
  }
  const navigate = useNavigate();
  const handleNextPage = () => {
    // setConditionsets((prev) => {
    //       let tempConditionset = prev
    //      return tempConditionset["initialfilter"]=`Initial Filter`;
    //   })
      const jsonString = JSON.stringify(conditionsets);
    console.log(jsonString);
    navigate("/products/create/configurefilter")
  }
  return (
    <div className="sop-configuration-details">
      <Text type="primary" className="br-crumbs">Partners <CaretRightOutlined />  Early Salary Service Private Limited  <CaretRightOutlined /> <span style={{ fontSize: "12px", fontWeight: 400, color: "black" }}>SME Auto Lending</span></Text>
      <div className="sopcredit-title">Credit Filter</div>
      <div className='creditfilter'>
        <div className='border-bottom-gray pd-1rem '>
          <span className="fs-16 fw-600 ff-poppins color-heading-text">Initial Filter</span>
        </div>
        <div className='mt-1rem ml-1rem pdb-1rem'>
          {conditionsets.map((condition, conditionIndex) => {
            return <Createconditions key={condition.conditionID} conditionID={condition.conditionID}
              condition={condition} conditionIndex={conditionIndex}
              conditionsets={conditionsets} setConditionsets={setConditionsets}
              handleConditionChange={handleConditionChange} handleSubconditionChange={handleSubconditionChange} />
          })
          }
          {conditionsets.length === 0 && (
            <>
              <div className='dashed-lines-condition'></div>
              <Button
                className="addcondition-button"
                onClick={() =>
                  setConditionsets((prev) => [...prev, genDefaultCondition()])}
              ><span className='mr-05rem'><PlusAddBlueicon /></span> Add Condition</Button></>)
          }
        </div>
      </div>
      <FooterSubmit isButton="true" title={edit ? "Update Initial Filter" : "Create Initial Filter"} type="button" onClick={handleNextPage} path="initialfilter" />
    </div>
  )
}
