import React from "react";
import TableComponent from "../../../TableComponent/TableComponent";
import {
    bureauColumn,
    bureauModalData
} from "../../../../Pages/EndBorrowers/MockData/mockEndBorrowerData";
import {Modal} from "antd";

const BureauModal = ({bureauModal, setBureauModal}) => {
    return (
        <Modal
            title="Bureau"
            centered
            open={bureauModal}
            onCancel={() => setBureauModal(false)}
            className="bureau-dialoge bg-main-white card-box-shadow"
            footer={null}
        >
            <TableComponent
                Columns={bureauColumn}
                dataSource={bureauModalData}
                pagination={false}
            />
        </Modal>
    );
};

export default BureauModal;