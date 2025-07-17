import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

const WizardComponent = React.memo(({ childItems, activeStep, onStepChange, validated, setValidated, stepper }) => {
    // const [validated, setValidated] = useState(false);
    const location = useLocation();
    console.log(activeStep, "activeStep-wizard")
    const handleNavigation = (direction) => {
        if (direction === 'next' && activeStep < childItems.length - 1) {
            onStepChange(activeStep + 1);
        } else if (direction === 'prev' && activeStep > 0) {
            onStepChange(activeStep - 1);
        }
    }

    const handleSubmit = (event, id) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(prev => (
            {
                ...prev,
                [activeStep]: true
            }))
        // setValidated(true);
        handleNavigation(id);
    }

    useEffect(() => {
        if (location && location.state && location.state.id) {
            onStepChange(location.state.id - 1);
        }
    }, [location]);

    const currentStep = childItems[activeStep];

    return (
        <div className="wizard">
            {
                currentStep.children(
                    {
                        validated : stepper === "productSchema" ? validated : undefined,
                        handleSubmit: stepper === "productSchema" ? handleSubmit : undefined,
                        handleNavigation: stepper === ("productSchema" || "sopConfiguration") ? handleNavigation : undefined
                    }
                )
            }
        </div>
    );
});

export default WizardComponent;