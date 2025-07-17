import React, { useContext, useEffect, useState } from 'react';
import { Typography, Radio } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import TableComponent from '../../../../../Components/TableComponent/TableComponent';
import FooterSubmit from '../../../../../Components/Common/FooterSubmit';
import { SopContext} from '../../../../../Context/SopContext';
import RadioComponent from '../../../../../Components/Common/RadioComponent';

const { Text } = Typography;

export const Agrementsigned = ({AgreementData}) => {
  const [agreementsections,setagreementSections]=useState([]);
  const columns = [
    { title: 'LOAN LEVEL DOCUMENTS', dataIndex: 'name', key: 'name', width: '60%' },
    { title: 'MANDATORY', dataIndex: 'mandatory', key: 'mandatory', width: '10%', 
    render: (_, record) => {
      let selected = record.type === 'mandatory';
      return <RadioComponent
        checked={selected}
        onChange={() => handleRadioChange(record.fieldName, 'mandatory')}
        type="radio"
      />
    },
   },
    { title: 'OPTIONAL', dataIndex: 'optional', key: 'optional', width: '8%',
    render: (_, record) => {
      let selected = record.type === 'optional';
      return <RadioComponent
        checked={selected}
        onChange={() => handleRadioChange(record.fieldName, 'optional')}
        type="radio"
      />
    },
   },
    {
      title: 'NOT REQUIRED',
      dataIndex: 'notrequired',
      key: 'notrequired',
      width: '10%',
      render: (_, record) => {
        let selected = record.type === 'notrequired';
        return <RadioComponent
          checked={selected}
          onChange={() => handleRadioChange(record.fieldName, 'notrequired')}
          type="radio"
        />
      },
    },
  ]
  useEffect(()=>{
  setagreementSections(AgreementData);
  },[])

  const handleRadioChange = (fieldName, type) => {
    let tempDataSource = agreementsections.map((datapoint) => {
      if (datapoint.fieldName == fieldName) {
        return { ...datapoint, type: type }
      }
      return datapoint
    })
    setagreementSections(tempDataSource);
  };
  const sendDataToBackend = () => {
    const dataToSend = agreementsections.filter(item => item.type !== "");
    console.log("Data to send:", dataToSend);
  };
  useEffect(()=>{console.log("datasource",agreementsections)},[agreementsections])
  return (
    <div>
      <Text type="primary" className="br-crumbs">Partners <CaretRightOutlined /> Early Salary Service Private Limited <CaretRightOutlined /> <span style={{ fontSize: "12px", fontWeight: 400, color: "black" }}>SME Auto Lending</span></Text>
      <div className="sopcredit-title">SOP</div>
      <div className="sop-agrementsigned-container">
        {agreementsections && (
          <TableComponent
            dataSource={agreementsections}
            Columns={columns}
            size="small"
            pagination={false}
            scroll={{ y: '63.5vh' }}
          />
        )}
      </div>
      <FooterSubmit isNextBtn="true" isPrevBtn="true" type="button" path="agreementsigned" navItem="sopItems" onClick={sendDataToBackend}/>
    </div>
  );
};

