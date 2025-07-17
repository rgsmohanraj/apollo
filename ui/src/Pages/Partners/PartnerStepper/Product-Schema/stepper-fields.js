export const ProductDetailsFields = [
    {
        type: "text",
        key: "1",
        label: "Product Name",
        name: "productname",
        placeholder: "Enter Product Name",
        required: true,
        value: "",
        minLength: 3,
        maxLength: 50,
        errorMsg: "Please Enter Product Name"
    },
    {
        type: "text",
        key: "2",
        label: "Short Name",
        name: "shortName",
        placeholder: "Enter Short Name",
        required: true,
        value: "",
        minLength: 3,
        maxLength: 10,
        pattern: /^[a-zA-Z0-9]*$/,
        errorMsg: "Please Enter Short Name"
    },
    {
        type: "text",
        key: "3",
        label: "Loan Account Number Preference",
        name: "loanAccNoPreference",
        placeholder: "Enter Loan Account Number Preference",
        required: true,
        value: "",
        minLength: 7,
        maxLength: 12,
        errorMsg: "Please Enter Loan Account Number Preference"
    },
    // {
    //     type: "select",
    //     key: "4",
    //     label: "Loan Product Class",
    //     name: "loan product class",
    //     placeholder: "Enter Loan Product Class",
    //     required: false,
    //     errorMsg: "Please Enter Loan Product Class",
    //     initialValues: "",
    //     options: [
    //         {
    //             label: "mode1",
    //             value: "1"
    //         }, {
    //             label: "mode2",
    //             value: "2"
    //         }, {
    //             label: "mode3",
    //             value: "3"
    //         },
    //     ]
    // },
    // {
    //     type: "select",
    //     key: "5",
    //     label: "Loan Product Type",
    //     name: "loan product type",
    //     placeholder: "Enter Loan Product Type",
    //     required: false,
    //     errorMsg: "Please Enter Loan Product Type",
    //     initialValues: "",
    //     options: [
    //         {
    //             label: "mode1",
    //             value: "1"
    //         }, {
    //             label: "mode2",
    //             value: "2"
    //         }, {
    //             label: "mode3",
    //             value: "3"
    //         },
    //     ]
    // },
    {
        type: "select",
        key: "4",
        label: "Asset Class",
        name: "assetClass",
        placeholder: "Enter Asset Class",
        required: true,
        selectedValue: "",
        errorMsg: "Please Enter Asset Class",
        options: [
            { value: "1", label: "BNPL - Expenses" },
            { value: "2", label: "BNPL - Asset Purchase" },
            { value: "3", label: "PL - ST" },
            { value: "4", label: "MFI" },
            { value: "5", label: "Education" },
            { value: "6", label: "Pledge" },
            { value: "7", label: "Gold - Savings" },
            { value: "8", label: "Property-Buy" },
            { value: "9", label: "Property-Renovate" },
            { value: "10", label: "Property-LAP" },
            { value: "11", label: "Two Wheeler - New" },
            { value: "12", label: "Two Wheeler - Old" },
            { value: "13", label: "Four Wheeler - New" },
            { value: "14", label: "Four Wheeler - Old" },
            { value: "15", label: "Commercial vehicle - New" },
            { value: "16", label: "Commercial vehicle - Used" },
            { value: "17", label: "Leasing - Furniture" },
            { value: "18", label: "Leasing - Equipment" },
            { value: "19", label: "Leasing - Product" },
            { value: "20", label: "Leasing - CV" },
            { value: "21", label: "CEQ - excavators" },
            { value: "22", label: "CEQ - Bulldozers" },
            { value: "23", label: "Car" },
            { value: "24", label: "Machinery" },
            { value: "25", label: "Gold" },
            { value: "26", label: "LRD - Lease rental discounting" },
            { value: "27", label: "Stock" },
            { value: "28", label: "Cash + FD + Mutual Funds" },
            { value: "29", label: "Unsecured MSME" }
        ]
    },
    {
        type: "date",
        key: "5",
        label: "Start Date",
        name: "startDate",
        placeholder: "Enter Start Date",
        required: true,
        value: "",
        errorMsg: "Please Enter Start Date"
    },
    {
        type: "date",
        key: "6",
        label: "Renewal Date",
        name: "renewalDate",
        placeholder: "Enter Renewal Date",
        required: true,
        value: "",
        errorMsg: "Please Enter Renewal Date"
    },
    {
        type: "number",
        key: "7",
        label: "Limit",
        name: "limit",
        placeholder: "Enter Limit",
        required: true,
        value: "",
        pattern: /^[a-zA-Z0-9]*$/,
        fieldType: "amount",
        errorMsg: "Please Enter Limit"
    }
];

export const EmiConfigurationFields = [
    // {
    //     type: "number",
    //     key: "1",
    //     label: "Currency",
    //     name: "currency",
    //     placeholder: "Enter Currency",
    //     required: true,
    //     errorMsg: "Please Enter Currency",
    //     initialValues: "INR",
    // },
    // {
    //     type: "line"
    // },
    {
        type: "heading",
        label: "EMI Calculation",
    },
    {
        type: "select",
        key: "2",
        label: "EMI Calculation Logic",
        name: "pmtFormulaCalculation",
        placeholder: "Enter EMI Calculation Logic",
        required: true,
        errorMsg: "Please Enter EMI Calculation Logic",
        selectedValue: "",
        options: [
            {
                value: "1",
                label: "PMT WITH MONTHLY INTEREST RATE",
            }, {
                value: "2",
                label: "PMT WITH YEARLY INTEREST RATE",
            }
        ]

    },
    {
        type: "select",
        key: "3",
        label: "EMI Calculation Days in year",
        name: "pmtDaysInYearType",
        placeholder: "Enter EMI Calculation Days in year",
        required: false,
        errorMsg: "Please Enter EMI Calculation Days in year",
        selectedValue: "",
        options: [
            {
                value: "1",
                label: "360 Days",
            }, {
                value: "2",
                label: "365 Days",
            }
        ]

    },
    {
        type: "select",
        key: "4",
        label: "EMI Calculation Days in month",
        name: "pmtDaysInMonthType",
        placeholder: "Enter EMI Calculation Days in month",
        required: false,
        errorMsg: "Please Enter EMI Calculation Days in month",
        selectedValue: "",
        options: [
            {
                value: "1",
                label: "30 Days",
            }, {
                value: "2",
                label: "31 Days",
            }
        ]

    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "EMI Rounding Configuration"
    },
    {
        type: "select",
        key: "5",
        label: "EMI Rounding Mode",
        name: "emiRoundingMode",
        placeholder: "Enter EMI Rounding Mode",
        required: true,
        errorMsg: "Please Enter EMI Rounding Mode",
        selectedValue: "",
        options: [
            {
                value: "1",
                label: "UP",
            }, {
                value: "2",
                label: "Half Up",
            }, {
                value: "3",
                label: "Down",
            },
        ]
    },
    {
        type: "number",
        key: "6",
        label: "EMI Decimal Regex",
        name: "emiDecimalRegex",
        placeholder: "Enter EMI Decmial Regex",
        required: false,
        value: "",
        minLength: 1,
        maxLength: 6,
        pattern: /^[0-9]*$/,
        errorMsg: "Please Enter EMI Decimal Regex",
    },
    {
        type: "number",
        key: "7",
        label: "EMI Decimal Values",
        name: "digitsAfterDecimal",
        placeholder: "Enter EMI Decimal Values",
        required: true,
        value: "",
        minLength: 1,
        maxLength: 6,
        pattern: /^[0-9]*$/,
        errorMsg: "Please Enter EMI Decimal Values",
        selectedValue: ""
    },
    {
        type: "select",
        key: "8",
        label: "EMI in Multiples of",
        name: "emimultiples",
        placeholder: "Enter EMI in Multiples of",
        required: true,
        errorMsg: "Please Enter EMI in Multiples of",
        selectedValue: "",
        options: [
            {
                value: "1",
                label: "1",
            }, {
                value: "2",
                label: "10",
            }, {
                value: "3",
                label: "100",
            },
        ]
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Interest Rounding Configuration"
    },
    {
        type: "select",
        key: "9",
        label: "Interest Rounding Mode",
        name: "interestRoundingMode",
        placeholder: "Enter Interest Rounding Mode",
        required: true,
        errorMsg: "Please Enter Interest Rounding Mode",
        selectedValue: "",
        options: [
            {
                value: "1",
                label: "UP",
            }, {
                value: "2",
                label: "HALF_UP",
            }, {
                value: "3",
                label: "DOWN",
            },
        ]
    },
    {
        type: "number",
        key: "10",
        label: "Interest Decimal Regex",
        name: "interest decimal regex",
        placeholder: "Enter Interest Decmial Regex",
        required: false,
        value: "",
        minLength: 1,
        maxLength: 6,
        pattern: /^[0-9]*$/,
        errorMsg: "Please Enter Interest Decimal Regex",
    },
    {
        type: "select",
        key: "11",
        label: "Interest Decimal Values",
        name: "interest decimal values",
        placeholder: "Enter Interest Decimal Values",
        required: true,
        value: "",
        minLength: 1,
        maxLength: 6,
        pattern: /^[0-9]*$/,
        errorMsg: "Please Enter Interest Decimal Values",
        options: [
            {
                label: "mode1",
                value: "1"
            }, {
                label: "mode2",
                value: "2"
            }, {
                label: "mode3",
                value: "3"
            },
        ]
    },
]
export const TermsFields = [
    {
        type: "heading",
        label: "Principal"
    },
    {
        type: "number",
        key: "1",
        label: "Minimum",
        name: "minPrincipal",
        placeholder: "Enter Minimum",
        required: true,
        value: "",
        minLength: 3,
        maxLength: 10,
        pattern: /^[0-9]+(\.[0-9]+)?$/,
        fieldType: "amount",
        errorMsg: "Please Enter Minimum",
    },
    {
        type: "number",
        key: "2",
        label: "Maximum",
        name: "maxPrincipal",
        placeholder: "Enter Maximum",
        required: true,
        value: "",
        minLength: 3,
        maxLength: 10,
        pattern: /^[0-9]+(\.[0-9]+)?$/,
        fieldType: "amount",
        errorMsg: "Please Enter Maximum"
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Number of Repayments"
    },
    {
        type: "number",
        key: "3",
        label: "Minimum",
        name: "minNumberOfRepayments",
        placeholder: "Enter Minimum",
        required: true,
        value: "",
        minLength: 1,
        maxLength: 3,
        pattern: /^[0-9]*$/,
        fieldType: "months",
        errorMsg: "Please Enter Minimum"

    },
    {
        type: "number",
        key: "4",
        label: "Maximum",
        name: "maxNumberOfRepayments",
        placeholder: "Enter Maximum",
        required: true,
        value: "",
        minLength: 1,
        maxLength: 3,
        pattern: /^[0-9]*$/,
        fieldType: "months",
        errorMsg: "Please Enter Maximum"
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Interest Rates"
    },
    {
        type: "number",
        key: "5",
        label: "Minimum",
        name: "minInterestRatePerPeriod",
        placeholder: "Enter Minimum",
        required: false,
        value: "",
        minLength: 1,
        maxLength: 2,
        pattern: /^[0-9]+(\.[0-9]+)?$/,
        fieldType: "percentage",
        errorMsg: "Please Enter Minimum"

    },
    {
        type: "number",
        key: "6",
        label: "Maximum",
        name: "maxInterestRatePerPeriod",
        placeholder: "Enter Maximum",
        required: false,
        value: "",
        minLength: 1,
        maxLength: 2,
        pattern: /^[0-9]+(\.[0-9]+)?$/,
        fieldType: "percentage",
        errorMsg: "Please Enter Maximum"
    },
    {
        type: "select",
        key: "7",
        label: "Frequency",
        name: "interestRateFrequencyType",
        placeholder: "Enter Frequency",
        required: true,
        errorMsg: "Please Enter Frequency",
        selectedValue: "",
        options: [
            {
                value: "1",
                label: "Per month",
            }, {
                value: "2",
                label: "Per year",
            }, {
                value: "3",
                label: "Whole term",
            },
        ]
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Repaid Every"
    },
    {
        type: "number",
        key: "8",
        label: "Frequency",
        name: "repaymentEvery",
        placeholder: "Enter Frequency",
        required: true,
        value: "",
        minLength: 1,
        maxLength: 2,
        pattern: /^[0-9]*$/,
        errorMsg: "Please Enter Frequency"
    },
    {
        type: "select",
        key: "9",
        label: "Type",
        name: "repaymentFrequencyType",
        placeholder: "Enter Type",
        required: true,
        errorMsg: "Please Enter Type",
        selectedValue: "",
        options: [
            {
                value: "1",
                label: "Days",
            }, {
                value: "2",
                label: "Weeks",
            }, {
                value: "3",
                label: "Months",
            },
        ]
    },
    {
        type: "number",
        key: "10",
        label: "Minimum days between disbursal and first repayment date",
        name: "minimumDaysBetweenDisbursalAndFirstRepayment",
        placeholder: "Enter Minimum days between disbursal and first repayment date",
        required: true,
        value: "",
        minLength: 1,
        maxLength: 3,
        pattern: /^[0-9]*$/,
        fieldType: "days",
        errorMsg: "Please Enter Minimum days between disbursal and first repayment date"
    },
    {
        type: "line"
    },
    {
        type: "switch",
        key: "11",
        label: "Select Accepted Dates",
        name: "selectAcceptedDates",
        defaultChecked: false,
        required: false,
        value: "",
        errorMsg: "Please Enter Select Accepted Dates"
    },
    {
        type: "select",
        key: "12",
        label: "Select Date Type",
        name: "acceptedDateType",
        placeholder: "Enter Select Date Type",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Select Date Type",
        options: [
            {
                value: "1",
                label: "Range",
            },
            {
                value: "2",
                label: "Select Date",
            }
        ]
    },
    {
        type: "rangePicker",
        key: "13",
        label: "Select Date",
        name: "selectDate",
        // placeholder: "Enter Start Date",
        required: false,
        selectedValue: "",
        errorMsg: "Please Select Date"
    },

    // {
    //     type: "date",
    //     key: "13",
    //     label: "Start Date",
    //     name: "acceptedStartDate",
    //     placeholder: "Enter Start Date",
    //     required: false,
    //     selectedValue:"",
    //     errorMsg: "Please Enter Start Date"
    // },
    // {
    //     type: "date",
    //     key: "14",
    //     label: "End Date",
    //     name: "acceptedEndDate",
    //     placeholder: "Enter End Date",
    //     required: false,
    //     selectedValue:"",
    //     errorMsg: "Please Enter End Date"
    // },
    {
        type: "date",
        key: "14",
        label: "Date",
        name: "selectDateArr",
        placeholder: "Enter Date",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Date"
    },
    {
        type: "line"
    },
    {
        type: "switch",
        key: "16",
        label: "Apply Prepaid Locking Period",
        name: "applyPrepaidLockingPeriod",
        defaultChecked: true,
        required: false,
        value: "",
        errorMsg: "Please Enter Apply Prepaid Locking Period"
    },
    {
        type: "number",
        key: "17",
        label: "Prepay Locking Period",
        name: "prepayLockingPeriod",
        placeholder: "Enter Prepay Locking Period",
        required: false,
        value: "",
        minLength: 1,
        maxLength: 3,
        pattern: /^[0-9]*$/,
        fieldType: "days",
        errorMsg: "Please Enter Prepay Locking Period"
    },
    {
        type: "line"
    },
    {
        type: "switch",
        key: "18",
        label: "Apply Foreclosure Locking Period",
        name: "applyForeclosureLockingPeriod",
        defaultChecked: true,
        required: false,
        value: "",
        errorMsg: "Please Enter Apply Foreclosure Locking Period"
    },
    {
        type: "number",
        key: "19",
        label: "Foreclosure Locking Period",
        name: "foreclosureLockingPeriod",
        placeholder: "Enter Foreclosure Locking Period",
        required: false,
        value: "",
        minLength: 1,
        maxLength: 3,
        pattern: /^[0-9]*$/,
        fieldType: "days",
        errorMsg: "Please Enter Foreclosure Locking Period"
    },

]
export const SettingsFields = [
    {
        type: "heading",
        label: "Amortization"
    },
    {
        type: "select",
        key: "1",
        label: "Amortization",
        name: "amortizationType",
        placeholder: "Enter Amortization",
        required: true,
        errorMsg: "Please Enter Amortization",
        selectedValue: "",
        options: [
            {
                value: "1",
                label: "Equal Installments",
            },
            {
                value: "2",
                label: "Equal principal payments",
            }
        ]
    },
    {
        type: "select",
        key: "2",
        label: "Interest Method",
        name: "interestType",
        placeholder: "Enter Interest Method",
        required: true,
        errorMsg: "Please Enter Interest Method",
        selectedValue: "",
        options: [
            {
                value: "1",
                label: "Flat",
            },
            {
                value: "2",
                label: "Declining Balance",
            }
        ]
    },
    {
        type: "select",
        key: "3",
        label: "Interest calculation period",
        name: "interestCalculationPeriodType",
        placeholder: "Enter Interest calculation period",
        required: true,
        errorMsg: "Please Enter Interest calculation period",
        selectedValue: "",
        options: [
            {
                value: "1",
                label: "Daily",
            }
        ]
    },
    {
        type: "select",
        key: "4",
        label: "Interest Days in Month",
        name: "daysInMonthType",
        placeholder: "Enter Interest Days in Month",
        required: true,
        errorMsg: "Please Enter Interest Days in Month",
        selectedValue: "",
        options: [
            {
                value: "1",
                label: "Actual",
            },
            {
                value: "2",
                label: "30 Days",
            },
            {
                value: "3",
                label: "31 Days",
            }
        ]
    },
    {
        type: "select",
        key: "5",
        label: "Interest Days in Year",
        name: "daysInYearType",
        placeholder: "Enter Interest Days in year",
        required: true,
        errorMsg: "Please Enter Interest Days in Years",
        selectedValue: "",
        options: [
            {
                value: "1",
                label: "Actual",
            },
            {
                value: "2",
                label: "360 Days",
            },
            {
                value: "3",
                label: "364 Days",
            },
            {
                value: "4",
                label: "365 Days",
            }
        ]
    },
    {
        type: "select",
        key: "6",
        label: "Repayment strategy",
        name: "transactionProcessingStrategyId",
        placeholder: "Enter Repayment strategy",
        required: true,
        errorMsg: "Please Enter Repayment strategy",
        selectedValue: "",
        options: [
            {
                value: "1",
                label: "Horizontal-Principal, Interest, Penalties, Fees Order",
            },
            {
                value: "2",
                label: "Horizontal-Interest, Principal, Penalties, Fees Order",
            },
            {
                value: "3",
                label: "Horizontal-interest, principal order"
            },
            {
                value: "4",
                label: "Vertical-interest, principal order"
            }
        ]
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "FLDG"
    },
    {
        type: "select",
        key: "7",
        label: "FLDG Logic",
        name: "fldgLogic",
        placeholder: "Enter FLDG Logic",
        required: true,
        disabled:true,
        errorMsg: "Please Enter FLDG Logic",
        selectedValue: "",
        options: [
            {
                value: "1",
                label: "Strategy",
            }
        ]
    },
    {
        type: "number",
        key: "8",
        label: "Monitoring Trigger Par 30",
        name: "monitoringTriggerPar30",
        placeholder: "Enter Monitoring Trigger Par 30",
        required: false,	
        value: "",
        minLength:1,
        maxLength:3,
        pattern:/^[0-9]*$/,
        fieldType:"days",
        errorMsg: "Please Enter Monitoring Trigger Par 30"
    },
    {
        type: "number",
        key: "9",
        label: "Monitoring Trigger Par 90",
        name: "monitoringTriggerPar90",
        placeholder: "Enter Monitoring Trigger Par 90",
        required: false,	
        value: "",
        minLength:1,
        maxLength:3,
        pattern:/^[0-9]*$/,
        fieldType:"days",
        errorMsg: "Please Enter Monitoring Trigger Par 90"
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Moratorium"
    },
    {
        type: "number",
        key: "10",
        label: "Grace on principal payment",
        name: "graceOnPrincipalPayment",
        placeholder: "Enter Grace on principal payment",
        required: false,	
        value: "",
        minLength:1,
        maxLength:3,
        pattern:/^[0-9]*$/,
        fieldType:"days",
        errorMsg: "Please Enter Grace on principal payment"
    },
    {
        type: "number",
        key: "11",
        label: "Grace on interest payment",
        name: "graceOnInterestPayment",
        placeholder: "Enter Grace on interest payment",
        required: false,	
        value: "",
        minLength:1,
        maxLength:3,
        pattern:/^[0-9]*$/,
        fieldType:"days",
        errorMsg: "Please Enter Grace on interest payment"
    },
    {
        type: "number",
        key: "12",
        label: "Interest free period",
        name: "interestFreePeriod",
        placeholder: "Enter Interest free period",
        required: false,	
        value: "",
        minLength:1,
        maxLength:3,
        pattern:/^[0-9]*$/,
        fieldType:"days",
        errorMsg: "Please Enter Interest free period"
    },
    {
        type: "number",
        key: "13",
        label: "Arrears tolerance",
        name: "arrearsTolerance",
        placeholder: "Enter Arrears tolerance",
        required: false,	
        value: "",
        minLength:1,
        maxLength:3,
        pattern:/^[0-9]*$/,
        fieldType:"days",
        errorMsg: "Please Enter Arrears tolerance"
    },
    {
        type: "number",
        key: "14",
        label: "On Arrears Ageing",
        name: "OnArrearsAgeing",
        placeholder: "Enter On Arrears Ageing",
        required: false,	
        value: "",
        minLength:1,
        maxLength:3,
        pattern:/^[0-9]*$/,
        fieldType:"days",
        errorMsg: "Please Enter On Arrears Ageing"
    },
    {
        type: "number",
        key: "15",
        label: "Overdue Days for NPA",
        name: "OverdueDaysforNPA",
        placeholder: "Enter Overdue Days for NPA",
        required: false,	
        value: "",
        minLength:1,
        maxLength:3,
        pattern:/^[0-9]*$/,
        fieldType:"days",
        errorMsg: "Please Enter Overdue Days for NPA"
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Loan Tranche Details"
    },
    {
        type: "switch",
        key: "16",
        label: "Enable Multiple Disbursals",
        name: "enableMultipleDisbursals",
        defaultChecked: true,
        required: false,
        errorMsg: "Please Enter Enable Multiple Disbursals"
    },
    {
        type: "number",
        key: "17",
        label: "Maximum Tranche count",
        name: "maxTrancheCount",
        placeholder: "Enter Maximum Tranche count",
        required: false,
        value: "",
        minLength:1,
        maxLength:2,
        pattern:/^[0-9]*$/,
        errorMsg: "Please Enter Maximum Tranche count"
    },
    {
        type: "number",
        key: "18",
        label: "Maximum allowed outstanding balance",
        name: "maximumAllowedOutstandingBalance",
        placeholder: "Enter Maximum allowed outstanding balance",
        required: false,
        value: "",
        minLength:1,
        maxLength:10,
        pattern:/^[0-9]+(\.[0-9]+)?$/,
        fieldType:"amount",
        errorMsg: "Please Enter Maximum allowed outstanding balance"
    },
    {
        type: "switch",
        key: "19",
        label: "Disallow Expected Disbursements",
        name: "disallowExpectedDisbursements",
        checked: false,
        value:"",
        required: false,
        errorMsg: "Please Enter Disallow Expected Disbursements"
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Broken Period Interest"
    },
    {
        type: "select",
        key: "20",
        label: "Broken Interest Strategy",
        name: "brokenInterestStrategy",
        placeholder: "Enter Broken Interest Strategy",
        required: true,
        errorMsg: "Please Enter Broken Interest Strategy",
        selectedValue: "",
        options: [
            {
                value: "1",
                label: "NoBroken",
            },
            {
                value: "2",
                label: "Disbursement",
            },
            {
                value: "3",
                label: "FirstRepayment",
            },
            {
                value: "4",
                label: "LastRepayment",
            }
        ]
    },
    {
        type: "select",
        key: "21",
        label: "Broken Interest Days in Year",
        name: "brokenInterestDaysInYears",
        placeholder: "Enter Broken Interest Days in Year",
        required: true,
        errorMsg: "Please Enter Broken Interest Days in Year",
        selectedValue: "",
        options: [
            {
                value: "1",
                label: "NoBrokendays",
            },
            {
                value: "2",
                label: "Actual",
            },
            {
                value: "3",
                label: "360 Days",
            },
            {
                value: "4",
                label: "365 Days",
            }
        ]
    }

]

export const DisbursementsFields = [
    {
        type: "select",
        key: "1",
        label: "Framework",
        name: "frameWork",
        placeholder: "Enter Framework",
        required: true,
        errorMsg: "Please Enter Framework",
        initialValues: "",
        options: [
            {
                value: "1",
                label: "Split at source",
            },
            {
                value: "2",
                label: "Servicer Fee",
            }
        ]
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Bank Transaction"
    },
    {
        type: "switch",
        key: "2",
        label: "Penny Drop",
        name: "isPennyDropEnabled",
        required: false,
        value: "",
        checked:false,
        errorMsg: "Please Enter Penny Drop"
    },
    {
        type: "switch",
        key: "3",
        label: "Bank Disbursement",
        name: "isBankDisbursementEnabled",
        checked: true,
        value:"",
        required: false,
        errorMsg: "Please Enter Bank Disbursement"
    },
    {
        type: "select",
        key: "4",
        label: "Transaction Type",
        name: "transactionTypePreference",
        placeholder: "Enter Transaction Type",
        required: false,
        errorMsg: "Please Enter Transaction Type",
        selectedValue: "",
        options: [
            {
                value: "1",
                label: "IMPS",
            },
            {
                value: "2",
                label: "RTGS",
            },
            {
                value: "3",
                label: "NEFT",
            }
        ]
    },
    {
        type: "select",
        key: "5",
        label: "Disbursement Bank Account Name",
        name: "disbursementAccountNumber",
        placeholder: "Enter Disbursement Bank Account Name",
        required: false,
        errorMsg: "Please Enter Disbursement Bank Account Name",
        selectedValue: "",
        options: [
            {
                value: "1",
                label: "List of Partner Beneficiary",
            }
        ]
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Disbursement & Collection Mode"
    },
    {
        type: "select",
        key: "6",
        label: "Disbursement",
        name: "disbursement",
        placeholder: "Enter Disbursement",
        required: true,
        errorMsg: "Please Enter Disbursement",
        selectedValue: "",
        options: [
            {
                value: "1",
                label: "Direct",
            },
            {
                value: "2",
                label: "Escrow",
            },
            {
                value: "3",
                label: "Reimbursement",
            }
        ]
    },
    {
        type: "select",
        key: "7",
        label: "Collection",
        name: "collection",
        placeholder: "Enter Collection",
        required: true,
        errorMsg: "Please Enter Collection",
        selectedValue: "",
        options: [
            {
                value: "1",
                label: "Partner",
            },
            {
                value: "2",
                label: "Direct",
            },
            {
                value: "3",
                label: "Escrow",
            },
            {
                value: "4",
                label: "Razorpay",
            }
        ]
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Co-lending Split Percentage"
    },
    {
        type: "text",
        key: "8",
        label: "Partner",
        name: "partnerId",
        placeholder: "Enter Partner",
        required: true,
        value: "",
        disabled:true,
        errorMsg: "Please Enter Partner"
    },
    {
        type: "heading",
        label: "Principal Share"
    },
    {
        type: "number",
        key: "9",
        label: "Client Share",
        name: "principalshare_clientshares",
        placeholder: "Enter Client Share",
        required: true,
        errorMsg: "Please Enter Client Share"
    },
    {
        type: "number",
        key: "10",
        label: "Self Share",
        name: "principalshare_selfshare",
        placeholder: "Enter Self Share",
        required: true,
        value: "",
        minLength:1,
        maxLength:3,
        pattern:/^[0-9]+(\.[0-9]+)?$/,
        fieldType:"percentage",
        errorMsg: "Please Enter Self Share"

    },
    {
        type: "number",
        key: "11",
        label: "Partner Share",
        name: "principalshare_partnershare",
        placeholder: "Enter Partner Share",
        required: true,
        value: "",
        minLength:1,
        maxLength:3,
        pattern:/^[0-9]+(\.[0-9]+)?$/,
        fieldType:"percentage",
        errorMsg: "Please Enter Partner Share",
        initialValues: ""
    },
    {
        type: "heading",
        label: "Interest Rate"
    },
    {
        type: "number",
        key: "12",
        label: "Client Share",
        name: "interestrate_clientshare",
        placeholder: "Enter Client Share",
        required: true,
        errorMsg: "Please Enter Client Share"
    },
    {
        type: "number",
        key: "13",
        label: "Self Share",
        name: "interestrate_selfshare",
        placeholder: "Enter Self Share",
        required: true,
        errorMsg: "Please Enter Self Share",
        initialValues: ""

    },
    {
        type: "number",
        key: "14",
        label: "Partner Share",
        name: "interestrate_partnershare",
        placeholder: "Enter Partner Share",
        required: true,
        errorMsg: "Please Enter Partner Share",
        initialValues: ""
    },
    {
        type: "heading",
        label: "Broken Period Interest"
    },
    {
        type: "number",
        key: "15",
        label: "Client Share",
        name: "brokenperiodinterest_clientshare",
        placeholder: "Enter Client Share",
        required: true,
        errorMsg: "Please Enter Client Share"
    },
    {
        type: "number",
        key: "16",
        label: "Self Share",
        name: "brokenperiodinterest_selfshare",
        placeholder: "Enter Self Share",
        required: true,
        errorMsg: "Please Enter Self Share",
        initialValues: ""

    },
    {
        type: "number",
        key: "17",
        label: "Partner Share",
        name: "brokenperiodinterest_partnershare",
        placeholder: "Enter Partner Share",
        required: true,
        errorMsg: "Please Enter Partner Share",
        initialValues: ""

    },
    {
        type: "line"
    },
    {
        type: "switch",
        key: "18",
        label: "Enable Fees & Charges",
        name: "enablefeesandcharges",
        defaultChecked: true,
        required: false,
        errorMsg: "Please Enter Enable Fees & Charges",
        initialValues: ""
    },
]

export const CollectionsFields = [
    {
        type: "switch",
        key: "1",
        label: "Interest Benefit Enabled",
        name: "interestBenefitEnabled",
        checked: true,
        value:"",
        required: false,
        errorMsg: "Please Enter Interest Benefit Enabled"
    },
    {
        type: "heading",
        label: "Advance"
    },
    {
        type: "select",
        key: "2",
        label: "Advance Appropriation",
        name: "advanceAppropriation",
        placeholder: "Enter Advance Appropriation",
        required: true,
        selectedValue: "",
        errorMsg: "Please Enter Advance Appropriation",
        options: [
            {
                value: "1",
                label: "Receipt Date",
            },
            {
                value: "2",
                label: "Due Date",
            }
        ]
    },
    {
        type: "switch",
        key: "3",
        label: "Enable Entry for Advance Transaction",
        name: "enableEntryForAdvanceTransaction",
        checked: true,
        value:"",
        required: false,
        errorMsg: "Please Enter Enable Entry for Advance Transaction"
    },
    {
        type: "select",
        key: "4",
        label: "Advance Appropriation Against On",
        name: "advanceAppropriationAgainstOn",
        placeholder: "Enter Advance Appropriation Against On",
        required: false,
        errorMsg: "Please Enter Advance Appropriation Against On",
        selectedValue: "",
        options: [
            {
                value: "1",
                label: "Principal",
            },
            {
                value: "2",
                label: "Interest Principal",
            }
        ]
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Foreclosure On Due Date"
    },
    {
        type: "select",
        key: "5",
        label: "Foreclosure On Due Date Interest",
        name: "foreclosureOnDueDateInterest",
        placeholder: "Enter Foreclosure On Due Date Interest",
        required: false,
        errorMsg: "Please Enter Foreclosure On Due Date Interest",
        selectedValue: "",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "select",
        key: "6",
        label: "Foreclosure On Due Date Charge",
        name: "foreclosureOnDueDateCharge",
        placeholder: "Enter Foreclosure On Due Date Charge",
        required: false,
        errorMsg: "Please Enter Foreclosure On Due Date Charge",
        selectedValue: "",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Foreclosure Other Than Due Date"
    },
    {
        type: "select",
        key: "7",
        label: "Foreclosure Other Than Due Date Interest",
        name: "foreclosureOtherThanDueDateInterestt",
        placeholder: "Enter Foreclosure Other Than Due Date Interest",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Foreclosure Other Than Due Date Interest",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "select",
        key: "8",
        label: "Foreclosure Other Than Due Date Charge",
        name: "foreclosureOtherThanDueDateCharge",
        placeholder: "Enter Foreclosure Other Than Due Date Charge",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Foreclosure Other Than Due Date Charge",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Foreclosure One Month Overdue"
    },
    {
        type: "select",
        key: "9",
        label: "Foreclosure One Month Overdue Interest",
        name: "foreclosureOneMonthOverdueInterest",
        placeholder: "Enter Foreclosure One Month Overdue Interest",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Foreclosure One Month Overdue Interest",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "select",
        key: "10",
        label: "Foreclosure One Month Overdue Charge",
        name: "foreclosureOneMonthOverdueCharge",
        placeholder: "Enter Foreclosure One Month Overdue Charge",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Foreclosure One Month Overdue Charge",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Foreclosure Interest ShortPaid"
    },
    {
        type: "select",
        key: "11",
        label: "Foreclosure Short Paid Interest",
        name: "foreclosureShortPaidInterest",
        placeholder: "Enter Foreclosure Short Paid Interest",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Foreclosure Short Paid Interest",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "select",
        key: "12",
        label: "Foreclosure Short Paid Charge",
        name: "foreclosureShortPaidInterestCharge",
        placeholder: "Enter Foreclosure Short Paid Charge",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Foreclosure Short Paid Charge",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Foreclosure Principal ShortPaid"
    },
    {
        type: "select",
        key: "13",
        label: "Foreclosure Principal Short Paid Interest",
        name: "foreclosurePrincipalShortPaidInterest",
        placeholder: "Enter Foreclosure Principal Short Paid Interest",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Foreclosure Principal Short Paid Interest",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "select",
        key: "14",
        label: "Foreclosure Principal Short Paid Charge",
        name: "foreclosurePrincipalShortPaidCharge",
        placeholder: "Enter Foreclosure Principal Short Paid Charge",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Foreclosure Principal Short Paid Charge",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Foreclosure Two Months Overdue"
    },
    {
        type: "select",
        key: "15",
        label: "Foreclosure Two Months Overdue Interest",
        name: "foreclosureTwoMonthsOverdueInterest",
        placeholder: "Enter Foreclosure Two Months Overdue Interest",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Foreclosure Two Months Overdue Interest",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "select",
        key: "16",
        label: "Foreclosure Two Months Overdue Charge",
        name: "foreclosureTwoMonthsOverdueCharge",
        placeholder: "Enter Foreclosure Two Months Overdue Charge",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Foreclosure Two Months Overdue Charge",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Foreclosure Advance On Due Date"
    },
    {
        type: "select",
        key: "17",
        label: "Principal outstanding",
        name: "foreclosurePosAdvanceOnDueDate",
        placeholder: "Enter Principal outstanding",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Principal outstanding",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "select",
        key: "18",
        label: "Foreclosure Advance OnDueDate Interest",
        name: "foreclosureAdvanceOnDueDateInterest",
        placeholder: "Enter Foreclosure Advance OnDueDate Interest",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Foreclosure Advance OnDueDate Interest",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "select",
        key: "19",
        label: "Foreclosure Advance OnDueDate Charge",
        name: "foreclosureAdvanceOnDueDateCharge",
        placeholder: "Enter Foreclosure Advance OnDueDate Charge",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Foreclosure Advance OnDueDate Charge",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Foreclosure Advance Other Than Due Date"
    },
    {
        type: "select",
        key: "20",
        label: "Principal outstanding",
        name: "foreclosurePosAdvanceOtherThanDueDate",
        placeholder: "Enter Principal outstanding",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Principal outstanding",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "select",
        key: "21",
        label: "Foreclosure Advance Other Than Due Date Interest",
        name: "foreclosureAdvanceAfterDueDateInterest",
        placeholder: "Enter Foreclosure Advance Other Than Due Date Interest",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Foreclosure Advance Other Than Due Date Interest",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "select",
        key: "22",
        label: "Foreclosure Advance Other Than Due Date Charge",
        name: "foreclosureAdvanceAfterDueDateCharge",
        placeholder: "Enter Foreclosure Advance Other Than Due Date Charge",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Foreclosure Advance Other Than Due Date Charge",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Foreclosure Backdated Interest Short Paid"
    },
    {
        type: "select",
        key: "23",
        label: "Foreclosure Backdated Interest Short Paid Interest",
        name: "foreclosureBackdatedShortPaidInterestCharge",
        placeholder: "Enter Foreclosure Backdated Interest Short Paid Interest",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Foreclosure Backdated Interest Short Paid Interest",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "select",
        key: "24",
        label: "Foreclosure Backdated Interest Short Paid Charge",
        name: "foreclosureBackdatedShortPaidInterest",
        placeholder: "Enter Foreclosure Backdated Interest Short Paid Charge",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Foreclosure Backdated Interest Short Paid Charge",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Foreclosure Backdated Interest Fully Paid"
    },
    {
        type: "select",
        key: "25",
        label: "Foreclosure Backdated Interest Fully Paid Interest",
        name: "foreclosureBackdatedFullyPaidInterest",
        placeholder: "Enter Foreclosure Backdated Interest Fully Paid Interest",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Foreclosure Backdated Interest Fully Paid Interest",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "select",
        key: "26",
        label: "Foreclosure Backdated Interest FullyPaid Charge",
        name: "foreclosureBackdatedFullyPaidInterestCharge",
        placeholder: "Enter Foreclosure Backdated Interest FullyPaid Charge",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Foreclosure Backdated Interest FullyPaid Charge",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Foreclosure Backdated Principal Short Paid"
    },
    {
        type: "select",
        key: "27",
        label: "Foreclosure Backdated Principal Short Paid Interest",
        name: "foreclosureBackdatedShortPaidPrincipalInterest",
        placeholder: "Enter Foreclosure Backdated Principal Short Paid Interest",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Foreclosure Backdated Principal Short Paid Interest",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "select",
        key: "28",
        label: "Foreclosure Backdated Principal Short Paid Charge",
        name: "foreclosureBackdatedShortPaidPrincipalCharge",
        placeholder: "Enter Foreclosure Backdated Principal Short Paid Charge",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Foreclosure Backdated Principal Short Paid Charge",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Foreclosure Backdated Emi Interest Fully Paid"
    },
    {
        type: "select",
        key: "29",
        label: "Foreclosure Backdated Emi Interest Fully Paid for Interest",
        name: "foreclosureBackdatedFullyPaidEmiInterest",
        placeholder: "Enter Foreclosure Backdated Emi Interest Fully Paid for Interest",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Foreclosure Backdated Emi Interest Fully Paid for Interest",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "select",
        key: "30",
        label: "Foreclosure Backdated Emi Interest Fully Paid for Charge",
        name: "foreclosureBackdatedFullyPaidEmiCharge",
        placeholder: "Enter Foreclosure Backdated Emi Interest Fully Paid for Charge",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Foreclosure Backdated Emi Interest Fully Paid for Charge",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Foreclosure Backdated Advance"
    },
    {
        type: "select",
        key: "31",
        label: "Foreclosure Backdated Advance for Interest",
        name: "foreclosureBackdatedAdvanceInterest",
        placeholder: "Enter Foreclosure Backdated Advance for Interest",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Foreclosure Backdated Advance for Interest",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
    {
        type: "select",
        key: "32",
        label: "Foreclosure Backdated Advance for Charge",
        name: "foreclosureBackdatedAdvanceCharge",
        placeholder: "Enter Foreclosure Backdated Advance for Charge",
        required: false,
        selectedValue: "",
        errorMsg: "Please Enter Foreclosure Backdated Advance for Charge",
        options: [
            {
                value: "1",
                label: "RS POS",
            },
            {
                value: "2",
                label: "Revised POS",
            }
        ]
    },
]

export const ServicerFeeFields = [
    {
        type: "switch",
        key: "1",
        label: "Servicer Fee Interest Configuration",
        name: "servicerFeeInterestConfig",
        required: false,
        checked: true,
        value: "",
        errorMsg: "Please Enter Servicer Fee Interest Configuration"
    },
    {
        type: "heading",
        label: "Servicer Fee Interest Base Amount and GST Loss"
    },
    {
        type: "number",
        key: "2",
        label: "VCL Hurdle Rate",
        name: "vclHurdleRate",
        placeholder: "Enter VCL Hurdle Rate",
        required: true,
        value: "",
        minLength:1,
        maxLength:3,
        pattern:/^[0-9]+(\.[0-9]+)?$/,
        fieldType:"percentage",
        errorMsg: "Please Enter VCL Hurdle Rate"
    },
    {
        type: "select",
        key: "3",
        label: "Interest Base Amount Rounding Mode",
        name: "vclInterestRound",
        placeholder: "Enter Interest Base Amount Rounding Mode",
        required: true,
        selectedValue: "",
        errorMsg: "Please Enter Interest Base Amount Rounding Mode",
        options: [
            {
                value: "1",
                label: "UP",
            },
            {
                value: "2",
                label: "HALF_UP",
            },
            {
                value: "3",
                label: "DOWN",
            }
        ]
    },
    {
        type: "number",
        key: "4",
        label: "Interest Base Amount Decimal Values",
        name: "vclInterestDecimal",
        placeholder: "Enter Interest Base Amount Decimal Values",
        required: true,	
        value: "",
        minLength:1,
        maxLength:6,
        pattern:/^[0-9]*$/,
        errorMsg: "Please Enter Interest Base Amount Decimal Values"

    },
    {
        type: "switch",
        key: "5",
        label: "Interest Base Amount GST Loss Enabled",
        name: "sfBaseAmtGstLossEnabled",
        checked: false,
        required: false,
        value: "",
        errorMsg: "Please Enter Interest Base Amount GST Loss Enabled",
    },
    {
        type: "number",
        key: "6",
        label: "GST Loss %",
        name: "sfBaseAmtGstLoss",
        placeholder: "Enter GST Loss %",
        required: false,
        value: "",
        minLength:1,
        maxLength:2,
        pattern:/^[0-9]+(\.[0-9]+)?$/,
        fieldType:"percentage",
        errorMsg: "Please Enter GST Loss %",

    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Servicer Fee Interest Amount GST Configuration"
    },
    {
        type: "number",
        key: "7",
        label: "Interest Amount GST %",
        name: "sfGst",
        placeholder: "Enter Interest Amount GST %",
        required: true,
        value: "",
        minLength:1,
        maxLength:2,
        pattern:/^[0-9]+(\.[0-9]+)?$/,
        fieldType:"percentage",
        errorMsg: "Please Enter Interest Amount GST %"

    },
    {
        type: "select",
        key: "8",
        label: "Interest Amount GST Rounding Mode",
        name: "sfGstRound",
        placeholder: "Enter Interest Amount GST Rounding Mode",
        required: true,
        selectedValue: "",
        errorMsg: "Please Enter Interest Amount GST Rounding Mode",
        options: [
            {
                value: "1",
                label: "UP",
            },
            {
                value: "2",
                label: "HALF_UP",
            },
            {
                value: "3",
                label: "DOWN",
            }
        ]
    },
    {
        type: "number",
        key: "9",
        label: "Interest Amount GST Decimal Values",
        name: "sfGstDecimal",
        placeholder: "Enter Interest Amount GST Decimal Values",
        required: true,	
        value: "",
        minLength:1,
        maxLength:6,
        pattern:/^[0-9]*$/,
        errorMsg: "Please Enter Interest Amount GST Decimal Values"

    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Servicer Fee Interest Invoice Calculation"
    },
    {
        type: "select",
        key: "10",
        label: "Interest Invoice Amount Rounding Mode",
        name: "servicerFeeRound",
        placeholder: "Enter Interest Invoice Amount Rounding Mode",
        required: true,
        selectedValue: "",
        errorMsg: "Please Enter Interest Invoice Amount Rounding Mode",
        options: [
            {
                value: "1",
                label: "UP",
            },
            {
                value: "2",
                label: "HALF_UP",
            },
            {
                value: "3",
                label: "DOWN",
            }
        ]
    },
    {
        type: "number",
        key: "11",
        label: "Interest Invoice Amount Decimal Values",
        name: "servicerFeeDecimal",
        placeholder: "Enter Interest Invoice Amount Decimal Values",
        required: true,	
        value: "",
        minLength:1,
        maxLength:6,
        pattern:/^[0-9]*$/,
        errorMsg: "Please Enter Interest Invoice Amount Decimal Values"

    },
    {
        type: "switch",
        key: "12",
        label: "Servicer Fee Charges Configuration",
        name: "servicerFeeChargesConfig",
        required: false,
        checked: false,
        value: "",
        errorMsg: "Please Enter Servicer Fee Charges Configuration",
    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Servicer Fee Charges Base Amount Calculation"
    },
    {
        type: "select",
        key: "13",
        label: "Charges Base Amount Rounding Mode",
        name: "sfChargeBaseAmountRoundingmode",
        placeholder: "Enter Charges Base Amount Rounding Mode",
        required: true,
        selectedValue: "",
        errorMsg: "Please Enter Charges Base Amount Rounding Mode",
        options: [
            {
                value: "1",
                label: "UP",
            },
            {
                value: "2",
                label: "HALF_UP",
            },
            {
                value: "3",
                label: "DOWN",
            }
        ]
    },
    {
        type: "number",
        key: "14",
        label: "Charges Base Amount Decimal Values",
        name: "sfChargeBaseAmountDecimal",
        placeholder: "Enter Charges Base Amount Decimal Values",
        required: true,	
        value: "",
        minLength:1,
        maxLength:6,
        pattern:/^[0-9]*$/,
        errorMsg: "Please Enter Charges Base Amount Decimal Values"

    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Servicer Fee Charge GST Calculation"
    },
    {
        type: "number",
        key: "15",
        label: "Charges GST %",
        name: "sfChargeGst",
        placeholder: "Enter Charges GST %",
        required: true,
        value: "",
        minLength:1,
        maxLength:2,
        pattern:/^[0-9]+(\.[0-9]+)?$/,
        fieldType:"percentage",
        errorMsg: "Please Enter Charges GST %",

    },
    {
        type: "select",
        key: "16",
        label: "Charges GST Rounding Mode",
        name: "sfChargeRound",
        placeholder: "Enter Charges GST Rounding Mode",
        required: true,
        selectedValue: "",
        errorMsg: "Please Enter Charges GST Rounding Mode",
        options: [
            {
                value: "1",
                label: "UP",
            },
            {
                value: "2",
                label: "HALF_UP",
            },
            {
                value: "3",
                label: "DOWN",
            }
        ]
    },
    {
        type: "number",
        key: "17",
        label: "Charges GST Decimal Values",
        name: "Charges GST Decimal Values",
        placeholder: "Enter Charges GST Decimal Values",
        required: true,
        value: "",
        minLength:1,
        maxLength:6,
        pattern:/^[0-9]*$/,
        errorMsg: "Please Enter Charges GST Decimal Values"

    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Servicer Fee Charges Invoice Amount Calculation"
    },
    {
        type: "select",
        key: "18",
        label: "Charges Invoice Amount Rounding Mode",
        name: "sfChargeGstRoundingmode",
        placeholder: "Enter Charges Invoice Amount Rounding Mode",
        required: true,
        selectedValue: "",
        errorMsg: "Please Enter Charges Invoice Amount Rounding Mode",
        options: [
            {
                value: "1",
                label: "UP",
            },
            {
                value: "2",
                label: "HALF_UP",
            },
            {
                value: "3",
                label: "DOWN",
            }
        ]
    },
    {
        type: "number",
        key: "19",
        label: "Charges Invoice Amount Decimal Values",
        name: "sfChargeGstDecimal",
        placeholder: "Enter Charges Invoice Amount Decimal Values",
        required: true,
        value: "",
        minLength:1,
        maxLength:6,
        pattern:/^[0-9]*$/,
        errorMsg: "Please Enter Charges Invoice Amount Decimal Values"

    },
    {
        type: "line"
    },
    {
        type: "heading",
        label: "Servicer Fee Charge Split and GST Loss"
    },
    // {
    //     type: "select",
    //     key: "20",
    //     label: "Servicer Split Ratio",
    //     name: "servicerFeeChargesRatio",
    //     placeholder: "Enter Servicer Split Ratio",
    //     required: true,
    //     selectedValue: "",
    //     errorMsg: "Please Enter Servicer Split Ratio",
    //     options: [
    //         {
    //             value: "1",
    //             label: "Fixed Split",
    //         },
    //         {
    //             value: "2",
    //             label: "Dynamic Split",
    //         }
    //     ]
    // },
    // {
    //     type: "select",
    //     key: "21",
    //     label: "Select Fees",
    //     name: "Select Fees",
    //     placeholder: "Enter Select Fees",
    //     required: true,
    //     errorMsg: "Please Enter Select Fees",
    //     initialValues: "",
    //     options: [
    //     ]
    // },
    // {
    //     type: "number",
    //     key: "22",
    //     label: "Servicer Fee Self Share",
    //     name: "Servicer Fee Self Share",
    //     placeholder: "Enter Servicer Fee Self Share",
    //     required: true,
    //     errorMsg: "Please Enter Servicer Fee Self Share",
    //     initialValues: ""

    // },
    // {
    //     type: "number",
    //     key: "23",
    //     label: "Servicer Fee Partner Share",
    //     name: "Servicer Fee Partner Share",
    //     placeholder: "Enter Servicer Fee Partner Share",
    //     required: true,
    //     errorMsg: "Please Enter Servicer Fee Partner Share",
    //     initialValues: ""

    // },
    // {
    //     type: "switch",
    //     key: "24",
    //     label: "Enable GST Loss",
    //     name: "Enable GST Loss",
    //     defaultChecked: true,
    //     required: false,
    //     errorMsg: "Please Enter Enable GST Loss",
    //     initialValues: ""
    // },
    // {
    //     type: "number",
    //     key: "25",
    //     label: "GST Loss %",
    //     name: "GST Loss %",
    //     placeholder: "Enter GST Loss %",
    //     required: false,
    //     errorMsg: "Please Enter GST Loss %",
    //     initialValues: ""

    // },
    // {
    //     type: "switch",
    //     key: "26",
    //     label: "Active",
    //     name: "isActive",
    //     required: false,
    //     checked: "",
    //     value:"",
    //     errorMsg: "Please Enter Active"
    // }
]
