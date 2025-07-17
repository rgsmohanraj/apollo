import React, {useState} from "react";
import {Card, Col, Row} from "react-bootstrap";
import {Form, Input, Modal, Radio, Select, Switch} from "antd";
import PageHeader from "../../Components/Common/Page-Header";
import FooterSubmit from "../../Components/Common/FooterSubmit";

const CreateFees = () => {
    const [addFeeConfirmation, setAddFeeConfirmation] = useState(false);

    const handleFeeConfirmation = () => {
        setAddFeeConfirmation(true);
    };

  return (
      <div className="create-fees">
          {/*Page Header*/}
          <PageHeader title="Create Fees & Charges" isCreateEnabled={false} isSearchEnabled={false} isBreadcrumbPresent={true}/>

          {/*Configure Fees Form*/}
          <Row>
              <Form layout="vertical">
                  <Col lg="12" className="mt-2 bottom-card-form">
                      <Card className="ff-inter border-0 card-box-shadow bg-main-white p-0">
                          <Card.Title className="pa-24 border-bottom-gray fs-18 fw-600 color-heading-text">
                              Fees & Charges
                          </Card.Title>
                          <Card.Body className="p-24">
                              <Row className="border-bottom-gray mba-16px">
                                  <Col lg="4" className="pea-24px">
                                      <Form.Item label="Charges Applies To" className="onboarding-form-item">
                                          <Input />
                                      </Form.Item>
                                  </Col>
                              </Row>
                              <Row>
                                  <Col lg="4">
                                      <Form.Item label="Charge Name" className="onboarding-form-item">
                                          <Input />
                                      </Form.Item>
                                  </Col>
                                  <Col lg="4">
                                      <Form.Item label="Currency"  className="onboarding-form-item">
                                          <Input />
                                      </Form.Item>
                                  </Col>
                                  <Col lg="4">
                                      <Form.Item label="Type" className="onboarding-form-item">
                                          <Input />
                                      </Form.Item>
                                  </Col>
                              </Row>

                              <Row>
                                  <Col lg="4">
                                      <Form.Item label="Fees/Charge Type" className="onboarding-form-item">
                                          <Input />
                                      </Form.Item>
                                  </Col>
                                  <Col lg="4">
                                      <Form.Item label="Charge Time Type"  className="onboarding-form-item">
                                          <Input />
                                      </Form.Item>
                                  </Col>
                                  <Col lg="4">
                                      <Form.Item label="Charge Calculation Type" className="onboarding-form-item">
                                          <Input />
                                      </Form.Item>
                                  </Col>
                              </Row>

                              <Row className="border-bottom-gray mba-16px">
                                  <Col lg="4" className="pea-24px">
                                      <Form.Item label="Charge Payment Mode" className="onboarding-form-item">
                                          <Input />
                                      </Form.Item>
                                  </Col>
                              </Row>

                              <Row className="border-bottom-gray mba-16px">
                                  <p className="ff-poppins fw-600 fs-16 lh-28 color-character mb-0 pb-12px pea-24px">Charge Amount</p>
                                  <Col lg="4" className="pea-24px">
                                      <Form.Item label="Minimum Amount" className="onboarding-form-item">
                                          <Input />
                                      </Form.Item>
                                  </Col>
                                  <Col lg="4" className="pea-24px">
                                      <Form.Item label="Default Amount"  className="onboarding-form-item">
                                          <Input />
                                      </Form.Item>
                                  </Col>
                                  <Col lg="4" className="pea-24px">
                                      <Form.Item label="Maximum Amount" className="onboarding-form-item">
                                          <Input />
                                      </Form.Item>
                                  </Col>
                              </Row>

                              <Row className="border-bottom-gray mba-16px">
                                  <p className="ff-poppins fw-600 fs-16 lh-28 color-character mb-0 pb-12px pea-24px">Charge Rounding Configuration</p>
                                  <Col lg="4" className="pea-24px">
                                      <Form.Item label="Charge Rounding Mode" className="onboarding-form-item">
                                          <Input />
                                      </Form.Item>
                                  </Col>
                                  <Col lg="4" className="pea-24px">
                                      <Form.Item label="Charge Decimal Values"  className="onboarding-form-item">
                                          <Input />
                                      </Form.Item>
                                  </Col>
                              </Row>

                              <Row>
                                  <div className="d-flex align-items-center switch-div">
                                      <p className="ff-poppins fw-600 fs-16 lh-28 color-character mb-0 pb-12px me-8px">GST Configuration</p>
                                      <Switch defaultChecked className="mb-12px switch"/>
                                  </div>
                                  <Col lg="4">
                                      <Form.Item label="GST Rounding Mode" className="onboarding-form-item">
                                          <Input />
                                      </Form.Item>
                                  </Col>
                                  <Col lg="4">
                                      <Form.Item label="GST Decimal Values"  className="onboarding-form-item">
                                          <Input />
                                      </Form.Item>
                                  </Col>
                              </Row>

                              <Row className="border-bottom-gray mba-16px">
                                  <div className="d-flex align-items-center switch-div pea-24px">
                                      <p className="ff-poppins fw-600 fs-16 lh-28 color-character mb-0 pb-12px me-8px">GST Slab Configuration</p>
                                      <Switch defaultChecked className="mb-12px switch"/>
                                  </div>
                                  <Col lg="4" className="pea-24px">
                                      <Form.Item label="GST Slab Limit Apply For" className="onboarding-form-item">
                                          <Input />
                                      </Form.Item>
                                  </Col>
                                  <Col lg="4" className="pea-24px">
                                      <Form.Item label="GST Slab Limit Operator"  className="onboarding-form-item">
                                          <Input />
                                      </Form.Item>
                                  </Col>
                                  <Col lg="4" className="pea-24px">
                                      <Form.Item label="GST Slab Limit Value"  className="onboarding-form-item">
                                          <Input />
                                      </Form.Item>
                                  </Col>
                              </Row>

                              <Row>
                                  <Col lg="4">
                                      <Form.Item label="Active" className="onboarding-form-item">
                                          <Radio.Group className="radio-div ff-inter fs-14 lh-18 color-character">
                                              <Radio value="yes">Yes</Radio>
                                              <Radio value="no">No</Radio>
                                          </Radio.Group>
                                      </Form.Item>
                                  </Col>
                                  <Col lg="4">
                                      <Form.Item label="Is Default Loan Charge"  className="onboarding-form-item">
                                          <Radio.Group className="radio-div ff-inter fs-14 lh-18 color-character">
                                              <Radio value="yes">Yes</Radio>
                                              <Radio value="no">No</Radio>
                                          </Radio.Group>
                                      </Form.Item>
                                  </Col>
                              </Row>
                          </Card.Body>
                      </Card>
                  </Col>

              </Form>
          </Row>
          <Modal
              title="Confirmation"
              centered
              open={addFeeConfirmation}
              onOk={() => setAddFeeConfirmation(false)}
              onCancel={() => setAddFeeConfirmation(false)}
              className="confirmation-dialog ff-inter"
              okText="Yes"
              cancelText="No"
              okButtonProps={{ className: 'confirmation-dialog-ok-button ff-inter fw-600 w-auto'}}
              cancelButtonProps={{ className: 'confirmation-dialog-cancel-button ff-inter fw-600 w-auto bg-white' }}
          >
              <p>Are you sure to create the fees & charges?</p>
          </Modal>
          <FooterSubmit title="Submit" type="button" isButton="true" onClick={handleFeeConfirmation} isCancelPresent={true}/>
      </div>
  );
};

export default CreateFees;