import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Col, Row, Form } from "react-bootstrap";
import PageHeader from "../../Components/Common/Page-Header";
import InputComponent from "../../Components/Common/Input";
import RadioComponent from "../../Components/Common/RadioComponent";
import ButtonComponent from "../../Components/Common/Button";
import TableComponent from "../../Components/TableComponent/TableComponent";
import ModalComponent from "../../Components/Common/Modal";
import { docMasterColumn, docMasterData } from "./document-master-data";
import { DocumentMasterFields } from "./doc-master-fields";
import axios from 'axios';
import "./style.scss"

const DocumentMaster = () => {
    const [isDocModal, setIsDocModal] = useState(false);
    const [documentMasterForm, setDocumentMasterForm] = useState({});
    const showTotal = (total, range) => `Showing ${range[0]}-${range[1]} of ${total} items`;
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
        total: docMasterData.length,
        pageSizeOptions: ["10", "20", "25", "30"],
        locale: { items_per_page: "" },
        showSizeChanger: true,
        items_per_page: '',
        showTotal: showTotal,
    });
    const modalProps = {
        title: "Add Document",
        width: '37.5%',
        onCloseBtnColor: "",
        fontSize: "16px",
        footer: null
    }

    const handleClick = () => {
        setIsDocModal(false);
    }
    const handleClickModelopen = () => {
        setIsDocModal(true);
    }
    const handleChange = (e) => {
        const { id, value, checked } = e.target;
        console.log(e.target.name)
        setDocumentMasterForm(prev => ({ ...prev, [id]: checked ? checked : value }))
    }

    useEffect(() => {
        console.log(documentMasterForm)
    }, [documentMasterForm]);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    

    return (
        <>
            <PageHeader title="Document Master" excludePb="true" />
            <div className="add-doc-button-position mb-2">
                <ButtonComponent
                    hasTitle={true}
                    title={<span className="ms-2">Add Document</span>}
                    hasPrefixIcon={true}
                    prefixIcon={<PlusOutlined className="fs-14" />}
                    rootClassName="add-doc-button fw-600 lh-18 fs-14"
                    onClick={handleClickModelopen}
                />
            </div>
            <div>
                <TableComponent
                    Columns={docMasterColumn}
                    dataSource={docMasterData}
                    pagination={pagination}
                    setPagination={setPagination} />
            </div>
            <ModalComponent open={isDocModal} {...modalProps} onClose={() => setIsDocModal(false)}>
                <div className="line pt-2"></div>
                <Row className='py-4'>
                    {
                        DocumentMasterFields && DocumentMasterFields.map(field => (
                            <React.Fragment key={field.key}>
                                {
                                    field.type === "text" ? (
                                        <Col className="mb-1" lg={12}>
                                            <InputComponent {...field} name={field.name} id={field.id} value={documentMasterForm[field.name]} onChange={handleChange} />
                                        </Col>
                                    ) :
                                        field.type === "heading" ?
                                            (<Col className="fs-12 pb-2" lg={12}>
                                                <span>{field.label}</span>
                                            </Col>) :
                                            (<Col lg={field.key === "2" ? '3 pe-0' : field.key === "3" ? '4 p-0' : '5 p-0'}>
                                                <RadioComponent {...field} name={field.name} value={documentMasterForm[field.name]} onChange={handleChange} />
                                            </Col>)
                                }
                            </React.Fragment>
                        ))
                    }
                </Row>
                <div className="add-doc-modal-footer">
                    <ButtonComponent
                        hasTitle={true}
                        title={<span className="">Cancel</span>}
                        rootClassName="fw-600 lh-18 fs-14 me-3"
                        onClick={handleClick}
                    />
                    <ButtonComponent
                        hasTitle={true}
                        title={<span className="">Create</span>}
                        rootClassName="fw-600 lh-18 fs-14"
                        onClick={handleClick}
                        style="primary"
                    />
                </div>
            </ModalComponent>
        </>
    )
}

export default DocumentMaster;