import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateRuleset from "../CreditFilter-ConfigureComponents//CreateRuleset";
import "../style.scss";
import { Typography, Button } from 'antd';
import { PlusAddWhiteicon } from "../../../../../assests/images/nav-icons/icons";
import { CaretRightOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import FooterSubmit from '../../../../../Components/Common/FooterSubmit';
import {CreditFilterData} from '../CreditFilter';
import { UpdateCreditFilterContext } from '../../../../../Context/UpdateCreditFilterContext';

const {Text } = Typography;
export const ConfigureFilter = () => {
  const {edit}=useContext(UpdateCreditFilterContext);
  const navigate = useNavigate();
  const genDefaultSubCondition = () => {
    let res = { "subConditionID": uuidv4(), "operation": "AND", "relation": "", "val": "" };
    return res
  }
  const genDefaultCondition = () => {
    let res = { "conditionID": uuidv4(), "subConditions": [], "category": "", "relation": "", "val": "", "combiner": "AND" }
    return res
  }
  const genDefaultRule = () => {
    let res = { "ruleID": uuidv4(), "conditions": [genDefaultCondition()],"combiner": "AND" }
    return res
  }
  const genDefaultRuleset = () => {
    let res = { "rulesetID": uuidv4(), "rules": [genDefaultRule()],"combiner": "AND" }
    return res
  }
  const [rulesets, setRulesets] = useState(() => {
    if (!edit) {
      return [genDefaultRuleset()];
    } else {
      return CreditFilterData;
    }
  });
  const handleRulesetChange = (rulesetID, ruleID, conditionID, event) => {
    setRulesets((prev) => {
      return prev.map((ruleset) => {
        if (ruleset.rulesetID !== rulesetID) {
          return ruleset
        }
        let tempRuleset = ruleset
        tempRuleset.rules = tempRuleset.rules.map((rule) => {
          if (rule.ruleID !== ruleID) {
            return rule
          }
          let tempRule = rule;
          tempRule.conditions = tempRule.conditions.map((condition) => {
            if (condition.conditionID !== conditionID) {
              return condition
            }
            let tempCondition = condition
            tempCondition[event.target.name] = event.target.value;
            return tempCondition
          })
          return tempRule
        })
        return tempRuleset
      })
    })
  }
  const handleSubcondition = (rulesetID, ruleID, conditionID, subConditionID, event) => {
    setRulesets((prev) => {
      return prev.map((ruleset) => {
        if (ruleset.rulesetID !== rulesetID) {
          return ruleset
        }
        let tempRuleset = ruleset
        tempRuleset.rules = tempRuleset.rules.map((rule) => {
          if (rule.ruleID !== ruleID) {
            return rule
          }
          let tempRule = rule;
          tempRule.conditions = tempRule.conditions.map((condition) => {
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
          return tempRule
        })
        return tempRuleset
      })
    })
  }
  const handleNextPage = () => {
    navigate("/products/create/summary");
    setRulesets((prev) => {
      return prev.map((ruleset,rulesetIndex) => {
          let tempRuleset = ruleset
          tempRuleset["customRuleSet"]=`Costome Rule Set ${rulesetIndex+1}`;
          tempRuleset.rules = tempRuleset.rules.map((rule,ruleIndex) => {
            let tempRule = rule;
            tempRule["ruleCombination"]=`Rule Combination ${ruleIndex+1}`;
            return tempRule
          })
          return tempRuleset
        })
      })
      const jsonString = JSON.stringify(rulesets);
    console.log(jsonString);
  }
  return (
    <div className="configurefilter-main">
      <Text type="primary" className="br-crumbs">Partners <CaretRightOutlined />  Early Salary Service Private Limited  <CaretRightOutlined /> <span style={{ fontSize: "12px", fontWeight: 400, color: "black" }}>SME Auto Lending</span></Text>
      <div className="sopcredit-title">Credit Filter</div>
      <div className="">
        {
          rulesets.map((ruleset, rulesetindx) => {
            return <CreateRuleset rulesetID={ruleset.rulesetID} key={ruleset.rulesetID} rules={ruleset.rules} rulesetindex={rulesetindx} rulesets={rulesets} setRulesets={setRulesets} handleRulesetChange={handleRulesetChange} handleSubcondition={handleSubcondition} />
          })}
      </div>
      <div className='pdb-2rem pdt-1rem'>
        <Button
          className="main-button"
          onClick={() => setRulesets((prev) => [...prev,genDefaultRuleset()])}
        ><span className='mr-05rem'><PlusAddWhiteicon /></span>Add Custom Rule Set
        </Button>
      </div>
      <FooterSubmit isButton="true" title={edit ? "Update Configuration" : "Create Configuration"} isCancelPresent={true} type="button" navItem="creditFilterItems" onClick={handleNextPage} path="configurefilter" />
    </div>
  )
}
