import React, { useState,useEffect, useContext  } from 'react';
import { Link} from 'react-router-dom';
import { Typography, Radio } from 'antd';
import { CheckCircleOutlined, CaretRightOutlined } from '@ant-design/icons';
import '../style.scss';
import TableComponent from '../../../../../Components/TableComponent/TableComponent';
import FooterSubmit from '../../../../../Components/Common/FooterSubmit';
import ModalComponent from '../../../../../Components/Common/Modal';
import { SopContext} from '../../../../../Context/SopContext';
import RadioComponent from '../../../../../Components/Common/RadioComponent';

const { Text } = Typography;

  export const PostDispDocument = ({AgreementData}) => {
    const [postdisbsections,setpostdisbSections]=useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createFilterSuccess, setCreateFilterSuccess] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
    setCreateFilterSuccess(false);
  };
  const handleCreateFilterSuccess = () => {
    setIsModalOpen(false);
    setCreateFilterSuccess(true);
  }
  const columns = [
    { title: 'DOCUMENT LIST', dataIndex: 'name', key: 'name', width: '60%' },
    { title: 'MANDATORY', dataIndex: 'mandatory', key: 'mandatory', width: '10%', 
    render: (_, record) => {
      let selected = record.type === 'mandatory'|| record.type === '';
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
    setpostdisbSections(AgreementData);
  },[])
  const handleRadioChange = (fieldName, type) => {
    let tempDataSource = postdisbsections.map((datapoint) => {
      if (datapoint.fieldName == fieldName) {
        return { ...datapoint, type: type }
      }
      return datapoint
    })
    setpostdisbSections(tempDataSource);
  };
  useEffect(()=>{console.log("datasource",postdisbsections)},[postdisbsections])
  const modalProps = {
    title: "Confirmation",
    width: '27%',
    onCloseBtnColor: "",
    fontSize: "16px",
    className: "confirmation-dialog ff-inter bg-main-white card-box-shadow",
    okText: "Yes",
    cancelText: "No",
    okButtonProps: { className: 'confirmation-dialog-ok-button ff-inter fw-600 w-auto gradient-primary gray-box-shadow height-32 border-0' },
    cancelButtonProps: { className: 'confirmation-dialog-cancel-button ff-inter fw-600 w-auto bg-main-white color-primary height-32' },
    onCloseBtnColor: ""
  }
  return (
    <div>
      <Text type="primary" className="br-crumbs">Partners <CaretRightOutlined /> Early Salary Service Private Limited <CaretRightOutlined /> <span style={{ fontSize: "12px", fontWeight: 400, color: "black" }}>SME Auto Lending</span></Text>
      <div className="sopcredit-title">SOP</div>
      <div className="sop-documentation-container">
        {postdisbsections && (
          <TableComponent
            dataSource={postdisbsections}
            Columns={columns}
            size="small"
            pagination={false}
            scroll={{ y: '63.5vh' }}
          />
        )}
      </div>
      <FooterSubmit isButton="true" title="Create SOP" isPrevBtn="true" type="button" path="postdisb.document" navItem="sopItems" onClick={showModal} />
      <ModalComponent open={isModalOpen} {...modalProps}
        onOk={() => handleCreateFilterSuccess(false)}
        onClose={() => setIsModalOpen(false)}>
        <span className="py-2">Are you sure to create this SOP?</span>
      </ModalComponent>
      <ModalComponent
        open={createFilterSuccess}
        className="success-dialog ff-inter bg-main-white card-box-shadow"
        okText={
          <Link to="/products/create/initialfilter" style={{ textDecoration: "none" }}>
            <span className="d-flex align-items-center justify-content-center ff-inter">
              Proceed to Credit Filter
            </span>
          </Link>
        }
        onClose={() => setCreateFilterSuccess(false)}
        okButtonProps={{ className: 'success-dialog-ok-button ff-inter fw-600 gradient-primary w-auto height-32 color-light gray-box-shadow' }}
        cancelButtonProps={{ className: 'success-dialog-cancel-button ff-inter fw-600 w-auto bg-main-white gray-box-shadow color-primary' }}
      >
        <div className="d-flex align-items-center w-100 justify-content-center">
          <CheckCircleOutlined className="success-dialog-icon" />
        </div>
        <p className="w-100 d-flex justify-content-center align-items-center text-center mb-24px">The SOP Configuration has been successfully created, <br />proceed to  Credit Filter.</p>
      </ModalComponent>
    </div>
  );
}

