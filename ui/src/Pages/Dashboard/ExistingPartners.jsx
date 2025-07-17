import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import qs from 'qs';
import jsonData from './data.json'
import TableComponent from "../../Components/TableComponent/TableComponent";
// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     sorter: true,
//     render: (name) => `${name.first} ${name.last}`,
//     width: '20%',
//   },
//   {
//     title: 'Gender',
//     dataIndex: 'gender',
//     filters: [
//       {
//         text: 'Male',
//         value: 'male',
//       },
//       {
//         text: 'Female',
//         value: 'female',
//       },
//     ],
//     width: '20%',
//   },
//   {
//     title: 'Email',
//     dataIndex: 'email',
//   },
// ];

const columns = [
  // {
  //   title: 'Partner Name',
  //   dataIndex: 'partnername',
  //   sorter: true,
  //   render: (partnername) => `${partnername}`,
  //   width: '20%',
  // },
  // {
  //   title: 'Partner Name',
  //   dataIndex: 'partnerid',
  //   sorter: true,
  //   render: (partnerid) => `${partnerid}`,
  //   width: '20%',
  // },
  {
    title: 'Partner Name',
    dataIndex: 'partnername',
    sorter: (a, b) => {
      if (a.partnername && b.partnername) {
        return a.partnername.localeCompare(b.partnername);
      }
      return 0;
    },
    render: (partnername) => partnername,
    key: 'partnername',
    width: '22%',
  },
  {
    title: 'Partner ID',
    dataIndex: 'partnerid',
    key: 'partnerid',
    width: '10%',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    width: '10%',
  },
  {
    title: 'Partnership',
    dataIndex: 'partnership',
    key: 'partnership',
    width: '10%',
  },
  {
    title: 'Product Name',
    dataIndex: 'productname',
    key: 'productname',
    width: '18%',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: '10%',
    key: 'status',
  },
  {
    title: 'Product Limit',
    dataIndex: 'productlimit',
    width: '10%',
    key: 'productlimit',
  },
  {
    title: 'Total Limit',
    dataIndex: 'totallimit',
    width: '10%',
    key: 'totallimit',
  },

];

const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});
const ExistingPartners = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
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
  // const fetchData = () => {
  //   setLoading(true);
  //   fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
  //     .then((res) => res.json())
  //     .then(({ results }) => {
  //       setData(results);
  //       setLoading(false);
  //       setTableParams({
  //         ...tableParams,
  //         pagination: {
  //           ...tableParams.pagination,
  //           total: 200,
  //           // 200 is mock data, you should read it from server
  //           // total: data.totalCount,
  //         },
  //       });
  //     });
  // };
  // useEffect(() => {
  //   fetchData();
  //   console.log(data,'data')
  //   console.log(tableParams,'tableParams')
  // }, [JSON.stringify(tableParams)]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setData(jsonData);
      setTableLength(jsonData.length);
      setLoading(false);
      // setTableParams({
      //   ...tableParams,
      //   pagination: {
      //     ...tableParams.pagination,
      //     total: 200,
      //     // 200 is mock data, you should read it from server
      //     // total: data.totalCount,
      //   },
      // });
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

  return (
    <TableComponent
      Columns={columns}
      dataSource={data}
      pagination={tableParams.pagination}
      setPagination={handleTableChange}
    />
  );
};
export default ExistingPartners;