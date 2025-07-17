export const ReportsFields = [
    {
        type:"select",
        key:"1",
        label:"Partner",
        name:"partner",
        placeholder:"Early Salary Service Private Limited",
        required:false,
        errorMsg:"Please Enter Loan Product Type",
        initialValues:"Early Salary Service Private Limited",
        options:[
            {
                label:"Early Salary Service Private Limited",
                value:"1"
            }, {
                label:"Early Salary Service Private Limited",
                value:"2"
            }, {
                label:"Early Salary Service Private Limited",
                value:"3"
            },
        ]
    },
    {
        type:"select",
        key:"2",
        label:"Product",
        name:"product",
        placeholder:"SME AutoLending",
        required:false,
        errorMsg:"Please Enter Asset Class",
        initialValues:"SME AutoLending",
        options:[
            {
                label:"SME AutoLending",
                value:"1"
            }, {
                label:"SME AutoLending",
                value:"2"
            }, {
                label:"SME AutoLending",
                value:"3"
            },
        ]
    },
    {
        type:"date",
        key:"3",
        label:"Date",
        name:"date",
        required:false,
        errorMsg:"Please Enter Renewal Date"
    },
    {
        type:"select",
        key:"4",
        label:"Report Type",
        name:"report type",
        placeholder:"Credit-Filter End Borrower",
        required:false,
        errorMsg:"Please Enter Loan Product Class",
        initialValues:"Credit-Filter End Borrower",
        options:[
            {
                label:"Credit-Filter End Borrower",
                value:"1"
            }, {
                label:"Credit-Filter End Borrower",
                value:"2"
            }, {
                label:"Credit-Filter End Borrower",
                value:"3"
            },
        ]
    },
];