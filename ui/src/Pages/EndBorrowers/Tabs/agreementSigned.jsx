import React from "react";
import {inprogressTabColumn, inprogressTabDataSource} from "../MockData/mockEndBorrowerData";
import {EyeOutlined, UploadOutlined} from "@ant-design/icons";
import TableComponent from "../../../Components/TableComponent/TableComponent";

const AgreementSignedTab = () => {
    let agreementSignedColumns = inprogressTabColumn.filter(column => column.dataIndex !== 'noOfDocsReceived');
    agreementSignedColumns = agreementSignedColumns.concat( {
        title: 'DOCUMENTS',
        dataIndex: 'documents',
        key: 'documents',
        render: (text, record) => (
            <div>
                <EyeOutlined className="fs-16 color-primary" />
                <UploadOutlined className="fs-16 color-primary ms-3" />
            </div>
        )
    })

    return (
        <>
            <TableComponent
                Columns={agreementSignedColumns}
                dataSource={inprogressTabDataSource}
            />
        </>
    )
};

export default AgreementSignedTab;