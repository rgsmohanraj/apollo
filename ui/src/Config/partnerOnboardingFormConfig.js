export const PartnerOnboardingFormConfig = {
    "basic" : [
        {
            type: "text",
            key: "partnerName",
            label: "Partner Name",
            name: "partnerName",
            placeholder: "Enter Partner Name",
            required: true,
            errorMsg: "Please Enter Partner Name"
        },
        {
            type: "date",
            key: "partnerCompanyRegDate",
            label: "Partner Company Reg. Date",
            name: "partnerCompanyRegDate",
            placeholder: "Select Date",
            required: false,
            errorMsg: "Please Enter Start Date"
        },
        {
            type: "select",
            key: "source",
            label: "Source",
            name: "source",
            placeholder: "Source",
            required: false,
            errorMsg: "Please Select Source",
            initialValues: "",
            options: [
                {
                    label: "VCPL Self",
                    value: "vcplSelf"
                },
                {
                    label: "Yubi",
                    value: "yubi"
                },
                {
                    label: "Others",
                    value: "others"
                },
                {
                    label: "Existing Client",
                    value: "existingClient"
                }
            ]
        },
        {
            type: "text",
            key: "panNumber",
            label: "PAN Number",
            name: "panNumber",
            placeholder: "Enter PAN Number",
            required: false,
            errorMsg: "Please Enter PAN Number"
        },
        {
            type: "text",
            key: "cinNumber",
            label: "CIN Number",
            name: "cinNumber",
            placeholder: "Enter CIN Number",
            required: false,
            errorMsg: "Please Enter CIN Number"
        },
        {
            type: "text",
            key: "address1",
            label: "Address 1",
            name: "address1",
            placeholder: "Enter Address 1",
            required: false,
            errorMsg: "Please Enter Address 1"
        },
        {
            type: "text",
            key: "address2",
            label: "Address 2",
            name: "address2",
            placeholder: "Enter Address 2",
            required: false,
            errorMsg: "Please Enter Address 2"
        },
        {
            type: "select",
            key: "state",
            label: "State",
            name: "state",
            placeholder: "Select State",
            required: false,
            errorMsg: "Please Select State",
            initialValues: "",
            options: [
                {
                    label: "Tamil Nadu",
                    value: "tamilNadu"
                },
                {
                    label: "Mumbai",
                    value: "mumbai"
                }
            ]
        },
        {
            type: "select",
            key: "city",
            label: "City",
            name: "city",
            placeholder: "Select city",
            required: false,
            errorMsg: "Please Select City",
            initialValues: "",
            options: [
                {
                    label: "Chennai",
                    value: "chennai"
                },
                {
                    label: "Erode",
                    value: "erode"
                }
            ]
        },
        {
            type: "text",
            key: "pincode",
            label: "Pincode",
            name: "pincode",
            placeholder: "Enter Pincode",
            required: false,
            errorMsg: "Please Enter Pincode"
        },
        {
            type: "select",
            key: "country",
            label: "Country",
            name: "country",
            placeholder: "Select Country",
            required: false,
            errorMsg: "Please Select Country",
            initialValues: "",
            options: [
                {
                    label: "India",
                    value: "india"
                }
            ]
        },
        {
            type: "select",
            key: "constitution",
            label: "Constitution",
            name: "constitution",
            placeholder: "Select Constitution",
            required: false,
            errorMsg: "Please Select Constitution",
            initialValues: "",
            options: [
                {
                    label: "Private Limited Company",
                    value: "privateLimitedCompany"
                },
                {
                    label: "Public Company",
                    value: "publicCompany"
                },
                {
                    label: "Sole Proprietorship",
                    value: "soleProprietorship"
                },
                {
                    label: "One Person Company",
                    value: "onePersonCompany"
                },
                {
                    label: "Partnership",
                    value: "partnership"
                },
                {
                    label: "Limited Liability Partnership (LLP)",
                    value: "limitedLiabilityPartnership"
                }
            ]
        },
        {
            type: "text",
            key: "keyPerson",
            label: "Key Person",
            name: "keyPerson",
            placeholder: "Enter Key Person",
            required: true,
            errorMsg: "Please Enter Key Person"
        },
        {
            type: "select",
            key: "industry",
            label: "Industry",
            name: "industry",
            placeholder: "Select Industry",
            required: false,
            errorMsg: "Please Select Industry",
            initialValues: "",
            options: [
                {
                    label: "Private Limited Company",
                    value: "privateLimitedCompany"
                }
            ]
        },
        {
            type: "select",
            key: "sector",
            label: "Sector",
            name: "sector",
            placeholder: "Select Sector",
            required: false,
            errorMsg: "Please Select Sector",
            initialValues: "",
            options: [
                {
                    label: "Private Limited Company",
                    value: "privateLimitedCompany"
                }
            ]
        },
        {
            type: "select",
            key: "subSector",
            label: "Sub-Sector",
            name: "subSector",
            placeholder: "Select Sub-Sector",
            required: false,
            errorMsg: "Please Select Sub-Sector",
            initialValues: "",
            options: [
                {
                    label: "Private Limited Company",
                    value: "privateLimitedCompany"
                }
            ]
        },
        {
            type: "text",
            key: "gstNumber",
            label: "GST Number",
            name: "gstNumber",
            placeholder: "Enter GST Number",
            required: false,
            errorMsg: "Please Enter GST Number"
        },
        {
            type: "select",
            key: "gstRegistration",
            label: "GST Registration",
            name: "gstRegistration",
            placeholder: "Select GST Registration",
            required: false,
            errorMsg: "Please Select GST Registration",
            initialValues: "",
            options: [
                {
                    label: "Normal Taxpayer",
                    value: "normalTaxpayer"
                },
                {
                    label: "Composition",
                    value: "composition"
                },
                {
                    label: "Casual Taxable Person",
                    value: "casualTaxablePerson"
                },
                {
                    label: "Input Service Distributor (ISD)",
                    value: "inputServiceDistributor"
                },
                {
                    label: "Non-Resident Taxable Person",
                    value: "nonResidentTaxablePerson"
                },
                {
                    label: "Non-Resident Online Service Distributor",
                    value: "nonResidentOnlineServiceDistributor"
                },
                {
                    label: "Embassy",
                    value: "embassy"
                },
                {
                    label: "UN Body",
                    value: "unBody"
                },
                {
                    label: "Other Notified Persons",
                    value: "otherNotifiedPersons"
                },
                {
                    label: "Special Economic Zone (SEZ) Developer or Unit",
                    value: "specialEconomicZoneDeveloperOrUnit"
                },
                {
                    label: "Tax Deductor at Source (TDS)",
                    value: "taxDeductorAtSource"
                },
                {
                    label: "Tax Collector at Source (TCS)",
                    value: "taxCollectorAtSource"
                }
            ]
        },
    ],
    "partnerDetails" : [
        {
            type: "select",
            key: "partnerType",
            label: "Partner Type",
            name: "partnerType",
            placeholder: "Select Partner Type",
            required: false,
            errorMsg: "Please Select Partner Type",
            initialValues: "",
            options: [
                {
                    label: "Digital Lending",
                    value: "digitalLending"
                },
                {
                    label: "NBFC",
                    value: "nbfc"
                }
            ]
        },
        {
            type: "text",
            key: "modalLimit",
            label: "Modal Limit",
            name: "modalLimit",
            placeholder: "Enter Modal Limit",
            required: false,
            errorMsg: "Please Enter Modal Limit"
        },
        {
            type: "text",
            key: "approvedLimit",
            label: "Approved Limit",
            name: "approvedLimit",
            placeholder: "Enter Approved Limit",
            required: true,
            errorMsg: "Please Enter Approved Limit"
        },
        {
            type: "text",
            key: "pilotLimit",
            label: "Pilot Limit",
            name: "pilotLimit",
            placeholder: "Enter Pilot Limit",
            required: true,
            errorMsg: "Please Enter Pilot Limit"
        },
        {
            type: "text",
            key: "partnerFloatLimit",
            label: "Partner Float Limit",
            name: "partnerFloatLimit",
            placeholder: "Enter Partner Float Limit",
            required: true,
            errorMsg: "Please Enter Partner Float Limit"
        },
        {
            type: "text",
            key: "balanceLimit",
            label: "Balance Limit",
            name: "balanceLimit",
            placeholder: "Enter Balance Limit",
            required: true,
            errorMsg: "Please Enter Balance Limit"
        },
        {
            type: "date",
            key: "agreementStartDate",
            label: "Agreement Start Date",
            name: "agreementStartDate",
            placeholder: "Select Date",
            required: false,
            errorMsg: "Please Enter Agreement Start Date"
        },
        {
            type: "date",
            key: "agreementExpiryDate",
            label: "Agreement Expiry Date",
            name: "agreementExpiryDate",
            placeholder: "Select Date",
            required: false,
            errorMsg: "Please Enter Agreement Expiry Date"
        },
        {
            type: "select",
            key: "underlyingAsset",
            label: "Underlying Assets",
            name: "underlyingAsset",
            placeholder: "Select Underlying Assets",
            required: false,
            errorMsg: "Please Select Underlying Assets",
            initialValues: "",
            options: [
                {
                    label: "Secured",
                    value: "secured"
                },
                {
                    label: "Unsecured",
                    value: "unsecured"
                }
            ]
        },
        {
            type: "select",
            key: "security",
            label: "Security",
            name: "security",
            placeholder: "Select Security",
            required: false,
            errorMsg: "Please Select Security",
            initialValues: "",
            options: [
                {
                    label: "Fully Secured",
                    value: "fullySecured"
                },
                {
                    label: "Limited FLDG",
                    value: "limitedFLDG"
                },
                {
                    label: "No FLDG",
                    value: "noFLDG"
                }
            ]
        },
        {
            type: "select",
            key: "fldgCalculationOn",
            label: "FLDG Calculation On",
            name: "fldgCalculationOn",
            placeholder: "Select FLDG Calculation On",
            required: false,
            errorMsg: "Please Select FLDG Calculation On",
            initialValues: "",
            options: [
                {
                    label: "Disbursement",
                    value: "disbursement"
                },
                {
                    label: "POS",
                    value: "pos"
                }
            ]
        },
    ],
    "beneficiaryDetails" : [
        {
            type: "text",
            key: "beneficiaryName",
            label: "Beneficiary Name",
            name: "beneficiaryName",
            placeholder: "Enter Beneficiary Name",
            required: false,
            errorMsg: "Please Enter Beneficiary Name"
        },
        {
            type: "text",
            key: "beneficiaryAccountNumber",
            label: "Beneficiary Account Number",
            name: "beneficiaryAccountNumber",
            placeholder: "Enter Beneficiary Account Number",
            required: false,
            errorMsg: "Please Enter Beneficiary Account Number"
        },
        {
            type: "text",
            key: "ifscCode",
            label: "IFSC Code",
            name: "ifscCode",
            placeholder: "Enter IFSC Code",
            required: false,
            errorMsg: "Please Enter IFSC Code"
        },
        {
            type: "text",
            key: "micrCode",
            label: "MICR Code",
            name: "micrCode",
            placeholder: "Enter MICR Code",
            required: false,
            errorMsg: "Please Enter MICR Code"
        },
        {
            type: "text",
            key: "swiftCode",
            label: "Swift Code",
            name: "swiftCode",
            placeholder: "Enter Swift Code",
            required: false,
            errorMsg: "Please Enter Swift Code"
        },
        {
            type: "text",
            key: "branch",
            label: "Branch",
            name: "branch",
            placeholder: "Enter Branch",
            required: false,
            errorMsg: "Please Enter Branch"
        },
    ]
};