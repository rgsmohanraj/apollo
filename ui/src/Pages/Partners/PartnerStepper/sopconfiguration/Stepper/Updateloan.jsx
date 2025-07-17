import React, { useContext, useEffect, useState } from 'react';
import { Typography,Radio } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import '../style.scss';
import TableComponent from '../../../../../Components/TableComponent/TableComponent';
import FooterSubmit from '../../../../../Components/Common/FooterSubmit';
import { SopContext} from '../../../../../Context/SopContext';
import RadioComponent from '../../../../../Components/Common/RadioComponent';

const { Text } = Typography;

export const Updateloan = ({updateLoanData}) => {
  const [updateloansections,setupdateloanSections]=useState([]);
  const columns = [
    { title: 'DATAPOINTS', dataIndex: 'name', key: 'name', width: '70%' },
    {
      title: 'EDITABLE',
      dataIndex: 'editable',
      key: 'editable',
      width: '12%',
      render: (_, record) => {
        let selected = record.type === 'editable' || record.type === '';
        return <RadioComponent
          checked={selected}
          onChange={() => handleRadioChange(record.fieldName, 'editable')}
          type="radio"
        />
      },
    },
    {
      title: 'NON EDITABLE',
      dataIndex: 'noneditable',
      key: 'noneditable',
      width: '15%',
      render: (_, record) => {
        let selected = record.type === 'noneditable';
        return <RadioComponent
          checked={selected}
          onChange={() => handleRadioChange(record.fieldName, 'noneditable')}
          type="radio"
        />
      },
    },
  ];
  const [dataSource, setDataSource] = useState([])
  const handleRadioChange = (fieldName, type) => {
    let tempDataSource = dataSource.map((datapoint) => {
      if(datapoint.fieldName == fieldName) {
        return { ...datapoint, type: type}
      }
      return datapoint
    })
    setDataSource(tempDataSource);

    let tempSections = updateloansections.map((section) => {
      if(section.name == selectedSection) {
        return { ...section, dataPoints: tempDataSource }
      }
      return section
    })
    setupdateloanSections(tempSections);
  };
  const [selectedSection, setSelectedSection] = useState();
  const handleSectionClick = (section) => {
    let tempSections = updateloansections.map((section) => {
      if(section.name == selectedSection) {
        return { ...section, dataPoints: dataSource }
      }
      return section
    })
    setupdateloanSections(tempSections);
    setSelectedSection(section);
  };
  useEffect(() => {
    if(updateLoanData.length && !dataSource.length) {
      setupdateloanSections(updateLoanData[0].sections)
    setDataSource(updateLoanData[0].sections.dataPoints)
    setSelectedSection(updateLoanData[0].sections[0].name);
    }
  }, [])
  useEffect(() => {
    let tempDataSource = []
    updateloansections.map((section) => {
      if(section.name === selectedSection) {
        tempDataSource = section.dataPoints;
      }
    })
    setDataSource(tempDataSource);
  }, [selectedSection])
  return (
    <div>
      <Text type="primary" className="br-crumbs">Partners <CaretRightOutlined /> Early Salary Service Private Limited <CaretRightOutlined /> <span style={{ fontSize: '12px', fontWeight: 400, color: 'black' }}>SME Auto Lending</span></Text>
      <div className="sopcredit-title">SOP</div>
      <div className="d-flex">
        <div className="parent-container">
              {updateloansections && updateloansections.map((sectionData, sdi) => (
                <div
                  key={sdi}
                  className={`parentdata-container ${selectedSection === sectionData.name ? 'selected' : ''}`}
                  onClick={() => handleSectionClick(sectionData.name)}
                >
                  <span className='fs-14 fw-500 ff-inter color-tooltip-bg'>{sectionData.name}</span>
                </div>
              ))}
        </div>
        <div className="child-container">
          {selectedSection && (
            <TableComponent
              dataSource={dataSource}
              Columns={columns}
              size="small"
              pagination={false}
              scroll={{ y: '62.5vh' }}
            />
          )}
        </div>
      </div>
      <FooterSubmit isNextBtn="true" isPrevBtn="true" type="button" path="updateloan" navItem="sopItems" />
    </div>
  );
};

