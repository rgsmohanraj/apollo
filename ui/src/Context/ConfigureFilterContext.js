// import { useState, createContext, useEffect, useContext } from "react";
// import { v4 as uuidv4 } from 'uuid';
// import { UpdateCreditFilterContext } from "./UpdateCreditFilterContext";
// import {InitialFilterData,CreditFilterData} from "../.././src/Pages/Partners/PartnerStepper/creditfilter/CreditFilter";

// export const ConfigureFilterContext=createContext();

// export function ConfigureFilterContextProvider ({children,edit}) {
//   // const {edit}=useContext(UpdateCreditFilterContext);
//     const genDefaultSubCondition = () => {
//         let res = { "subConditionID": uuidv4(), "operation": "AND", "relation": "", "val": "" };
//         return res
//       }
//       const genDefaultCondition = () => {
//         let res = { "conditionID": uuidv4(), "subConditions": [], "category": "", "relation": "", "val": "", "combiner": "AND" }
//         return res
//       }
//       const genDefaultRule = () => {
//         let res = { "ruleID": uuidv4(), "conditions": [genDefaultCondition()],"combiner": "AND" }
//         return res
//       }
//       const genDefaultRuleset = () => {
//         let res = { "rulesetID": uuidv4(), "rules": [genDefaultRule()],"combiner": "AND" }
//         return res
//       }
//       // const [rulesets, setRulesets] = useState([]);
//       const [rulesets, setRulesets] = useState(() => {
//         if (!edit) {
//           return [genDefaultRuleset()];
//         } else {
//           return CreditFilterData;
//         }
//       });
//       const [conditionsets, setConditionsets] = useState(() => {
//         if (!edit) {
//           return [genDefaultCondition()];
//         } else {
//           return InitialFilterData;
//         }
//       });
//       // const [conditionsets, setConditionsets] = useState([]);
//       // useEffect(()=>{
//         // setRulesets([genDefaultRuleset()]);
//         setConditionsets([genDefaultCondition()]); 
//       // },[])

//     return <ConfigureFilterContext.Provider value={
//         {rulesets,setRulesets,
//             conditionsets,setConditionsets,edit
//          }
//         }>
//         {children}</ConfigureFilterContext.Provider>
// }