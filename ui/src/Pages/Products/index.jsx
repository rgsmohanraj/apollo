
import React, { useEffect, useState } from "react";
import './style.scss'
import { Form, Table, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import jsonData from './data.json'
import PageHeader from "../../Components/Common/Page-Header";
import ModalComponent from "../../Components/Common/Modal";
import ButtonComponent from "../../Components/Common/Button";
import TableComponent from "../../Components/TableComponent/TableComponent";
import SelectComponent from "../../Components/Common/Select";

const Products = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [isModal, setIsModal] = useState(false);
    const navigate = useNavigate();
    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'productname',
            sorter: (a, b) => {
                if (a.partnername && b.partnername) {
                    return a.partnername.localeCompare(b.partnername);
                }
                return 0;
            },
            render: (text, record) => (
                <Link to={`/products/view/${record.key}`} className="plain-link color-primary">
                    {text}
                </Link>
            ),
            key: 'productname',
            width: '22%',

        },
        {
            title: 'Partner Name',
            dataIndex: 'partnername',
            key: 'partnername',
            width: '22%',
            render: (text, record) => (
                <Link to={`/partners/view/${record.partnerid}`} className="plain-link color-primary">
                    {text}
                </Link>
            ),

        },
        {
            title: 'Partnership',
            dataIndex: 'partnership',
            key: 'partnership',
            width: '15%'
        },
        {
            title: 'Assest Class',
            dataIndex: 'assestclass',
            width: '22%',
            key: 'assestclass',
            filters: [
                { text: 'Commercial Vehicle-New', value: '1' },
                { text: 'Commercial Vehicle-Used', value: '2' },
                { text: 'Stock', value: '3' },
                { text: 'Education', value: '4' },
                { text: 'MFI', value: '5' }
            ],
            onFilter: (value, record) => record.type === value,
        },

        {
            title: 'Approved Limit',
            dataIndex: 'approvedlimit',
            width: '18%',
            key: 'approvedlimit',
            render: (text) => <div className="fw-600">{text}</div>
        },
        {
            title: 'Status',
            dataIndex: 'status',
            width: '15%',
            key: 'status',
            filters: [
                { text: 'Active', value: '1' },
                { text: 'Inprogress ', value: '2' },
            ],
            onFilter: (value, record) => record.type === value,
            render: (status) => <div className='product-status' style={getStatusStyle(status.toLowerCase())}>{status}</div>
        }

    ];
    const columnsWithUpperCase = columns.map(column => ({
        ...column,
        title: column.title.toUpperCase()
    }));
    const showTotal = (total, range) => `Showing ${range[0]}-${range[1]} of ${total} items`;
    const [tableLength, setTableLength] = useState(0);
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 10,
            total: tableLength,
            pageSizeOptions: ["10", "20", "25", "30"],
            locale: { items_per_page: "" },
            showSizeChanger: true,
            items_per_page: '',
            showTotal: showTotal,
        },
    });
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setData(jsonData);
            setTableLength(jsonData.length);
            setLoading(false);
        });
    }, [data]);

    const handleTableChange = (pagination) => {
        setTableParams((prevPagination) => ({
            ...prevPagination,
            current: pagination.current,
            pageSize: pagination.pageSize,
        }));

        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
            setData([]);
        }
    };

    const active = {
        backgroundColor: 'rgba(227, 254, 229, 1)',
        color: 'rgba(61, 189, 72, 1)',
        width: '49px',
    }

    const inprogress = {
        backgroundColor: 'rgba(254, 243, 233, 1)',
        color: 'rgba(245, 130, 32, 1)',
        width: '74px',
    }

    const inactive = {
        backgroundColor: 'rgba(245, 245, 245, 1)',
        color: 'rgba(147, 149, 152, 1)',
        width: '58px'
    }
    const getStatusStyle = (status) => {
        switch (status) {
            case 'active':
                return active;
            case 'inprogress':
                return inprogress;
            case 'inactive':
                return inactive;
            default:
                return {};
        }
    };
    const onPlusClick = () => {
        setIsModal(true);
    }
    const modalProps = {
        title: "Choose Partner",
        width: '37%',
        onCloseBtnColor: "",
        fontSize: "16px",
        footer: null
    }
    const partnerSelect = {
        type: "select",
        key: "1",
        label: "Partner",
        name: "Partner",
        placeholder: "Please Select",
        required: false,
        errorMsg: "Please Enter Partner",
        initialValues: "",
        options: [
            {
                value: "1",
                label: "Amrit Malwa Capital Limited",
            }
        ]
    }
    const navigateProductSchema = () => {
        navigate("/products/create/product-schema");
    }
   
    return (
        <div className="product">
            <PageHeader title="Products" handleClick={onPlusClick} isCreateEnabled={true} isSearchEnabled={true} isBreadcrumbPresent={false} />
            <TableComponent
                dataSource={data}
                Columns={columnsWithUpperCase}
                pagination={tableParams.pagination}
                setPagination={handleTableChange}
                customClassName="products-table-container"
            />
            <ModalComponent open={isModal} {...modalProps} onClose={() => setIsModal(false)}>
                <div className="py-3 px-0" layout="vertical">
                    <SelectComponent {...partnerSelect} name={partnerSelect.name} />

                    <div className="w-100 d-flex justify-content-center align-items-center">
                        <ButtonComponent
                            //  type="button" 
                            //  hasTitle={true}
                            //  title={<Link className="plain-link"
                            //  to="/products/create/productdetails"></Link>

                            style="primary"
                            hasTitle={true}
                            title="Proceed"
                            rootClassName="fw-600 lh-18 fs-14"
                            onClick={navigateProductSchema}
                        />
                    </div>
                </div>
            </ModalComponent>
        </div>
    );
}
export default Products;