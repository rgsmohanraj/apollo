import React from "react";
import {Modal} from "antd";
import TableComponent from "../../../TableComponent/TableComponent";
import {dedupeColumn, dedupeModalData} from "../../../../Pages/EndBorrowers/MockData/mockEndBorrowerData";

const DedupeModal = ({dedupeModal, setDedupeModal}) => {
    return (

        <Modal
            title="DEDUPE MODAL"
            centered
            open={dedupeModal}
            onCancel={() => setDedupeModal(false)}
            className="dedupe-dialoge bg-main-white card-box-shadow"
            footer={null}
        >
            <TableComponent
                Columns={dedupeColumn}
                dataSource={dedupeModalData}
                pagination={false}
            />
        </Modal>
    );
};

export default DedupeModal;