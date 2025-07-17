import React from "react";
import {disbursedTabColumn, inprogressTabDataSource} from "../MockData/mockEndBorrowerData";
import {EyeOutlined, UploadOutlined} from "@ant-design/icons";
import TableComponent from "../../../Components/TableComponent/TableComponent";

const DisbursedTab = () => {
    const disbursedColumns = disbursedTabColumn.concat( {
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
              Columns={disbursedColumns}
              dataSource={inprogressTabDataSource}
          />
      </>
  )
};

export default DisbursedTab;