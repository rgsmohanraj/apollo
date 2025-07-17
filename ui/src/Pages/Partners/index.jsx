import React, {useState, useEffect} from "react";
import {partnerTableColumn, partnerTableData} from "./mockPartnerData";
import PageHeader from "../../Components/Common/Page-Header";
import TableComponent from "../../Components/TableComponent/TableComponent";
import {useNavigate} from "react-router-dom";
import {getPartnerList} from "../../Services/Implementation/partnerServiceImpl";
import {paginationConfig} from "../../Config/paginationBaseConfig";
import { getResourceList } from "../../Services/Implementation/commonServiceImpl";

const Partners = () =>{
    const navigate = useNavigate();

    const [partnerData, setPartnerData] = useState([]);
    const [pagination, setPagination] = useState(paginationConfig);

    // Fetch partner data when pagination changes
    useEffect(() => {
        // getPartnerList(pagination.current, pagination.pageSize, setPartnerData, setPagination);
        getResourceList('partner', pagination.current, pagination.pageSize, setPartnerData, setPagination);
    }, [pagination.current, pagination.pageSize]);

    // Function to handle pagination change
    const handlePaginationChange = (current, pageSize) => {
        // getPartnerList(current, pageSize, setPartnerData, setPagination);
        getResourceList('partner', pagination.current, pagination.pageSize, setPartnerData, setPagination);
    };

    return(
        <div className="partner-page">
            {/*Header Section*/}
            <PageHeader title="Partners" handleClick={() => (navigate("/partners/onboarding"))} isCreateEnabled={true} isSearchEnabled={true}/>


            {/*Table Section*/}
            <div>
                <TableComponent
                    Columns={partnerTableColumn}
                    dataSource={partnerData?.results}
                    pagination={{
                        ...pagination,
                        onChange: handlePaginationChange
                    }}
                    setPagination={setPagination} />
            </div>

        </div>
    );
}
export default Partners;