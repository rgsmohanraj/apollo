import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Select, Button } from 'antd';
import Rule from "../CreditFilter-ConfigureComponents//Rule.jsx";
import _ from 'lodash';
import { Deleteicon, Duplicateicon, PlusAddWhiteicon } from '../../../../../assests/images/nav-icons/icons.jsx';
import { CombinerOptionsFields } from "./mockCreditFilterJson";
import ModalComponent from '../../../../../Components/Common/Modal/index.jsx';

const CreateRuleset = ({ rulesetID, rules, rulesetindex, rulesets, setRulesets, handleRulesetChange, handleSubcondition }) => {
    const genDefaultCondition = () => {
        let res = { "conditionID": uuidv4(), "subConditions": [], "category": "", "relation": "", "val": "", "combiner": "AND" }
        return res
    }
    const genDefaultRule = () => {
        let res = { "ruleID": uuidv4(), "conditions": [genDefaultCondition()], "combiner": "AND" }
        return res
    }
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    function handleRemoveRuleset(rulesetID) {
        setRulesets((prev) => {
            return prev.filter((ruleset) => ruleset.rulesetID !== rulesetID);
        });
        setIsModalOpen(false);
    }
    const modalProps = {
        title: "Confirmation",
        width: '30%',
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
            {rulesetindex !== 0 && (<div className='m-1rem'>
                <Select
                    defaultValue="AND"
                    className='combiner'
                    name="combiner"
                    value={rulesets[rulesetindex].combiner}
                    onChange={(e) => {
                        setRulesets((prev) => {
                            return prev.map((ruleset) => {
                                if (ruleset.rulesetID !== rulesetID) {
                                    return ruleset
                                }
                                let tempRuleset = { ...ruleset };
                                tempRuleset.combiner = e;
                                return tempRuleset;
                            })
                        })
                    }}
                    options={CombinerOptionsFields}
                />
            </div>)
            }
            <div className='creditfilter'>
                <div className='border-bottom-gray pd-1rem d-flex a-center j-space-between'>
                    <div className=" fs-18 fw-600 ff-poppins color-heading-text">Custome Rule Set <span>{rulesetindex + 1}</span></div>
                    <div className='d-flex '>
                        <Button
                            className="duplicate-button mr-05rem"
                            onClick={() => {
                                const originalRuleset = rulesets.find(ruleset => ruleset.rulesetID === rulesetID);
                                const duplicatedRuleset = _.cloneDeep(originalRuleset);
                                duplicatedRuleset.rulesetID = uuidv4();
                                duplicatedRuleset.rules.forEach(rule => {
                                    const newRuleID = uuidv4();
                                    rule.ruleID = newRuleID;
                                    rule.conditions.forEach(condition => {
                                        const newConditionID = uuidv4();
                                        condition.conditionID = newConditionID;
                                        condition.subConditions.forEach(subCondition => {
                                            const newSubConditionID = uuidv4();
                                            subCondition.subConditionID = newSubConditionID;
                                        });
                                    });
                                });
                                setRulesets(prev => [...prev, duplicatedRuleset]);
                            }}
                        >
                            <span className='mr-05rem'><Duplicateicon /></span>Duplicate
                        </Button>
                        <Button
                            className='delete-button'
                            onClick={showModal}
                        >
                            <span className='mr-05rem'><Deleteicon /></span>Delete
                        </Button>
                        <ModalComponent open={isModalOpen} {...modalProps}
                            onOk={() => handleRemoveRuleset(rulesetID)}
                            onClose={() => setIsModalOpen(false)}>
                            <span className="py-2">Are you sure to delete this Custom Rule Set {rulesetindex + 1} ?</span>
                        </ModalComponent>
                    </div>
                </div>
                <div className='mt-1rem ml-1rem'>
                    {rules.map((rule, ruleindex) => (
                        <Rule key={rule.ruleID} rulesetID={rulesetID} ruleID={rule.ruleID} rule={rule} ruleindex={ruleindex} rulesets={rulesets} setRulesets={setRulesets} handleRulesetChange={handleRulesetChange} handleSubcondition={handleSubcondition} />
                    ))}
                    <div className='dashed-lines-combination'></div>
                    <div className='pdb-1rem ml-4'>
                        <Button
                            className="main-button"
                            onClick={() => {
                                setRulesets((prev) => {
                                    return prev.map((ruleset) => {
                                        if (ruleset.rulesetID !== rulesetID) {
                                            return ruleset
                                        }
                                        let tempRuleset = { ...ruleset };
                                        tempRuleset.rules = [...tempRuleset.rules, genDefaultRule()];
                                        return tempRuleset;
                                    })
                                })
                            }}
                        >
                            <span className='mr-05rem'><PlusAddWhiteicon /></span>Add Combination</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CreateRuleset