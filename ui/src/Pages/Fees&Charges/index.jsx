import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../Components/Common/Page-Header";
import { feesChargesTableColumn, feesChargesTableData } from "./mockFeesAndCharges";
import TableComponent from "../../Components/TableComponent/TableComponent";
import "./feesAndCharges.scss";

import { paginationConfig } from "../../Config/paginationBaseConfig";
import { getResourceList } from "../../Services/Implementation/commonServiceImpl";

const FeesandCharges = () => {
    const showTotal = (total, range) => `Showing ${range[0]}-${range[1]} of ${total} items`;
    const navigate = useNavigate();
    // const [pagination, setPagination] = useState({
    //     current: 1,
    //     pageSize: 10,
    //     total: feesChargesTableData.length,
    //     pageSizeOptions: ["10", "20", "25", "30"],
    //     locale: { items_per_page: "" },
    //     showSizeChanger: true,
    //     items_per_page: '',
    //     showTotal: showTotal,
    // });
    const [feesandChargesData, setFeesandChargesData] = useState([]);
    const [pagination, setPagination] = useState(paginationConfig);
    const [feesChargesGridColumn, setFeesChargesGridColumn] = useState(feesChargesTableColumn);
    const param = { chargeType:85, feesChargeType: 87 }
    useEffect(() => {
        getResourceList('fees-charges', pagination.current, pagination.pageSize, setFeesandChargesData, setPagination,param );
        // setFeesChargesGridColumn(() => {
        //     return feesChargesGridColumn.map((column, index) => {
        //         if (column.dataIndex === 'chargeType') {
        //             console.log({ ...feesandChargesData?.chargeTypes }, "filter")
        //             return { ...column, filters: { ...feesandChargesData?.chargeTypes } }
        //         }
        //     })
        // })
    }, [pagination.current, pagination.pageSize]);

    useEffect(() => {
        if (feesandChargesData && feesandChargesData.chargeTypes) {
            setFeesChargesGridColumn(prevColumns => {
                return prevColumns.map(column => {
                    if (column.dataIndex === 'chargeType') {
                        console.log([ ...feesandChargesData?.chargeTypes ],"fees",feesChargesGridColumn)
                        return {
                            ...column,
                            // filters: [...feesandChargesData?.chargeTypes ]
                            filters:feesandChargesData.chargeTypes.map(chargeType => ({
                                text: chargeType.name,
                                value: chargeType.id
                            }))
                        };
                    }
                    console.log(prevColumns,"column");
                    return column;
                });
            });
        }
    }, [feesandChargesData]);

    const onPlusClick = () => {
        navigate("/fees-and-charges/create");
    }

    return (
        <div className="fees-and-charges-page">
            {/*Header Section*/}
            <PageHeader title="Fees & Charges" handleClick={onPlusClick} isCreateEnabled={true} isSearchEnabled={true} />


            {/*Table Section*/}
            <div>
                <TableComponent
                    Columns={feesChargesGridColumn}
                    dataSource={feesandChargesData?.results}
                    pagination={pagination}
                    setPagination={setPagination} />
            </div>

        </div>
    );
}
export default FeesandCharges;