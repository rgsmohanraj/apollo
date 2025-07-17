import React from "react";
import {Card} from "react-bootstrap";
import ButtonComponent from "../../../Components/Common/Button";
import {DownloadOutlined} from "@ant-design/icons";
import {Timeline} from "antd";
import {mockTimelineData} from "../MockData/mockEndBorrowerData";

const EndBorrowerTimelineCardComponent = ({timelineData}) => {
    return (
        <Card className="border-0 pa-16 gray-box-shadow br-4px">
            <Card.Title className="d-flex mb-16px">
                <div className="ff-poppins fw-600 fs-18 lh-28 color-heading-text p-0">Timeline</div>
            </Card.Title>
            <Card.Body className="p-0 card-timeline">
                <Timeline items={mockTimelineData} />
            </Card.Body>
        </Card>
    );
};

export default EndBorrowerTimelineCardComponent;