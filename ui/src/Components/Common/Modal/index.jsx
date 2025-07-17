import React, { useEffect, useState } from 'react';
import { Button, Modal, Form, Select } from 'antd';
import { ModalCloseIcon } from "../../../assests/images/nav-icons/icons";
import "./style.scss";


const ModalComponent = ({ title, width,height, onCloseBtnColor, fontSize, footer,open, onOk, onClose, children, className,okText, cancelText, okButtonProps, cancelButtonProps,okButtonClassName }) => {

    return (
        <>
            <Modal
                title={<span className='modal-title'>{title}</span>}
                centered
                open={open}
                onOk={onOk}
                onCancel={onClose}
                className={className}
                okText={okText}
                cancelText={cancelText}
                okButtonProps={okButtonProps }
                cancelButtonProps={cancelButtonProps }
                width={width}
                closeIcon={<ModalCloseIcon iconColor={onCloseBtnColor} />}
                footer={footer}
                height={height}
            >
                {children}
            </Modal>
        </>
    );

};
    // ModalComponent.propTypes = {
    //     title: PropTypes.string,
    //     visible: PropTypes.bool.isRequired,
    //     onOk: PropTypes.func.isRequired,
    //     onCancel: PropTypes.func.isRequired,
    //     okText: PropTypes.string,
    //     cancelText: PropTypes.string,
    //     okButtonProps: PropTypes.object,
    //     cancelButtonProps: PropTypes.object,
    //     children: PropTypes.node,
    //     className: PropTypes.string,
    //     okButtonClassName: PropTypes.string
    // };
    
    // ModalComponent.defaultProps = {
    //     title: 'Confirmation',
    //     okText: 'Yes',
    //     cancelText: 'No',
    //     okButtonProps: {},
    //     cancelButtonProps: {},
    //     className: '',
    //     okButtonClassName: ''
    // };
export default ModalComponent;