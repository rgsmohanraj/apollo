import partnerService from "../partnerService";
import {showErrorToast} from "../../Util/notificationUtil";

export const getPartnerList = (pageNumber, pageSize, dataSetter, paginationSetter) => {
    return partnerService
        .partnerSearch(pageNumber, pageSize)
        .then(response => {
            const { results, totalRecords } = response.responseBody;
            dataSetter(results);
            paginationSetter(prevPagination => ({
                ...prevPagination,
                total: totalRecords
            }));
        })
        .catch(error => {
            showErrorToast("Error fetching partners list data: " + error.message);
        });
}

export const getPartnerDetailById = (partnerID, dataSetter) => {
    return partnerService
        .getPartnerById(partnerID)
        .then(response => {
            dataSetter(response.responseBody)
        })
        .catch(error => {
            showErrorToast("Error fetching partner data: " + error.message);
        })
}