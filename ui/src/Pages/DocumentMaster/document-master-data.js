import {Link} from "react-router-dom";
import React from "react";

const docMasterColumn = [
    {
        title: 'DOCUMENT NAME',
        dataIndex: 'document_name',
        key: 'document_name',
    },
    {
        title: 'CATEGORY',
        dataIndex: 'category',
        key: 'category',
        filters: [
            { text: 'Create Loan', value: '1' },
            { text: 'Agreement Signed', value: '2' },
            { text : 'Post Disbursement Document', value: '3'}
        ],
        onFilter: (value, record) => record.type === value
    },
    {
        title: 'CREATED ON',
        dataIndex: 'created_on',
        key: 'created_on'
    }
];

const docMasterData = [
    {
        "document_name": "Application Form",
        "category": "Create Loan",
        "created_on": "20 Sep 2022"
    },
    {
        "document_name": "Applicant Photo",
        "category": "Create Loan",
        "created_on": "20 Sep 2022"
    },{
        "document_name": "ID proof",
        "category": "Create Loan",
        "created_on": "20 Sep 2022"
    },{
        "document_name": "Residence Address proof",
        "category": "Create Loan",
        "created_on": "20 Sep 2022"
    },{
        "document_name": "Business Address Proof",
        "category": "Create Loan",
        "created_on": "20 Sep 2022"
    },{
        "document_name": "Loan application form",
        "category": "Agreement Signed",
        "created_on": "20 Sep 2022"
    },{
        "document_name": "Self declaration letter",
        "category": "Agreement Signed",
        "created_on": "20 Sep 2022"
    },{
        "document_name": "Fatca declaration",
        "category": "Agreement Signed",
        "created_on": "20 Sep 2022"
    },{
        "document_name": "Entire set of loan agreements",
        "category": "Agreement Signed",
        "created_on": "20 Sep 2022"
    },{
        "document_name": "Guarantor agreements",
        "category": "Agreement Signed",
        "created_on": "20 Sep 2022"
    },{
        "document_name": "UMRN Number",
        "category": "Post Disbursement Document",
        "created_on": "20 Sep 2022"
    },{
        "document_name": "Vehicle Reg. Number",
        "category": "Post Disbursement Document",
        "created_on": "20 Sep 2022"
    },{
        "document_name": "Vehicle RC document",
        "category": "Post Disbursement Document",
        "created_on": "20 Sep 2022"
    },
];


export {docMasterColumn,docMasterData};