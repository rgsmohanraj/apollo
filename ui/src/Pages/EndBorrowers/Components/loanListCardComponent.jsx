import React from "react";
import {Card} from "react-bootstrap";
import TableComponent from "../../../Components/TableComponent/TableComponent";
import {loanListColumn, loanListDataSource} from "../MockData/mockEndBorrowerData";
import {EyeOutlined, RightCircleOutlined, UploadOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const LoanListCardComponent = () => {
    const loanDataSource = loanListDataSource.slice(0,4);

    const loanColum = [
        ...loanListColumn,
        {
            title: '',
            dataIndex: 'viewMore',
            key: 'viewMore',
            render: (text, record) => (
                <div>
                    <RightCircleOutlined className="fs-16 color-primary" />
                </div>
            )
        }
    ]

    return (
            <Card className="pa-16 border-0 br-4px gray-box-shadow flex-fill">
                <Card.Title className="ff-poppins fw-600 fs-18 lh-28 color-heading-text p-0 mb-16px">
                    Loans
                </Card.Title>
                <Card.Body className="p-0 mb-16px">
                    <TableComponent pagination={false} Columns={loanColum} dataSource={loanDataSource} excludePadding={true}/>
                </Card.Body>
                <Link to="" className="plain-link color-primary fs-14 fw-500 lh-18 w-100 d-flex justify-content-center">Load more</Link>
            </Card>
    );
};

export default LoanListCardComponent;