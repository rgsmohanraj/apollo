import {Link} from "react-router-dom";
import React from "react";

const partnerTableColumn = [
    {
        title: 'PARTNER NAME',
        dataIndex: 'partnerName',
        key: 'partnerName',
        sorter: (a, b) => a.partnerName.localeCompare(b.partnerName),
        render: (text, record) => (
            <Link to={`/partners/view/${record.id}`} className="partner-name-link plain-link color-primary">
                {text}
            </Link>
        )
    },
    {
        title: 'PARTNER ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'TYPE',
        dataIndex: 'partnerType',
        key: 'partnerType',
        filters: [
            { text: 'NBFC', value: 'NBFC' },
            { text: 'Fintech', value: 'Fintech' },
        ],
        onFilter: (value, record) => record.type === value,
    },
    {
        title: 'APPROVED LIMIT',
        dataIndex: 'approveLimit',
        key: 'approveLimit',
        render: (text) => <div className="fw-600">{text}</div>
    },
    {
        title: 'ACTIVE PRODUCTS',
        dataIndex: 'activeCount',
        key: 'activeCount',
    },
    {
        title: 'INPROGRESS PRODUCTS',
        dataIndex: 'inProgressCount',
        key: 'inProgressCount',
    }
];

const partnerTableData = [
    {
        "partner_name": "Early Salary Services Pvt Ltd",
        "partner_id": "PN5623200",
        "type": "NBFC",
        "approved_limit": "200Cr",
        "active_products": 7,
        "inprogress_products": 0
    },
    {
        "partner_name": "Smart Coin Financials Pvt Ltd",
        "partner_id": "PN5623200",
        "type": "NBFC",
        "approved_limit": "200Cr",
        "active_products": 4,
        "inprogress_products": 2
    },
    {
        "partner_name": "Wortgage finance Private Limited",
        "partner_id": "PN5623200",
        "type": "NBFC",
        "approved_limit": "100Cr",
        "active_products": 6,
        "inprogress_products": 1
    },
    {
        "partner_name": "Amrit Malwa Capital Limited",
        "partner_id": "PN5623200",
        "type": "NBFC",
        "approved_limit": "140Cr",
        "active_products": 7,
        "inprogress_products": 3
    },
    {
        "partner_name": "Krazybee Services Pvt Ltd",
        "partner_id": "PN5623200",
        "type": "Fintech",
        "approved_limit": "200Cr",
        "active_products": 8,
        "inprogress_products": 2
    },
    {
        "partner_name": "Upwards Capital Pvt Ltd",
        "partner_id": "PN5623200",
        "type": "Fintech",
        "approved_limit": "300Cr",
        "active_products": 4,
        "inprogress_products": 1
    },
    {
        "partner_name": "Dreamplug Technologies Private Limited",
        "partner_id": "PN5623200",
        "type": "Fintech",
        "approved_limit": "150Cr",
        "active_products": 5,
        "inprogress_products": 0
    },
    {
        "partner_name": "Loanzen Finance Pvt Ltd",
        "partner_id": "PN5623200",
        "type": "Fintech",
        "approved_limit": "250Cr",
        "active_products": 3,
        "inprogress_products": 1
    },
    {
        "partner_name": "Moneyboxx Finance Limited",
        "partner_id": "PN5623200",
        "type": "NBFC",
        "approved_limit": "400Cr",
        "active_products": 5,
        "inprogress_products": 0
    },
    {
        "partner_name": "Upmoney Limited",
        "partner_id": "PN5623200",
        "type": "NBFC",
        "approved_limit": "350Cr",
        "active_products": 6,
        "inprogress_products": 1
    },
    {
        "partner_name": "Tech Finance Solutions",
        "partner_id": "PN7890123",
        "type": "NBFC",
        "approved_limit": "180Cr",
        "active_products": 3,
        "inprogress_products": 2
    },
    {
        "partner_name": "Innovative Capital Ventures",
        "partner_id": "PN4567890",
        "type": "Fintech",
        "approved_limit": "250Cr",
        "active_products": 6,
        "inprogress_products": 3
    },
    {
        "partner_name": "Swift Funding Corporation",
        "partner_id": "PN6789012",
        "type": "NBFC",
        "approved_limit": "300Cr",
        "active_products": 8,
        "inprogress_products": 1
    },
    {
        "partner_name": "Global Money Solutions",
        "partner_id": "PN3456789",
        "type": "Fintech",
        "approved_limit": "180Cr",
        "active_products": 7,
        "inprogress_products": 2
    },
    {
        "partner_name": "Express Finance Ltd",
        "partner_id": "PN9012345",
        "type": "NBFC",
        "approved_limit": "220Cr",
        "active_products": 4,
        "inprogress_products": 1
    },
    {
        "partner_name": "Digital Capital Ventures",
        "partner_id": "PN2345678",
        "type": "Fintech",
        "approved_limit": "160Cr",
        "active_products": 6,
        "inprogress_products": 0
    },
    {
        "partner_name": "Swift Innovations Ltd",
        "partner_id": "PN5678901",
        "type": "Fintech",
        "approved_limit": "200Cr",
        "active_products": 9,
        "inprogress_products": 2
    },
    {
        "partner_name": "TechFin Solutions Pvt Ltd",
        "partner_id": "PN6789012",
        "type": "NBFC",
        "approved_limit": "280Cr",
        "active_products": 5,
        "inprogress_products": 1
    },
    {
        "partner_name": "Dynamic Finance Corporation",
        "partner_id": "PN3456789",
        "type": "Fintech",
        "approved_limit": "320Cr",
        "active_products": 7,
        "inprogress_products": 3
    }
];

const partnerApplicationDataPoints = {
    "KYC Success": "4,000",
    "Bureau Success": "3,000",
    "Disbursed Loans": "2,500"
};

const partnerLoanValueDataPoints = {
    "Net Disbursement": "₹ 20,00,000",
    "VCL Investment": "₹ 19,00,000",
    "Partner Investment": "₹ 1,00,000"
};

const productCardData = [
    {
        "title": "SME Auto Lending",
        "loanPercentage": "90:10",
        "status": "Active",
        "limit": "1 - 5 lakhs",
        "interestRate": "13 - 15%",
        "tenure": "2 - 5 years"
    },
    {
        "title": "Business Expansion Loan",
        "loanPercentage": "80:20",
        "status": "Inactive",
        "limit": "2 - 7 lakhs",
        "interestRate": "12 - 14%",
        "tenure": "3 - 6 years"
    },
    {
        "title": "Technology Upgrade Loan",
        "loanPercentage": "85:15",
        "status": "Active",
        "limit": "1 - 4 lakhs",
        "interestRate": "14 - 16%",
        "tenure": "2 - 4 years"
    },
    {
        "title": "Home Improvement Loan",
        "loanPercentage": "75:25",
        "status": "Active",
        "limit": "3 - 8 lakhs",
        "interestRate": "11 - 13%",
        "tenure": "4 - 7 years"
    },
    {
        "title": "Education Loan",
        "loanPercentage": "95:5",
        "status": "Inactive",
        "limit": "1 - 10 lakhs",
        "interestRate": "10 - 12%",
        "tenure": "3 - 8 years"
    },
    {
        "title": "Medical Equipment Loan",
        "loanPercentage": "88:12",
        "status": "Active",
        "limit": "2 - 6 lakhs",
        "interestRate": "15 - 18%",
        "tenure": "1 - 3 years"
    }
];

export {partnerTableColumn, partnerTableData, partnerApplicationDataPoints, partnerLoanValueDataPoints, productCardData};