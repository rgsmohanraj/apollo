import React from "react";
import {Checkbox, Table} from "antd";
import {Row} from "react-bootstrap";
import "./style.scss";
import ButtonComponent from "../Common/Button";
import {getPartnerList} from "../../Services/Implementation/partnerServiceImpl";


const TableComponent = ({
                            Columns,
                            customClassName,
                            dataSource,
                            pagination,
                            setPagination,
                            scroll,
                            width,
                            isZeroPadding,
                            excludePadding,
                            footerContent
                        }) => {
    const handleTableChange = (pagination) => {
        setPagination((prevPagination) => ({
            ...prevPagination,
            current: pagination.current,
            pageSize: pagination.pageSize,
        }));
    };

    // Function to handle page size change
    const handlePageSizeChange = (current, pageSize) => {
        setPagination(prevPagination => ({
            ...prevPagination,
            pageSize: pageSize,
            current: 1
        }));
    };

    const filterPopupModifiedColumn = Columns.map((column) => {
        if (column.filters) {
            return {
                ...column,
                filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
                    <div className="table-filter-popup">
                        <div className="pa-12">
                            <Checkbox.Group
                                style={{width: "100%"}}
                                value={selectedKeys}
                                onChange={(selectedValues) => setSelectedKeys(selectedValues)}
                            >
                                {column.filters.map((filter) => (
                                    <Checkbox key={filter.value} value={filter.value}>
                                        {filter.text}
                                    </Checkbox>
                                ))}
                            </Checkbox.Group>
                        </div>
                        <div className="d-flex justify-content-between ptb-8px pa-16 table-filter-popup-footer">
                            <ButtonComponent title="Clear" hasTitle={true} style="secondary" onClick={() => {
                                clearFilters();
                            }} type="button" rootClassName="border-0 box-shadow-none p-0 fs-12 fw-500"/>
                            <ButtonComponent title="Apply" hasTitle={true} style="secondary" onClick={() => {
                                confirm();
                            }} type="button" rootClassName="border-0 box-shadow-none p-0 fs-12 fw-500"/>
                        </div>
                    </div>
                ),
                onFilter: (value, record) => record[column.dataIndex] === value
            };
        } else {
            return column;
        }
    });

    return (

        <Row
            className={`bg-white ${excludePadding === undefined ? 'pa-24' : ''} m-0 table-wrapper`}>
            <Table
                columns={filterPopupModifiedColumn}
                dataSource={dataSource}
                pagination={{
                    ...pagination,
                    onShowSizeChange: handlePageSizeChange
                }}
                onChange={handleTableChange}
                className={`${customClassName ? customClassName : 'table-container'}`}
                // bordered
                footer={footerContent ? () =>
                    <div className="table-footer">
                        {footerContent}
                    </div> : null
                }
                scroll={scroll}
                width={width}
                rowClassName={(record) => (record.type === 'CHECKED' ? 'checked-row' : '')}
                />
        </Row>
    );
};

export default TableComponent;