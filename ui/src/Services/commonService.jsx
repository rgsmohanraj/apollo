import httpBaseConfig from "../Config/httpBaseConfig";


   export const getAllList = async (resourceType, pageNumber, pageSize,param, sortOrder, type, name ) => {
        try {
            const response = await httpBaseConfig.get(`/${resourceType}-search`, {
                params: {
                    pageNumber,
                    pageSize,
                    ...param,
                    sortOrder,
                    type,
                    name
                }
            });
            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    }

   export const getListById = async (resourceType, resourceID) => {
        try {
            const response = await httpBaseConfig.get(`/${resourceType}/${resourceID}`);
            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    }