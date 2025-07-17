import React, { useState, useEffect } from "react";
import { Createloan, Updateloan, Agrementsigned, PostDispDocument } from "./export.js";
import WizardComponent from "../../../../Components/Common/Wizard";
import LeftMenu from "../../../../Components/Common/LeftMenu";
import { createLoanData, updateLoanData, AgreementData } from "../sopconfiguration/mockSOPdata";
 
const SopComponent = () => {
 
    const [activeStep, setActiveStep] = useState(() => {
        const storedStep = localStorage.getItem('sop-configuration-activeStep');
        return storedStep ? Number(storedStep) : 0;
    });
 
    useEffect(() => {
        localStorage.setItem('sop-configuration-activeStep', activeStep.toString());
    }, [activeStep]);
 
 
    const handleStepChange = (newStep) => {
        setActiveStep(newStep);
    };
 
    const handleBackToPartnerClick = () => {
        setActiveStep(0);
        localStorage.removeItem('sop-configuration-activeStep');
    }
 
    const childItems = [
        {
            key: 1,
            children: ({  handleNavigation }) => (
                <Createloan
                    createLoanData={createLoanData}
                    handleNavigation={handleNavigation}
                />
            )
        },
        {
            key: 2,
            children: ({ handleNavigation }) => (
                <Updateloan
                    updateLoanData={updateLoanData}
                    handleNavigation={handleNavigation}
                />
            )
        },
        {
            key: 3,
            children: ({ handleNavigation }) => (
                <Agrementsigned
                    AgreementData={AgreementData}
                    handleNavigation={handleNavigation}
                />
            )
        },
        {
            key: 4,
            children: ({ handleNavigation }) => (
                <PostDispDocument
                    AgreementData={AgreementData}
                    handleNavigation={handleNavigation}
                />
            )
        }
    ];
 
    return (
        <div className="sop-configuration">
            <LeftMenu activeStep={activeStep} onBackToPartnerClick={handleBackToPartnerClick} />
            <WizardComponent
                childItems={childItems}
                activeStep={activeStep}
                onStepChange={handleStepChange}
                stepper="sopConfiguration"
            />
        </div>
    );
}
 
export default SopComponent;