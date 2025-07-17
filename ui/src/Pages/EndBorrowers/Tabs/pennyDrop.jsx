import React from "react";
import {approvedTabDataSource, pennyDropTabColumn} from "../MockData/mockEndBorrowerData";
import {EyeOutlined} from "@ant-design/icons";
import TableComponent from "../../../Components/TableComponent/TableComponent";

const PennyDropTab = () => {

    const pennyDropColumn = pennyDropTabColumn.concat( {
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
                Columns={pennyDropColumn}
                dataSource={approvedTabDataSource}
            />
        </>
    );
};

export default PennyDropTab;