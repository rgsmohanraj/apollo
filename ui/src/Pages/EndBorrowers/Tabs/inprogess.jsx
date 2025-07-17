import React from "react";
import {inprogressTabColumn, inprogressTabDataSource} from "../MockData/mockEndBorrowerData";
import {EyeOutlined, UploadOutlined} from "@ant-design/icons";
import TableComponent from "../../../Components/TableComponent/TableComponent";

const InprogressTab = () => {

    const inprogressColumns = inprogressTabColumn.concat( {
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
                Columns={inprogressColumns}
                dataSource={inprogressTabDataSource}
            />
        </>
    )
};

export default InprogressTab;