import React from "react";
import {approvedTabColumn, rejectedTabDataSource} from "../MockData/mockEndBorrowerData";
import {EyeOutlined} from "@ant-design/icons";
import TableComponent from "../../../Components/TableComponent/TableComponent";

const RejectedTab = () => {
    // Adding Download / View documents column
    const rejectedColumns = approvedTabColumn.concat( {
        title: 'DOCUMENTS',
        dataIndex: 'documents',
        key: 'documents',
        render: (text, record) => (
            <div>
                <EyeOutlined className="fs-16 color-primary" />
            </div>
        )
    })

    return (
        <>
            <TableComponent
                Columns={rejectedColumns}
                dataSource={rejectedTabDataSource}
            />
        </>
    )
};

export default RejectedTab;