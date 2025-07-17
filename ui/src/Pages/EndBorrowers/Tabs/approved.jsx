import React, {useState} from "react";
import TableComponent from "../../../Components/TableComponent/TableComponent";
import {approvedTabColumn, approvedTabDataSource} from "../MockData/mockEndBorrowerData";
import {EyeOutlined, UploadOutlined} from "@ant-design/icons";
import DedupeModal from "../../../Components/Common/Modal/DedupeModal";
import {Badge} from "react-bootstrap";
import BureauModal from "../../../Components/Common/Modal/BureauModal";

const ApprovedTab = () => {
    const [dedupeModal, setDedupeModal] = useState(false);
    const [bureauModal, setBureauModal] = useState(false);

    // Adding Download / View documents column
    const approvedColumns = [
        ...approvedTabColumn,
        {
            title: 'DOCUMENTS',
            dataIndex: 'documents',
            key: 'documents',
            render: (text, record) => (
                <div>
                    <EyeOutlined className="fs-16 color-primary" />
                    <UploadOutlined className="fs-16 color-primary ms-3" />
                </div>
            )
        }
    ];

    const updatedColumns = approvedColumns.map(column => {
        if (column.dataIndex === 'dedupe') {
            return {
                ...column,
                render: text => (
                    <div className="fees-and-charges-datapoint">
                        {text !== "" ?
                            (
                                <Badge className={`fees-and-charges-table-badge ${text === "Unique" ? 'fees-and-charges-active color-success' : 'fees-and-charges-inactive color-inactive'}`} onClick={() => setDedupeModal(true)}>{text}</Badge>
                            ) :
                            (
                                <>---</>
                            )
                        }
                    </div>
                )
            };
        }

        if (column.dataIndex === 'bureauCheck') {
            return {
                ...column,
                render: text => (
                    text == 0 ?
                        (
                            <>---</>
                        ) :
                        ((text > 500) ?
                                (<div  onClick={() => setBureauModal(true)}>{text}</div>) : (<div className="color-inactive" onClick={() => setBureauModal(true)}>{text}</div>)
                        )
                )
            };
        }
        return column;
    });

    return (
        <>
            <TableComponent
                Columns={updatedColumns}
                dataSource={approvedTabDataSource}
            />

            <DedupeModal dedupeModal={dedupeModal} setDedupeModal={setDedupeModal} />
            <BureauModal bureauModal={bureauModal} setBureauModal={setBureauModal} />
        </>
    )
};

export default ApprovedTab;