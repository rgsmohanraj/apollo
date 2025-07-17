import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { Col, Row } from "react-bootstrap";
import { Typography, Button, Radio, Alert } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import "../style.scss";
import { Draggericon, FileUploadedicon, SopFormaticon, FileCloseicon, RightArrow, UploadSopicon } from '../../../../../assests/images/nav-icons/icons';
import { message, Upload } from 'antd';
import TableComponent from '../../../../../Components/TableComponent/TableComponent';
import ModalComponent from '../../../../../Components/Common/Modal';
import FooterSubmit from '../../../../../Components/Common/FooterSubmit';
import { SopContext } from '../../../../../Context/SopContext';
import RadioComponent from '../../../../../Components/Common/RadioComponent';

const { Dragger } = Upload;
const { Text } = Typography;

export const Createloan = ({ handleNavigation, createLoanData }) => {
  console.log(handleNavigation,'handleNavigation')
  const [createloansections, setcreateloanSections] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const handleOkUpload = () => {
    setIsModalOpen(false);
    setShowSuccessAlert(true);
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 1000);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  useEffect(() => { console.log("check", fileList) }, [fileList]);
  const handleRemoveFile = (file) => {
    const updatedFileList = fileList.filter((item) => item.uid !== file.uid);
    setFileList(updatedFileList);
  };
  const formatFileSize = (size) => {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let i = 0;
    while (size > 1024) {
      size /= 1024;
      i++;
    }
    return `${Math.round(size * 100) / 100} ${units[i]}`;
  };
  const props = {
    name: 'file',
    multiple: true,
    fileList: fileList,
    iconRender: () => <FileUploadedicon />,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
      setFileList(info.fileList);
      const { status } = info.file;
      // if (status === 'done') {
      //   message.success(`${info.file.name} file uploaded successfully.`);
      // } else if (status === 'error') {
      //   message.error(`${info.file.name} file upload failed.`);
      // }
    },
    onRemove(file) {
      handleRemoveFile(file);
    },
    itemRender: (originNode, file) => (
      <Row className="ant-upload-list-item-info file-upload-info">
        <Col lg="1" className="ant-upload-list-item-icon"><FileUploadedicon /></Col>
        <Col lg="10" className="ant-upload-list-item-name" title={file.name}>
          <div className='cl-1B212D ff-inter fs-14 fw-400'> {file.name}</div>
          <div className='cl-414042 ff-inter fs-12 fw-400'> ({formatFileSize(file.size)})</div>
        </Col>
        <Col lg="1" className="ant-upload-list-item-actions">
          <a onClick={() => props.onRemove(file)}>
            <FileCloseicon />
          </a>
        </Col>
      </Row>
    ),
  };
  //----------------------------//////////////////////
  const columns = [
    { title: 'DATAPOINTS', dataIndex: 'name', key: 'name', width: '56%' },
    {
      title: 'MANDATORY',
      dataIndex: 'mandatory',
      key: 'mandatory',
      width: '14%',
      render: (_, record) => {
        let selected = record.type === 'mandatory' || record.type === 'CHECKED';
        const isChecked = record.type === 'CHECKED';
        return <RadioComponent
          checked={selected}
          onChange={() => handleRadioChange(record.fieldName, 'mandatory')}
          disabled={isChecked}
          type="radio"
        />
      },
    },
    {
      title: 'OPTIONAL',
      dataIndex: 'optional',
      key: 'optional',
      width: '12%',
      render: (_, record) => {
        let selected = record.type === 'optional';
        const isMandatoryChecked = record.type === 'CHECKED';
        return <RadioComponent
          checked={selected}
          onChange={() => !isMandatoryChecked && handleRadioChange(record.fieldName, 'optional')} // Only handle change if mandatory is not checked
          type="radio"
        />
      },
    },
    {
      title: 'NOT REQUIRED',
      dataIndex: 'notrequired',
      key: 'notrequired',
      width: '16%',
      render: (_, record) => {
        let selected = record.type === '';
        const isMandatoryChecked = record.type === 'CHECKED';
        return <RadioComponent
          checked={selected}
          onChange={() => !isMandatoryChecked && handleRadioChange(record.fieldName, '')}
          type="radio"
        />
      },
    },
  ];
  const [dataSource, setDataSource] = useState([])
  const handleRadioChange = (fieldName, type) => {
    let tempDataSource = dataSource.map((datapoint) => {
      if (datapoint.fieldName == fieldName) {
        return { ...datapoint, type: type }
      }
      return datapoint
    })
    setDataSource(tempDataSource);

    let tempSections = createloansections.map((section) => {
      if (section.name == selectedSection) {
        return { ...section, dataPoints: tempDataSource }
      }
      return section
    })
    setcreateloanSections(tempSections);
  };
  const [selectedSection, setSelectedSection] = useState();
  const handleSectionClick = (section) => {
    let tempSections = createloansections.map((section) => {
      if (section.name == selectedSection) {
        return { ...section, dataPoints: dataSource }
      }
      return section
    })
    setcreateloanSections(tempSections);
    setSelectedSection(section);
  };
  // const handleNextPage = () => {
  //     let tempSections = createloansections.map((section) => {
  //       if (section.name == selectedSection) {
  //         return { ...section, dataPoints: dataSource }
  //       }
  //       return section
  //     })
  //     setcreateloanSections(tempSections);
  // const filteredDataPoints = tempSections.map((section) => {
  // section.dataPoints=section.dataPoints.filter(dataPoint => dataPoint.type !== '');
  // return section
  // })
  // setcreateloanSections(filteredDataPoints)
  // }
  //   useLayoutEffect(() => {
  //     return () => {
  //     }
  // }, [])
  useEffect(() => {
    if (createLoanData.length && !dataSource.length) {
      setcreateloanSections(createLoanData[0].sections)
      setDataSource(createLoanData[0].sections.dataPoints)
      setSelectedSection(createLoanData[0].sections[0].name);
    }
  }, [])
  useEffect(() => {
    let tempDataSource = []
    createloansections.map((section) => {
      if (section.name === selectedSection) {
        tempDataSource = section.dataPoints;
      }
    })
    setDataSource(tempDataSource);
  }, [selectedSection])

  const modalProps = {
    title: "Upload your documents",
    width: '40%',
    onCloseBtnColor: "",
    fontSize: "16px",
    className: "confirmation-dialog ff-inter bg-main-white card-box-shadow",
    okText: "Upload",
    cancelText: "Cancel",
    okButtonProps: { className: 'confirmation-dialog-ok-button ff-inter fw-600 w-auto gradient-primary gray-box-shadow height-32 border-0' },
    cancelButtonProps: { className: 'confirmation-dialog-cancel-button ff-inter fw-600 w-auto bg-main-white color-primary height-32' },
    onCloseBtnColor: "",
    height: "fit-content"
  }
  const handleSubmit = () => {
    console.log('sop-submit');
    handleNavigation();
  }
  return (
    <>
      <Text type="primary" className="br-crumbs">Partners <CaretRightOutlined /> Early Salary Service Private Limited <CaretRightOutlined /> <span style={{ fontSize: "12px", fontWeight: 400, color: "black" }}>SME Auto Lending</span></Text>
      <div className="sop-upload">
        <span className="sopcredit-title">SOP</span>
        <div className="d-flex a-center">
          <Button className="upload-sop" onClick={showModal}><span className='mr-05rem'><UploadSopicon /></span>Upload SOP</Button>
          <ModalComponent open={isModalOpen} {...modalProps}
            onOk={() => handleOkUpload()}
            onClose={() => setIsModalOpen(false)}>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                {<Draggericon />}
              </p>
              <p className="ant-upload-text cl-1C2D56 fs-14 ff-inter fw-500">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint cl-000000 fs-14 fw-400 ff-inter">
                File should be in .xls, .Xlsx, .csv with less than 10MB size
              </p>
            </Dragger>
          </ModalComponent>
          {showSuccessAlert && (
            <Alert
              message="SOP Successfully Uploaded"
              type="success"
              showIcon
              className='alert-success'
              closable
            />)}
          <Button className="sop-format"><span className='mr-05rem'><SopFormaticon /></span>SOP Format</Button>
        </div>
      </div>
      <div className="d-flex">
        <div className="parent-container">
          {createloansections && createloansections.map((sectionData, sdi) => (
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
      <FooterSubmit isNextBtn="true" type="button" title="create" handleSubmit={handleSubmit} />
    </>
  );
};

