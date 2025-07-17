import React from 'react'
import { Col, Row } from "react-bootstrap";
import { ProductDetailsFields,EmiConfigurationFields,TermsFields,
    SettingsFields,DisbursementsFields,CollectionsFields,ServicerFeeFields,
 } from "../../Partners/PartnerStepper/Product-Schema/stepper-fields"

export const ProductSchemaView = () => {
    const ProductDetailsvalues = [
        {
            value: "text1",
            key: "1",
        },
        {
            value: "text2",
            key: "2",
        },
        {
            value: "text3",
            key: "3",
        },
        {
            value: "text4",
            key: "4",
        },
        {
            value: "text5",
            key: "5",
        },
        {
            value: "text6",
            key: "6",
        },
        {
            value: "text7",
            key: "7",
        },
        {
            value: "text8",
            key: "8",
        },
    ]

    const EmiConfigurationvalues = [
        {
            value: "text1",
            key: "2",
        },
        {
            value: "text2",
            key: "3",
        },
        {
            value: "text3",
            key: "4",
        },
        {
            value: "text4",
            key: "5",
        },
        {
            value: "text5",
            key: "6",
        },
        {
            value: "text6",
            key: "7",
        },
        {
            value: "text7",
            key: "8",
        },
        {
            value: "text8",
            key: "9",
        },
        {
            value: "text8",
            key: "10",
        },
        {
            value: "text8",
            key: "11",
        },
    ]

    const Termsvalues = [
        {
            value: "text1",
            key: "1",
        },
        {
            value: "text2",
            key: "2",
        },
        {
            value: "text3",
            key: "3",
        },
        {
            value: "text4",
            key: "4",
        },
        {
            value: "text5",
            key: "5",
        },
        {
            value: "text6",
            key: "6",
        },
        {
            value: "text7",
            key: "7",
        },
        {
            value: "text8",
            key: "8",
        },
        {
            value: "text1",
            key: "9",
        },
        {
            value: "text2",
            key: "10",
        },
        {
            value: "text3",
            key: "11",
        },
        {
            value: "text4",
            key: "12",
        },
        {
            value: "text5",
            key: "13",
        },
        {
            value: "text6",
            key: "14",
        },
        {
            value: "text7",
            key: "15",
        },
        {
            value: "text8",
            key: "16",
        },
        {
            value: "text1",
            key: "17",
        },
        {
            value: "text2",
            key: "18",
        },
        {
            value: "text3",
            key: "19",
        },
    ]

    const Settingsvalues = [
        {
            value: "text1",
            key: "1",
        },
        {
            value: "text2",
            key: "2",
        },
        {
            value: "text3",
            key: "3",
        },
        {
            value: "text4",
            key: "4",
        },
        {
            value: "text5",
            key: "5",
        },
        {
            value: "text6",
            key: "6",
        },
        {
            value: "text7",
            key: "7",
        },
        {
            value: "text8",
            key: "8",
        },
        {
            value: "text1",
            key: "9",
        },
        {
            value: "text2",
            key: "10",
        },
        {
            value: "text3",
            key: "11",
        },
        {
            value: "text4",
            key: "12",
        },
        {
            value: "text5",
            key: "13",
        },
        {
            value: "text6",
            key: "14",
        },
        {
            value: "text7",
            key: "15",
        },
        {
            value: "text8",
            key: "16",
        },
        {
            value: "text1",
            key: "17",
        },
        {
            value: "text2",
            key: "18",
        },
        {
            value: "text3",
            key: "19",
        },
        {
            value: "text2",
            key: "20",
        },
        {
            value: "text3",
            key: "21",
        },
    ]

    const Disbursementsvalues = [
        {
            value: "text1",
            key: "1",
        },
        {
            value: "text2",
            key: "2",
        },
        {
            value: "text3",
            key: "3",
        },
        {
            value: "text4",
            key: "4",
        },
        {
            value: "text5",
            key: "5",
        },
        {
            value: "text6",
            key: "6",
        },
        {
            value: "text7",
            key: "7",
        },
        {
            value: "text8",
            key: "8",
        },
        {
            value: "text1",
            key: "9",
        },
        {
            value: "text2",
            key: "10",
        },
        {
            value: "text3",
            key: "11",
        },
        {
            value: "text4",
            key: "12",
        },
        {
            value: "text5",
            key: "13",
        },
        {
            value: "text6",
            key: "14",
        },
        {
            value: "text7",
            key: "15",
        },
        {
            value: "text8",
            key: "16",
        },
    ]

    const Collectionsvalues = [
        {
            value: "text1",
            key: "1",
        },
        {
            value: "text2",
            key: "2",
        },
        {
            value: "text3",
            key: "3",
        },
        {
            value: "text4",
            key: "4",
        },
        {
            value: "text5",
            key: "5",
        },
        {
            value: "text6",
            key: "6",
        },
        {
            value: "text7",
            key: "7",
        },
        {
            value: "text8",
            key: "8",
        },
        {
            value: "text1",
            key: "9",
        },
        {
            value: "text2",
            key: "10",
        },
        {
            value: "text3",
            key: "11",
        },
        {
            value: "text4",
            key: "12",
        },
        {
            value: "text5",
            key: "13",
        },
        {
            value: "text6",
            key: "14",
        },
        {
            value: "text7",
            key: "15",
        },
        {
            value: "text8",
            key: "16",
        },
        {
            value: "text1",
            key: "17",
        },
        {
            value: "text2",
            key: "18",
        },
        {
            value: "text3",
            key: "19",
        },
        {
            value: "text2",
            key: "20",
        },
        {
            value: "text3",
            key: "21",
        },
        {
            value: "text4",
            key: "22",
        },
        {
            value: "text5",
            key: "23",
        },
        {
            value: "text6",
            key: "24",
        },
        {
            value: "text7",
            key: "25",
        },
        {
            value: "text8",
            key: "26",
        },
        {
            value: "text1",
            key: "27",
        },
        {
            value: "text2",
            key: "28",
        },
        {
            value: "text3",
            key: "29",
        },
        {
            value: "text2",
            key: "30",
        },
        {
            value: "text3",
            key: "31",
        },
        {
            value: "text3",
            key: "32",
        },
    ]

    const ServicerFeevalues = [
        {
            value: "text1",
            key: "1",
        },
        {
            value: "text2",
            key: "2",
        },
        {
            value: "text3",
            key: "3",
        },
        {
            value: "text4",
            key: "4",
        },
        {
            value: "text5",
            key: "5",
        },
        {
            value: "text6",
            key: "6",
        },
        {
            value: "text7",
            key: "7",
        },
        {
            value: "text8",
            key: "8",
        },
        {
            value: "text1",
            key: "9",
        },
        {
            value: "text2",
            key: "10",
        },
        {
            value: "text3",
            key: "11",
        },
        {
            value: "text4",
            key: "12",
        },
        {
            value: "text5",
            key: "13",
        },
        {
            value: "text6",
            key: "14",
        },
        {
            value: "text7",
            key: "15",
        },
        {
            value: "text8",
            key: "16",
        },
        {
            value: "text1",
            key: "17",
        },
        {
            value: "text2",
            key: "18",
        },
        {
            value: "text3",
            key: "19",
        },
        {
            value: "text2",
            key: "20",
        },
        {
            value: "text3",
            key: "21",
        },
        {
            value: "text4",
            key: "22",
        },
        {
            value: "text5",
            key: "23",
        },
        {
            value: "text6",
            key: "24",
        },
        {
            value: "text7",
            key: "25",
        },
        {
            value: "text8",
            key: "26",
        },
    ]
    return (
        <>
            <div>
                <div className="heading bg-heading d-flex align-items-center fs-14 fw-600  ff-poppins color-blue ps-2">Details</div>
                <Row className="pa-16 mb-8px">
                    {
                        ProductDetailsFields.map(field => {
                            const labelProductDetails = ProductDetailsvalues.find(valueObj => field.key === valueObj.key)
                            return (
                                field.type!=="line" && field.type!=="heading" &&
                                    <>                                    
                                <Col lg={3} className='mb-4' key={field.key}>
                                    <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">{field.label}</p>
                                    <p className="fs-14 fw-500 color-character lh-18 ff-inter mb-0">{labelProductDetails.value}</p>                                                                        
                                </Col>
                                </>
                            )
                        })
                    }
                </Row>
            </div>
            <div>
                <div className="heading bg-heading d-flex align-items-center fs-14 fw-600  ff-poppins color-blue ps-2">Currency</div>
                <Row className="pa-16 mb-8px">
                    {
                        EmiConfigurationFields.map(field => {
                            const labelEmiConfiguration = EmiConfigurationvalues.find(valueObj => field.key === valueObj.key)
                            return (
                                field.type!=="line" && field.type!=="heading" &&
                                    <>                                    
                                <Col lg={3} className='mb-4' key={field.key}>
                                    <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">{field.label}</p>
                                    <p className="fs-14 fw-500 color-character lh-18 ff-inter mb-0">{labelEmiConfiguration!== undefined && labelEmiConfiguration.value}</p>
                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>
            </div>
            <div>
                <div className="heading bg-heading d-flex align-items-center fs-14 fw-600  ff-poppins color-blue ps-2">Terms</div>
                <Row className="pa-16 mb-8px">
                    {
                        TermsFields.map(field => {
                            const labelTerms = Termsvalues.find(valueObj => field.key === valueObj.key)
                            return (
                                field.type!=="line" && field.type!=="heading" &&
                                <>                                    
                            <Col lg={3} className='mb-4' key={field.key}>
                                <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">{field.label}</p>
                                    <p className="fs-14 fw-500 color-character lh-18 ff-inter mb-0">{labelTerms!== undefined && labelTerms.value}</p>
                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>
            </div>
            <div>
                <div className="heading bg-heading d-flex align-items-center fs-14 fw-600  ff-poppins color-blue ps-2">Settings</div>
                <Row className="pa-16 mb-8px">
                    {
                        SettingsFields.map(field => {
                            const labelSettings = Settingsvalues.find(valueObj => field.key === valueObj.key)
                            return (
                                field.type!=="line" && field.type!=="heading" &&
                                <>                                    
                            <Col lg={3} className='mb-4' key={field.key}>
                                    <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">{field.label}</p>
                                    <p className="fs-14 fw-500 color-character lh-18 ff-inter mb-0">{labelSettings!== undefined && labelSettings.value}</p>
                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>
            </div>
            <div>
                <div className="heading bg-heading d-flex align-items-center fs-14 fw-600  ff-poppins color-blue ps-2">Fees and Charges</div>
                <Row className="pa-16 mb-8px">
                    {
                        DisbursementsFields.map(field => {
                            const labelDisbursements = Disbursementsvalues.find(valueObj => field.key === valueObj.key)
                            return (
                                field.type!=="line" && field.type!=="heading" &&
                                    <>                                    
                                <Col lg={3} className='mb-4' key={field.key}>
                                    <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">{field.label}</p>
                                    <p className="fs-14 fw-500 color-character lh-18 ff-inter mb-0">{labelDisbursements!== undefined && labelDisbursements.value}</p>
                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>
            </div>
            <div>
                <div className="heading bg-heading d-flex align-items-center fs-14 fw-600  ff-poppins color-blue ps-2">Disbursements</div>
                <Row className="pa-16 mb-8px">
                    {
                        CollectionsFields.map(field => {
                            const labelCollections = Collectionsvalues.find(valueObj => field.key === valueObj.key)
                            return (
                                field.type!=="line" && field.type!=="heading" &&
                                    <>                                    
                                <Col lg={3} className='mb-4' key={field.key}>
                                    <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">{field.label}</p>
                                    <p className="fs-14 fw-500 color-character lh-18 ff-inter mb-0">{labelCollections!== undefined && labelCollections.value}</p>                                   
                                </Col>
                                </>
                            )
                        })
                    }
                </Row>
            </div>
            <div>
                <div className="heading bg-heading d-flex align-items-center fs-14 fw-600  ff-poppins color-blue ps-2">Collections</div>
                <Row className="pa-16 mb-8px">
                    {
                        ServicerFeeFields.map(field => {
                            const labelServicerFee = ServicerFeevalues.find(valueObj => field.key === valueObj.key)
                            return (
                                field.type!=="line" && field.type!=="heading" &&
                                    <>                                    
                                <Col lg={3} className='mb-4' key={field.key}>
                                    <p className="fs-12 fw-500 color-lable-text lh-16 ff-inter pb-8px m-0">{field.label}</p>
                                    <p className="fs-14 fw-500 color-character lh-18 ff-inter mb-0">{labelServicerFee!== undefined && labelServicerFee.value}</p>
                                </Col>
                                </>
                                
                            )
                        })
                    }
                </Row>
            </div>            
        </>
    )
}
