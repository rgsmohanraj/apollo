import React, {useState} from "react";
import PageHeader from "../../Components/Common/Page-Header";
import {FilterOutlined, UploadOutlined} from "@ant-design/icons";
import {Col, Row} from "react-bootstrap";
import {Modal, Select, Tabs, DatePicker, Radio, Form} from "antd";
import {productCardData} from "../Partners/mockPartnerData";
import ApprovedTab from "./Tabs/approved";
import RejectedTab from "./Tabs/rejected";
import "./endBorrower.scss";
import InprogressTab from "./Tabs/inprogess";
import AgreementSignedTab from "./Tabs/agreementSigned";
import PennyDropTab from "./Tabs/pennyDrop";
import DisbursedTab from "./Tabs/disbursed";
import WelcomeKitTab from "./Tabs/welcomeKit";
import ButtonComponent from "../../Components/Common/Button";

const { RangePicker } = DatePicker;
const EndBorrowers = () =>{

    const [addEndBorrowerFilter, setAddEndBorrowerFilter] = useState(false);

    const handleEndBorrowerFilter = () => {
        setAddEndBorrowerFilter(true);
    };


    const filterButton = <ButtonComponent hasTitle={true} title="Filter" hasPrefixIcon={true} prefixIcon={<FilterOutlined className="color-primary fw-600" />} style="secondary" rootClassName="fw-600 fs-14 lh-18" onClick={handleEndBorrowerFilter}/>;

    const productsDropdown = productCardData.map((product, index) => ({
        label: product.title,
        value: index.toString(),
    }));

    // Tab Items
    const tabItems = [
        {
            key : '1',
            label: 'Approved',
            children: <ApprovedTab />
        },
        {
            key : '2',
            label: 'Rejected',
            children: <RejectedTab />
        },
        {
            key : '3',
            label: 'In Progress',
            children: <InprogressTab />
        },
        {
            key : '4',
            label: 'Agreement Signed',
            children: <AgreementSignedTab />
        },
        {
            key : '5',
            label: 'Penny Drop',
            children: <PennyDropTab />
        },
        {
            key : '6',
            label: 'Disbursed',
            children: <DisbursedTab />
        },
        {
            key : '7',
            label: 'Welcome Kit',
            children: <WelcomeKitTab />
        }
    ];

    return(
        <div className="end-borrower-page">
            {/*Page Header*/}
            <PageHeader
                title="End Borrowers"
                isSearchEnabled={true}
                isLargeButton={true}
                largeButtonTitle="Bulk Upload"
                largeButtonPrefixIcon={<UploadOutlined />}
                isLargeButtonPrefixIcon={true}
                largeButtonRootClassName="ms-2"
                isDynamicSearchTitle={true}
                searchTitle="Application ID, Unique ID, KYC ID"
            />

            {/*Partner Product Selection*/}
            <Row className="mb-24px">
                <Col lg={3}>
                    <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter pb-8px m-0">Partner</p>
                    <Select
                        options={productsDropdown}
                        className="w-100"
                        placeholder={`Please Select Partner`}
                    />
                </Col>
                <Col lg={3}>
                    <p className="fs-14 fw-500 color-tooltip-bg lh-18 ff-inter pb-8px m-0">Product</p>
                    <Select
                        options={productsDropdown}
                        className="w-100"
                        placeholder={`Please Select Partner`}
                    />
                </Col>
            </Row>

            {/*End Borrower Tabs*/}
            <Tabs tabBarExtraContent={filterButton} defaultActiveKey="1" items={tabItems} rootClassName="end-borrower-tab"/>

            <Modal
                title="Filter"
                centered
                open={addEndBorrowerFilter}
                onOk={() => setAddEndBorrowerFilter(false)}
                onCancel={() => setAddEndBorrowerFilter(false)}
                className="filter-dialoge bg-main-white card-box-shadow"
                okText="Apply"
                cancelText="Clear"
                okButtonProps={{ className: 'confirmation-dialog-ok-button ff-inter fw-600 w-auto gradient-primary gray-box-shadow height-32 border-0'}}
                cancelButtonProps={{ className: 'confirmation-dialog-cancel-button ff-inter fw-600 w-auto bg-main-white color-primary height-32' }}
            >
                {/*Filter Form*/}
                <Row className="pb-12px">
                    <Col lg={4} className="d-flex justify-content-start align-items-center">
                        <div className="fs-14 fw-400 lh-18 color-heading-text">Date Range</div>
                    </Col>
                    <Col lg={8}>
                        <RangePicker />
                    </Col>
                </Row>
                <Row className="pb-12px">
                    <Col lg={4} className="d-flex justify-content-start align-items-center">
                        <div className="fs-14 fw-400 lh-18 color-heading-text">Dedupe</div>
                    </Col>
                    <Col lg={8}>
                            <Radio.Group className="radio-div ff-inter fs-14 lh-18 color-character">
                                <Radio value="unique">Unique</Radio>
                                <Radio value="duplicate">Duplicate</Radio>
                                <Radio value="both">Both</Radio>
                            </Radio.Group>
                    </Col>
                </Row>
                <Row className="pb-12px">
                    <Col lg={4} className="d-flex justify-content-start align-items-center">
                        <div className="fs-14 fw-400 lh-18 color-heading-text">Initial Filter</div>
                    </Col>
                    <Col lg={8}>
                        <Radio.Group className="radio-div ff-inter fs-14 lh-18 color-character">
                            <Radio value="pass">Pass</Radio>
                            <Radio value="fail">Fail</Radio>
                        </Radio.Group>
                    </Col>
                </Row>
                <Row className="pb-12px">
                    <Col lg={4} className="d-flex justify-content-start align-items-center">
                        <div className="fs-14 fw-400 lh-18 color-heading-text">KYC Check</div>
                    </Col>
                    <Col lg={8}>
                        <Radio.Group className="radio-div ff-inter fs-14 lh-18 color-character">
                            <Radio value="pass">Pass</Radio>
                            <Radio value="fail">Fail</Radio>
                        </Radio.Group>
                    </Col>
                </Row>
                <Row className="pb-12px">
                    <Col lg={4} className="d-flex justify-content-start align-items-center">
                        <div className="fs-14 fw-400 lh-18 color-heading-text">Credit Filter</div>
                    </Col>
                    <Col lg={8}>
                        <Radio.Group className="radio-div ff-inter fs-14 lh-18 color-character">
                            <Radio value="pass">Pass</Radio>
                            <Radio value="fail">Fail</Radio>
                        </Radio.Group>
                    </Col>
                </Row>
            </Modal>
        </div>
    );
}
export default EndBorrowers;