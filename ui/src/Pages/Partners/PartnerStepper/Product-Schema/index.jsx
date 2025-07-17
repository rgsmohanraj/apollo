import React, { useState, useEffect } from "react";
import { ProductDetails, EmiConfiguration, Settings, Terms, Disbursements, ServicerFeeInterest, Collections } from "./export.js";
import { productStepperFields } from "../../../../Config/productFormsConfig.js";
import WizardComponent from "../../../../Components/Common/Wizard";
import LeftMenu from "../../../../Components/Common/LeftMenu";

const ProductSchemaComponent = () => {
    const [validated, setValidated] = useState({});
    const [productFormObj, setProductFormObj] = useState(productStepperFields);
    const [activeStep, setActiveStep] = useState(() => {
        const storedStep = localStorage.getItem('product-schema-activeStep');
        return storedStep ? Number(storedStep) : 0;
    });

    useEffect(() => {
        localStorage.setItem('product-schema-activeStep', activeStep.toString());
    }, [activeStep]);


    const handleStepChange = (newStep) => {
        setActiveStep(newStep);
    };

    const handleBackToPartnerClick = () => {
        setActiveStep(0);
        localStorage.removeItem('product-schema-activeStep');
    }

    const childItems = [
        {
            key: 1,
            children: ({ validated, handleSubmit }) => (
                <ProductDetails
                    formObj={productFormObj[0].productdetails}
                    setProductFormObj={setProductFormObj}
                    validated={Object.keys(validated).length > 0 ? validated[0] : null}
                    handleSubmit={handleSubmit}
                />
            )
        },
        {
            key: 2,
            children: ({ validated, handleSubmit }) => (
                <EmiConfiguration
                    formObj={productFormObj[0].emiconfiguration}
                    setProductFormObj={setProductFormObj}
                    validated={Object.keys(validated).length > 0 ? validated[1] : null}
                    handleSubmit={handleSubmit}
                />
            )
        },
        {
            key: 3,
            children: ({ validated, handleSubmit }) => (
                <Terms
                    formObj={productFormObj[0].terms}
                    setProductFormObj={setProductFormObj}
                    validated={Object.keys(validated).length > 0 ? validated[2] : null}
                    handleSubmit={handleSubmit}
                />
            )
        },
        {
            key: 4,
            children: ({ validated, handleSubmit }) => (
                <Settings
                    formObj={productFormObj[0].settings}
                    setProductFormObj={setProductFormObj}
                    validated={Object.keys(validated).length > 0 ? validated[3] : null}
                    handleSubmit={handleSubmit}
                />
            )
        }, {
            key: 5,
            children: ({ validated, handleSubmit }) => (
                <Disbursements
                    formObj={productFormObj[0].disbursements}
                    setProductFormObj={setProductFormObj}
                    validated={Object.keys(validated).length > 0 ? validated[4] : null}
                    handleSubmit={handleSubmit}
                />
            )
        }, {
            key: 6,
            children: ({ validated, handleSubmit }) => (
                <Collections
                    formObj={productFormObj[0].collections}
                    setProductFormObj={setProductFormObj}
                    validated={Object.keys(validated).length > 0 ? validated[5] : null}
                    handleSubmit={handleSubmit}
                />
            )
        }, {
            key: 7,
            children: ({ validated, handleSubmit }) => (
                <ServicerFeeInterest
                    formObj={productFormObj[0].servicerfee}
                    setProductFormObj={setProductFormObj}
                    validated={Object.keys(validated).length > 0 ? validated[6] : null}
                    handleSubmit={handleSubmit}
                />
            )
        }
    ];

    return (
        <div className="product-schema">
            <LeftMenu activeStep={activeStep} validated={validated} onBackToPartnerClick={handleBackToPartnerClick} />
            <WizardComponent childItems={childItems}
                activeStep={activeStep}
                onStepChange={handleStepChange}
                validated={validated}
                setValidated={setValidated}
                stepper="productSchema"
            />
        </div>
    );
}

export default ProductSchemaComponent;