import httpBaseConfig from "../Config/httpBaseConfig";

const partnerService = {
    partnerSearch: async (pageNumber, pageSize, sortOrder, type, name) => {
        try {
            const response = await httpBaseConfig.get('/partner-search', {
                params: {
                    pageNumber,
                    pageSize,
                    sortOrder,
                    type,
                    name
                }
            });
            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getPartnerById: async (partnerId) => {
        try {
            const response = await httpBaseConfig.get(`/partner/${partnerId}`);
            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default partnerService;