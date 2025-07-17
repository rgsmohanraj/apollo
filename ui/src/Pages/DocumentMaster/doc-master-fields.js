export const DocumentMasterFields = [
    {
        type: "text",
        key: "1",
        label: "Name",
        name: "name",
        id:"name",
        placeholder: "Enter Name",
        required: false,
        errorMsg: "Please Enter Name"
    },
    {
        type: "heading",
        label: "Category"
    },
    {
        type: "radio",
        key: "2",
        label: "Create Loan",
        name:"radio",
        id: "createloan",
        defaultChecked: true,
        required: false,
        value: 1,
        errorMsg: "Please Enter Create Loan"
    },
    {
        type: "radio",
        key: "3",
        label: "Agreement Signed",
        name:"radio",
        id: "agreementsigned",
        defaultChecked: false,
        required: false,
        value: 2,
        errorMsg: "Please Enter Agreement Signed"
    },
    {
        type: "radio",
        key: "4",
        label: "Post Disbursement Document",
        name:"radio",
        id: "postdisbursementdocument",
        defaultChecked: false,
        required: false,
        value: 3,
        errorMsg: "Please Enter Post Disbursement Document"
    },
]