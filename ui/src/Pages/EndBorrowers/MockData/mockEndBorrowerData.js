import {Link} from "react-router-dom";
import React from "react";
import {Badge} from "react-bootstrap";
import {CheckOutlined, CloseOutlined} from "@ant-design/icons";

// Approved Tab Mock Data
export const approvedTabColumn = [
    {
        title: 'DATE',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'APPLICATION ID',
        dataIndex: 'applicationId',
        key: 'applicationId',
        render: (text, record) => (
            <Link to=""
                  className="partner-name-link plain-link color-primary">
                {text}
            </Link>
        )
    },
    {
        title: 'UNIQUE ID',
        dataIndex: 'uniqueId',
        key: 'uniqueId',
        render: (text, record) => (
            <Link to={`/end-borrowers/view/${record.uniqueId}`}
                  className="partner-name-link plain-link color-primary">
                {text}
            </Link>
        )
    },
    {
        title: 'BORROWER NAME',
        dataIndex: 'borrowerName',
        key: 'borrowerName',
    }, {
        title: 'DEDUPE',
        dataIndex: 'dedupe',
        key: 'dedupe',
    },
    {
        title: 'INITIAL FILTER',
        dataIndex: 'initialFilter',
        key: 'initialFilter',
        render: text => (
            <div className="fees-and-charges-datapoint">
                {text != "" ?
                    (
                        <Badge
                            className={`fees-and-charges-table-badge ${text === "Pass" ? 'fees-and-charges-active color-success' : 'fees-and-charges-inactive color-inactive'}`}>{text}</Badge>
                    ) :
                    (
                        <>---</>
                    )
                }
            </div>
        )
    },
    {
        title: 'KYC',
        dataIndex: 'kyc',
        key: 'kyc',
        render: text => (
            <div className="fees-and-charges-datapoint">
                {text != "" ?
                    (
                        <Badge
                            className={`fees-and-charges-table-badge ${text === "Pass" ? 'fees-and-charges-active color-success' : 'fees-and-charges-inactive color-inactive'}`}>{text}</Badge>
                    ) :
                    (
                        <>---</>
                    )
                }
            </div>
        )
    },
    {
        title: 'BUREAU CHECK',
        dataIndex: 'bureauCheck',
        key: 'bureauCheck'
    },
    {
        title: 'CREDIT FILTER',
        dataIndex: 'creditFilter',
        key: 'creditFilter',
        render: text => (
            <div className="fees-and-charges-datapoint">
                {text != "" ?
                    (
                        <Badge
                            className={`fees-and-charges-table-badge ${text === "Pass" ? 'fees-and-charges-active color-success' : 'fees-and-charges-inactive color-inactive'}`}>{text}</Badge>
                    ) :
                    (
                        <>---</>
                    )
                }
            </div>
        )
    }
];

export const approvedTabDataSource = [
    {
        "date": "20 Sep 2023",
        "applicationId": "LN20221206004",
        "uniqueId": "VCL20221206004",
        "borrowerName": "Gowtham Pandian",
        "dedupe": "Unique",
        "initialFilter": "Pass",
        "kyc": "Pass",
        "bureauCheck": 702,
        "creditFilter": "Pass",
        "pennyDrop": true
    },
    {
        "date": "20 Sep 2023",
        "applicationId": "LN20221206004",
        "uniqueId": "VCL20221206004",
        "borrowerName": "Pitchai Mani",
        "dedupe": "Unique",
        "initialFilter": "Pass",
        "kyc": "Pass",
        "bureauCheck": 768,
        "creditFilter": "Pass",
        "pennyDrop": true
    },
    {
        "date": "20 Sep 2023",
        "applicationId": "LN20221206004",
        "uniqueId": "VCL20221206004",
        "borrowerName": "Sridhar Srinivasan",
        "dedupe": "Duplicate",
        "initialFilter": "Pass",
        "kyc": "Pass",
        "bureauCheck": 756,
        "creditFilter": "Pass",
        "pennyDrop": false
    },
    {
        "date": "20 Sep 2023",
        "applicationId": "LN20221206004",
        "uniqueId": "VCL20221206004",
        "borrowerName": "Prasanna",
        "dedupe": "Unique",
        "initialFilter": "Pass",
        "kyc": "Pass",
        "bureauCheck": 789,
        "creditFilter": "Pass",
        "pennyDrop": true
    },
    {
        "date": "20 Sep 2023",
        "applicationId": "LN20221206004",
        "uniqueId": "VCL20221206004",
        "borrowerName": "Nithish Kumar",
        "dedupe": "Unique",
        "initialFilter": "Pass",
        "kyc": "Pass",
        "bureauCheck": 756,
        "creditFilter": "Pass",
        "pennyDrop": false
    },
    {
        "date": "20 Sep 2023",
        "applicationId": "LN20221206004",
        "uniqueId": "VCL20221206004",
        "borrowerName": "Lakshmi",
        "dedupe": "Duplicate",
        "initialFilter": "Pass",
        "kyc": "Pass",
        "bureauCheck": 895,
        "creditFilter": "Pass",
        "pennyDrop": false
    },
    {
        "date": "20 Sep 2023",
        "applicationId": "LN20221206004",
        "uniqueId": "VCL20221206004",
        "borrowerName": "Gowtham Pandian",
        "dedupe": "Duplicate",
        "initialFilter": "Pass",
        "kyc": "Pass",
        "bureauCheck": 765,
        "creditFilter": "Pass",
        "pennyDrop": false
    },
    {
        "date": "20 Sep 2023",
        "applicationId": "LN20221206004",
        "uniqueId": "VCL20221206004",
        "borrowerName": "Deepika Rao",
        "dedupe": "Unique",
        "initialFilter": "Pass",
        "kyc": "Pass",
        "bureauCheck": 725,
        "creditFilter": "Pass",
        "pennyDrop": true
    },
    {
        "date": "20 Sep 2023",
        "applicationId": "LN20221206004",
        "uniqueId": "VCL20221206004",
        "borrowerName": "Gowtham Pandian",
        "dedupe": "Unique",
        "initialFilter": "Pass",
        "kyc": "Pass",
        "bureauCheck": 728,
        "creditFilter": "Pass",
        "pennyDrop": false
    },
    {
        "date": "20 Sep 2023",
        "applicationId": "LN20221206004",
        "uniqueId": "VCL20221206004",
        "borrowerName": "Deepika Rao",
        "dedupe": "Unique",
        "initialFilter": "Pass",
        "kyc": "Pass",
        "bureauCheck": 715,
        "creditFilter": "Pass",
        "pennyDrop": true
    }
];

// Rejected tab Data

export const rejectedTabDataSource = [
    {
        "date": "20 Sep 2023",
        "applicationId": "LN20221206004",
        "uniqueId": "VCL20221206004",
        "borrowerName": "Gowtham Pandian",
        "dedupe": "Unique",
        "initialFilter": "Fail",
        "kyc": "",
        "bureauCheck": 0,
        "creditFilter": ""
    },
    {
        "date": "20 Sep 2023",
        "applicationId": "LN20221206004",
        "uniqueId": "VCL20221206004",
        "borrowerName": "Pitchai Mani",
        "dedupe": "Duplicate",
        "initialFilter": "Pass",
        "kyc": "Fail",
        "bureauCheck": 0,
        "creditFilter": ""
    },
    {
        "date": "20 Sep 2023",
        "applicationId": "LN20221206004",
        "uniqueId": "VCL20221206004",
        "borrowerName": "Sridhar Srinivasan",
        "dedupe": "Duplicate",
        "initialFilter": "Pass",
        "kyc": "Pass",
        "bureauCheck": 756,
        "creditFilter": "Fail"
    },
    {
        "date": "20 Sep 2023",
        "applicationId": "LN20221206004",
        "uniqueId": "VCL20221206004",
        "borrowerName": "Prasanna",
        "dedupe": "Unique",
        "initialFilter": "Pass",
        "kyc": "Pass",
        "bureauCheck": 500,
        "creditFilter": ""
    },
];

// In Progress Tab Data

export const inprogressTabColumn = [
    {
        title: 'DATE',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'APPLICATION ID',
        dataIndex: 'applicationId',
        key: 'applicationId',
        render: (text, record) => (
            <Link to={`/end-borrowers/application/${record.applicationId}`}
                  className="partner-name-link plain-link color-primary">
                {text}
            </Link>
        )
    },
    {
        title: 'UNIQUE ID',
        dataIndex: 'uniqueId',
        key: 'uniqueId',
        render: (text, record) => (
            <Link to={`/end-borrowers/unique/${record.uniqueId}`}
                  className="partner-name-link plain-link color-primary">
                {text}
            </Link>
        )
    },
    {
        title: 'BORROWER NAME',
        dataIndex: 'borrowerName',
        key: 'borrowerName',
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: text => (
            <div className="color-alert">{text}</div>
        )
    },
    {
        title: "No. of Docs Received",
        dataIndex: "noOfDocsReceived",
        key: "noOfDocsReceived"
    }
];

export const inprogressTabDataSource = [
    {
        "date": "20 Sep 2023",
        "applicationId": "LN20221206004",
        "uniqueId": "VCL20221206004",
        "borrowerName": "Gowtham Pandian",
        "status": "Awaiting Customer Signature",
        "noOfDocsReceived": "4/4",
        "loanAmount": "2,03,000",
        "vclInvestment": "1,18,899",
        "isEmailed": true,
        "isMessaged": true
    },
    {
        "date": "20 Sep 2023",
        "applicationId": "LN20221206004",
        "uniqueId": "VCL20221206004",
        "borrowerName": "Pitchal Man",
        "status": "Updated Loan Details",
        "noOfDocsReceived": "4/4",
        "loanAmount": "2,03,000",
        "vclInvestment": "1,18,899",
        "isEmailed": false,
        "isMessaged": true
    },
    {
        "date": "20 Sep 2023",
        "applicationId": "LN20221206004",
        "uniqueId": "VCL20221206004",
        "borrowerName": "Sridhar Srinlvasan",
        "status": "Updated Loan Details",
        "noOfDocsReceived": "4/4",
        "loanAmount": "2,03,000",
        "vclInvestment": "1,18,899",
        "isEmailed": true,
        "isMessaged": false
    },
    {
        "date": "20 Sep 2023",
        "applicationId": "LN20221206004",
        "uniqueId": "VCL20221206004",
        "borrowerName": "Prasanna",
        "status": "Updated Loan Details",
        "noOfDocsReceived": "4/4",
        "loanAmount": "2,03,000",
        "vclInvestment": "1,18,899",
        "isEmailed": true,
        "isMessaged": true
    },
    {
        "date": "20 Sep 2023",
        "applicationId": "LN20221206004",
        "uniqueId": "VCL20221206004",
        "borrowerName": "Nithish Kumar",
        "status": "Updated Loan Details",
        "noOfDocsReceived": "4/4",
        "loanAmount": "2,03,000",
        "vclInvestment": "1,18,899",
        "isEmailed": false,
        "isMessaged": false
    },
    {
        "date": "20 Sep 2023",
        "applicationId": "LN20221206004",
        "uniqueId": "VCL20221206004",
        "borrowerName": "Lakshml",
        "status": "Updated Loan Details",
        "noOfDocsReceived": "4/4",
        "loanAmount": "2,03,000",
        "vclInvestment": "1,18,899",
        "isEmailed": true,
        "isMessaged": false
    },
    {
        "date": "20 Sep 2023",
        "applicationId": "LN20221206004",
        "uniqueId": "VCL20221206004",
        "borrowerName": "Gowtham Pandian",
        "status": "Updated Loan Details",
        "noOfDocsReceived": "4/4",
        "loanAmount": "2,03,000",
        "vclInvestment": "1,18,899",
        "isEmailed": false,
        "isMessaged": true
    },
    {
        "date": "20 Sep 2023",
        "applicationId": "LN20221206004",
        "uniqueId": "VCL20221206004",
        "borrowerName": "Deeplka Rao",
        "status": "Updated Loan Details",
        "noOfDocsReceived": "4/4",
        "loanAmount": "2,03,000",
        "vclInvestment": "1,18,899",
        "isEmailed": true,
        "isMessaged": true
    },
    {
        "date": "20 Sep 2023",
        "applicationId": "LN20221206004",
        "uniqueId": "VCL20221206004",
        "borrowerName": "Gowtham Pandian",
        "status": "Updated Loan Details",
        "noOfDocsReceived": "4/4",
        "loanAmount": "2,03,000",
        "vclInvestment": "1,18,899",
        "isEmailed": true,
        "isMessaged": true
    },
    {
        "date": "20 Sep 2023",
        "applicationId": "LN20221206004",
        "uniqueId": "VCL20221206004",
        "borrowerName": "Deeplka Rao",
        "status": "Updated Loan Details",
        "noOfDocsReceived": "4/4",
        "loanAmount": "2,03,000",
        "vclInvestment": "1,18,899",
        "isEmailed": true,
        "isMessaged": true
    }
];

// Penny Drop Tab Data

export const pennyDropTabColumn = [
    {
        title: 'DATE',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'APPLICATION ID',
        dataIndex: 'applicationId',
        key: 'applicationId',
        render: (text, record) => (
            <Link to={`/end-borrowers/application/${record.applicationId}`}
                  className="partner-name-link plain-link color-primary">
                {text}
            </Link>
        )
    },
    {
        title: 'UNIQUE ID',
        dataIndex: 'uniqueId',
        key: 'uniqueId',
        render: (text, record) => (
            <Link to={`/end-borrowers/unique/${record.uniqueId}`}
                  className="partner-name-link plain-link color-primary">
                {text}
            </Link>
        )
    },
    {
        title: 'BORROWER NAME',
        dataIndex: 'borrowerName',
        key: 'borrowerName',
    },
    {
        title: "PENNY DROP",
        dataIndex: "pennyDrop",
        key: "status",
        render: text => (
            <div className="fees-and-charges-datapoint">
                <Badge
                    className={`fees-and-charges-table-badge ${text == true ? 'fees-and-charges-active color-success' : 'fees-and-charges-inactive color-inactive'}`}>{text == true ? "Success" : "Failed"}</Badge>
            </div>
        )
    },
];

// Disbursed Tab Data

export const disbursedTabColumn = [
    {
        title: 'DATE',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'APPLICATION ID',
        dataIndex: 'applicationId',
        key: 'applicationId',
        render: (text, record) => (
            <Link to={`/end-borrowers/application/${record.applicationId}`}
                  className="partner-name-link plain-link color-primary">
                {text}
            </Link>
        )
    },
    {
        title: 'UNIQUE ID',
        dataIndex: 'uniqueId',
        key: 'uniqueId',
        render: (text, record) => (
            <Link to={`/end-borrowers/unique/${record.uniqueId}`}
                  className="partner-name-link plain-link color-primary">
                {text}
            </Link>
        )
    },
    {
        title: 'BORROWER NAME',
        dataIndex: 'borrowerName',
        key: 'borrowerName',
    },
    {
        title: "LOAN AMOUNT (₹)",
        dataIndex: "loanAmount",
        key: "loanAmount"
    },
    {
        title: "VCL INVESTMENT (₹)",
        dataIndex: "vclInvestment",
        key: "vclInvestment"
    },
    {
        title: "No. of Docs Received",
        dataIndex: "noOfDocsReceived",
        key: "noOfDocsReceived"
    }
];

// Welcome Kit Data

export const welcomKitTabColumn = [
    {
        title: 'DATE',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'APPLICATION ID',
        dataIndex: 'applicationId',
        key: 'applicationId',
        render: (text, record) => (
            <Link to={`/end-borrowers/application/${record.applicationId}`}
                  className="partner-name-link plain-link color-primary">
                {text}
            </Link>
        )
    },
    {
        title: 'UNIQUE ID',
        dataIndex: 'uniqueId',
        key: 'uniqueId',
        render: (text, record) => (
            <Link to={`/end-borrowers/unique/${record.uniqueId}`}
                  className="partner-name-link plain-link color-primary">
                {text}
            </Link>
        )
    },
    {
        title: 'BORROWER NAME',
        dataIndex: 'borrowerName',
        key: 'borrowerName',
    },
    {
        title: "LOAN AMOUNT (₹)",
        dataIndex: "loanAmount",
        key: "loanAmount"
    },
    {
        title: "WELCOME KIT STATUS",
        dataIndex: "welcomKit",
        key: "welcomeKit",
        render: (text, record) => (
            <div className="d-flex">
                <div className="d-flex">
                    <div className="me-2">
                        {record.isEmailed ? <CheckOutlined className="me-2 color-success"/> :
                            <CloseOutlined className="me-2 color-inactive"/>}
                        Email
                    </div>
                    <div>
                        {record.isMessaged ? <CheckOutlined className="me-2 color-success"/> :
                            <CloseOutlined className="me-2 color-inactive"/>}
                        SMS
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "No. of Docs Received",
        dataIndex: "noOfDocsReceived",
        key: "noOfDocsReceived"
    }
];

// Dedupe Mock Data
export const dedupeColumn = [
    {
        title: 'PARAMETER(S)',
        dataIndex: 'parameter',
        key: 'parameter',
    },
    {
        title: 'NEW DATA',
        dataIndex: 'newData',
        key: 'newData',
    },
    {
        title: 'EXISTING DATA',
        dataIndex: 'existingData',
        key: 'existingData',
    },
    {
        title: 'SIMILARITY',
        dataIndex: 'similarity',
        key: 'similarity',
    }
];

export const dedupeModalData = [
    {
        "parameter": "First Name",
        "newData": "Pitchal",
        "existingData": "Pitchal",
        "similarity": 1
    },
    {
        "parameter": "Last Name",
        "newData": "Man",
        "existingData": "Man",
        "similarity": 1
    },
    {
        "parameter": "Full Name",
        "newData": "Pitchal Man",
        "existingData": "Pitchal Man",
        "similarity": 1
    },
    {
        "parameter": "Date of Birth",
        "newData": "06-01-1993",
        "existingData": "06-01-1993",
        "similarity": 1
    },
    {
        "parameter": "E-mail ID",
        "newData": "pitchal123@gmail.com",
        "existingData": "pitchal123@gmail.com",
        "similarity": 1
    },
    {
        "parameter": "Mobile Number",
        "newData": "9876543210",
        "existingData": "9876543210",
        "similarity": 1
    },
    {
        "parameter": "Address",
        "newData": "Door na-2/56, East Street, Thoppur",
        "existingData": "Door no-2/56, East Street, Thoppur",
        "similarity": 1
    },
    {
        "parameter": "Aadhaar",
        "newData": "XXXX XXXX 2222",
        "existingData": "XXXX XXXX 2222",
        "similarity": 1
    },
    {
        "parameter": "PAN",
        "newData": "AAAAA1234F",
        "existingData": "AAAAA1234F",
        "similarity": 1
    },
    {
        "parameter": "Driving License",
        "newData": "DL 04 20220000001",
        "existingData": "DL 04 20220000001",
        "similarity": 1
    },
    {
        "parameter": "Passport",
        "newData": "-",
        "existingData": "-",
        "similarity": 1
    },
    {
        "parameter": "Voter ID",
        "newData": "-",
        "existingData": "-",
        "similarity": 1
    },
    {
        "parameter": "Pin Code",
        "newData": "625 008",
        "existingData": "625 008",
        "similarity": 1
    },
    {
        "parameter": "Result",
        "newData": "Unique",
        "existingData": "",
        "similarity": ""
    }
];

// Bureau Modal
export const bureauColumn = [
    {
        title: 'UNIQUE CUSTOMER ID',
        dataIndex: 'uniqueCustomerId',
        key: 'uniqueCustomerId',
    },
    {
        title: 'BORROWER NAME',
        dataIndex: 'borrowerName',
        key: 'borrowerName',
    },
    {
        title: 'FIRST NAME',
        dataIndex: 'firstName',
        key: 'firstName',
    },
    {
        title: 'LAST NAME',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'EQID',
        dataIndex: 'eqid',
        key: 'eqid',
    },
    {
        title: 'BK COUNT',
        dataIndex: 'bkCount',
        key: 'bkCount',
    },
    {
        title: 'EXP. BK COUNT',
        dataIndex: 'expBkCount',
        key: 'expBkCount',
    },
    {
        title: 'COMPLETION TIME',
        dataIndex: 'completionTime',
        key: 'completionTime',
    },
    {
        title: 'CURRENT OD',
        dataIndex: 'currentOd',
        key: 'currentOd',
    },
    {
        title: 'EXP. CURRENT OD',
        dataIndex: 'expCurrentOd',
        key: 'expCurrentOd',
    },
    {
        title: 'CUSTOMER REFERENCE ID',
        dataIndex: 'customerReferenceId',
        key: 'customerReferenceId',
    },
    {
        title: 'SFWD',
        dataIndex: 'sfwd',
        key: 'sfwd',
    },
    {
        title: 'SFWD',
        dataIndex: 'sfwd',
        key: 'sfwd',
    },
    {
        title: 'EXP. SFWD',
        dataIndex: 'expSfwd',
        key: 'expSfwd',
    },
    {
        title: 'WDF',
        dataIndex: 'wdf',
        key: 'wdf',
    },
    {
        title: 'EXP. WDF',
        dataIndex: 'expWdf',
        key: 'expWdf',
    },
    {
        title: 'WOF',
        dataIndex: 'wof',
        key: 'wof',
    },
    {
        title: 'EXP. WOF',
        dataIndex: 'expWof',
        key: 'expWof',
    }
];

export const bureauModalData = [
    {
        "uniqueCustomerId" : "VCL20221206004",
        "borrowerName" : "Gowtham Pandian",
        "firstName": "Gowtham",
        "lastName": "Pandian",
        "eqid" : 162,
        "bkCount" : 0,
        "expBkCount": 0,
        "completionTime": "13-10-2023 12:22:30",
        "currentOd": 0,
        "expCurrentOd": 0,
        "customerReferenceId": "OKC9925099510",
        "sfwd": 0,
        "expSfwd": 0,
        "wdf":0,
        "expWdf":0,
        "wof":0,
        "expWof":0
    }
]

// Loan List Component

export const loanListColumn = [
    {
        title: 'APPLICATION ID',
        dataIndex: 'applicationId',
        key: 'applicationId',
    },
    {
        title: 'PRODUCT',
        dataIndex: 'productName',
        key: 'productName',
    },
    {
        title: 'TOTAL LOAN AMOUNT',
        dataIndex: 'loanAmount',
        key: 'loanAmount',
    }
]

export const loanListDataSource = [
    {
        "applicationId" : "LN20221206004",
        "productName" : "SME Auto Lending",
        "loanAmount" : "₹2,00,000"
    },
    {
        "applicationId" : "LN20221206004",
        "productName" : "SME Auto Lending",
        "loanAmount" : "₹2,00,000"
    },
    {
        "applicationId" : "LN20221206004",
        "productName" : "SME Auto Lending",
        "loanAmount" : "₹2,00,000"
    },
    {
        "applicationId" : "LN20221206004",
        "productName" : "SME Auto Lending",
        "loanAmount" : "₹2,00,000"
    },
    {
        "applicationId" : "LN20221206004",
        "productName" : "SME Auto Lending",
        "loanAmount" : "₹2,00,000"
    },
    {
        "applicationId" : "LN20221206004",
        "productName" : "SME Auto Lending",
        "loanAmount" : "₹2,00,000"
    },
    {
        "applicationId" : "LN20221206004",
        "productName" : "SME Auto Lending",
        "loanAmount" : "₹2,00,000"
    },
    {
        "applicationId" : "LN20221206004",
        "productName" : "SME Auto Lending",
        "loanAmount" : "₹2,00,000"
    },
    {
        "applicationId" : "LN20221206004",
        "productName" : "SME Auto Lending",
        "loanAmount" : "₹2,00,000"
    }
]

// Documents Card Mock Data

export const mockDocumentData = ["Aadhaar.pdf", "PAN.pdf", "DrivingLicense.pdf", "VoterID.pdf"];

// Timeline Data

export const mockTimelineData = [
    {
        children : (
            <div className="fw-500 lh-18 color-tooltip-bg pt-6px">
                <div className="fs-14 mb-6px">
                    Application Received
                </div>
                <div className="fs-12">
                    20-09-23 10:30 AM
                </div>
            </div>
        ),
        color : "#3DBD48"
    },
    {
        children : (
            <div className="fw-500 lh-18 color-tooltip-bg pt-6px">
                <div className="fs-14 mb-6px">
                    KYC Received
                </div>
                <div className="fs-12">
                    20-09-23 11:00 AM
                </div>
            </div>
        ),
        color : "#3DBD48"
    },
    {
        children : (
            <div className="fw-500 lh-18 color-tooltip-bg pt-6px">
                <div className="fs-14 mb-6px">
                    Initial Filter
                </div>
                <div className="fs-12">
                    20-09-23 11:30 AM
                </div>
            </div>
        ),
        color : "#3DBD48"
    },
    {
        children : (
            <div className="fw-500 lh-18 color-tooltip-bg pt-6px">
                <div className="fs-14 mb-6px">
                    KYC Check
                </div>
                <div className="fs-12">
                    20-09-23 12:00 PM
                </div>
            </div>
        ),
        color : "#3DBD48"
    },
    {
        children : (
            <div className="fw-500 lh-18 color-tooltip-bg pt-6px">
                <div className="fs-14 mb-6px">
                    Bureau Check
                </div>
                <div className="fs-12">
                    20-09-23 12:05 PM
                </div>
            </div>
        ),
        color : "#3DBD48"
    },
    {
        children : (
            <div className="fw-500 lh-18 color-tooltip-bg pt-6px">
                <div className="fs-14 mb-6px">
                    Loan Documents send for customer signature
                </div>
                <div className="fs-12">
                    20-09-23 01:00 PM
                </div>
            </div>
        ),
        color : "#3DBD48"
    },
    {
        children : (
            <div className="fw-500 lh-18 color-tooltip-bg pt-6px">
                <div className="fs-14 mb-6px">
                    Loan Documents received for customer signature
                </div>
                <div className="fs-12">
                    22-09-23 11:00 AM
                </div>
            </div>
        ),
        color : "#3DBD48"
    },
    {
        children : (
            <div className="fw-500 lh-18 color-tooltip-bg pt-6px">
                <div className="fs-14 mb-6px">
                    Penny Drop
                </div>
                <div className="fs-12">
                    22-09-23 01:00 PM
                </div>
            </div>
        ),
        color : "#F04E53"
    },
    {
        children : (
            <div className="fw-500 lh-18 pt-6px">
                <span className="fs-14 color-input-text">
                    Loan Disbursed
                </span>
            </div>
        ),
        color : "#939598"
    },
    {
        children : (
            <div className="fw-500 lh-18 pt-6px">
                <span className="fs-14 color-input-text">
                    Welcome Kit Shared
                </span>
            </div>
        ),
        color : "#939598"
    }
]