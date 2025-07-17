import {getAllList, getListById} from "../commonService";
import {showErrorToast} from "../../Util/notificationUtil";

export const getResourceList = (resourceType, pageNumber, pageSize, dataSetter, paginationSetter, param) => {
    return getAllList(resourceType, pageNumber, pageSize, param)
        .then(response => {
            const { results, totalRecords } = response.responseBody;
            console.log(response.responseBody,"results")
            dataSetter(response.responseBody);
            paginationSetter(prevPagination => ({
                ...prevPagination,
                total: totalRecords
            }));
        })
        .catch(error => {
            showErrorToast(`Error fetching ${resourceType} list data: ${error.message}`);
        });
}

export const getResourceListById = (resourceType, resourceID, dataSetter) => {
    return getListById(resourceType, resourceID)
        .then(response => {
            dataSetter(response.responseBody)
        })
        .catch(error => {
            showErrorToast(`Error fetching ${resourceType} data: ${error.message}`);

        })
}