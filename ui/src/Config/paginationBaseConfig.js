export const paginationConfig = {
    current: 1,
    pageSize: 10,
    total: 0,
    pageSizeOptions: ["10", "20", "25", "30"],
    locale: { items_per_page: "" },
    showSizeChanger: true,
    items_per_page: '',
    showTotal: (total, range) => `Showing ${range[0]}-${range[1]} of ${total} items`,
};