import React from "react";
import {inprogressTabDataSource, welcomKitTabColumn} from "../MockData/mockEndBorrowerData";
import {EyeOutlined, UploadOutlined} from "@ant-design/icons";
import TableComponent from "../../../Components/TableComponent/TableComponent";

const WelcomeKitTab = () => {
    const welcomKitColumns = welcomKitTabColumn.concat( {
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
                Columns={welcomKitColumns}
                dataSource={inprogressTabDataSource}
            />
        </>
    );
};

export default WelcomeKitTab;