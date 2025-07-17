import {Link} from "react-router-dom";
import React from "react";
import {Badge} from "react-bootstrap";

const feesChargesTableColumn = [
    {
        title: 'CHARGES NAME',
        dataIndex: 'chargeName',
        key: 'chargeName',
        sorter: (a, b) => a.chargeName.localeCompare(b.chargeName),
        render: (text, record) => (
            <Link to={`/fees-and-charges/view/${record.partner_id}`} className="plain-link color-primary">
                {text}
            </Link>
        )
    },
    {
        title: 'CHARGE TYPE',
        dataIndex: 'chargeType',
        key: 'chargeType',
        filters: [],
        // onFilter: (value, record, filters) => record['chargeType'] === value
    },
    {
        title: 'FEE/CHARGE TYPE',
        dataIndex: 'feesChargeType',
        key: 'feesChargeType',
        filters: [],
        // render: text => (
        //     <div className="fees-and-charges-datapoint">
        //         <Badge className={`fees-and-charges-table-badge ${text === true ? 'fees-and-charges-active color-success' : 'fees-and-charges-inactive color-inactive'}`}>{text == false? 'No' : 'Yes'}</Badge>
        //     </div>
        // )
    },
    {
        title: 'STATUS',
        dataIndex: 'status',
        key: 'status',
        render: text => (
            <div className="fees-and-charges-datapoint">
                <Badge className={`fees-and-charges-table-badge ${text === true ? 'fees-and-charges-active color-success' : 'fees-and-charges-inactive color-inactive'}`}>{text === true ? 'Active' : 'Inactive'}</Badge>
            </div>
        )
    },
];

const feesChargesTableData = [
    {
        "partner_name": "Early Salary Services Pvt Ltd charges",
        "partner_id": "PN5623200",
        "charge_to": "Loan",
        "penalty": false,
        "status": "Active"
    },
    {
        "partner_name": "Smart Coin Financials Pvt Ltd charges",
        "partner_id": "PN5623200",
        "charge_to": "Loan",
        "penalty": false,
        "status": "Active"
    },
    {
        "partner_name": "Wortgage finance Private Limited charges",
        "partner_id": "PN5623200",
        "charge_to": "Loan",
        "penalty": false,
        "status": "Active"
    },
    {
        "partner_name": "Amrit Malwa Capital Limited charges",
        "partner_id": "PN5623200",
        "charge_to": "Loan",
        "penalty": false,
        "status": "Active"
    },
    {
        "partner_name": "Krazybee Services Pvt Ltd charges",
        "partner_id": "PN5623200",
        "charge_to": "Loan",
        "penalty": false,
        "status": "Active"
    },
    {
        "partner_name": "Upwards Capital Pvt Ltd charges",
        "partner_id": "PN5623200",
        "charge_to": "Loan",
        "penalty": false,
        "status": "Active"
    },
    {
        "partner_name": "Dreamplug Technologies Private Limited charges",
        "partner_id": "PN5623200",
        "charge_to": "Loan",
        "penalty": false,
        "status": "Active"
    },
    {
        "partner_name": "Loanzen Finance Pvt Ltd charges",
        "partner_id": "PN5623200",
        "charge_to": "Loan",
        "penalty": false,
        "status": "Active"
    },
    {
        "partner_name": "Moneyboxx Finance Limited charges",
        "partner_id": "PN5623200",
        "charge_to": "Loan",
        "penalty": false,
        "status": "Active"
    },
    {
        "partner_name": "Upmoney Limited charges",
        "partner_id": "PN5623200",
        "charge_to": "Loan",
        "penalty": false,
        "status": "Active"
    },
    {
        "partner_name": "Tech Finance Solutions charges",
        "partner_id": "PN7890123",
        "charge_to": "Loan",
        "penalty": false,
        "status": "Active"
    },
    {
        "partner_name": "Innovative Capital Ventures charges",
        "partner_id": "PN4567890",
        "charge_to": "Loan",
        "penalty": false,
        "status": "Active"
    },
    {
        "partner_name": "Swift Funding Corporation charges",
        "partner_id": "PN6789012",
        "charge_to": "Loan",
        "penalty": false,
        "status": "Active"
    },
    {
        "partner_name": "Global Money Solutions charges",
        "partner_id": "PN3456789",
        "charge_to": "Loan",
        "penalty": false,
        "status": "Active"
    },
    {
        "partner_name": "Express Finance Ltd charges",
        "partner_id": "PN9012345",
        "charge_to": "Loan",
        "penalty": false,
        "status": "Active"
    },
    {
        "partner_name": "Digital Capital Ventures charges",
        "partner_id": "PN2345678",
        "charge_to": "Loan",
        "penalty": false,
        "status": "Active"
    },
    {
        "partner_name": "Swift Innovations Ltd charges",
        "partner_id": "PN5678901",
        "charge_to": "Loan",
        "penalty": false,
        "status": "Active"
    },
    {
        "partner_name": "TechFin Solutions Pvt Ltd charges",
        "partner_id": "PN6789012",
        "charge_to": "Loan",
        "penalty": false,
        "status": "Active"
    },
    {
        "partner_name": "Dynamic Finance Corporation charges",
        "partner_id": "PN3456789",
        "charge_to": "Loan",
        "penalty": false,
        "status": "Active"
    }
];

export {feesChargesTableColumn, feesChargesTableData};
