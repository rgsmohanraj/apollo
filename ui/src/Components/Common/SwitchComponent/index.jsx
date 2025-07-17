import React from 'react';
import "./style.scss";
import { Switch } from 'antd';

const SwitchComponent = ({ label, name, value, defaultChecked, onChange, validated}) => {
    const handleChange = (checked) => {
        onChange({ target: { name, value: checked } });
    };
    return (
        <div className="d-flex align-items-center switch-div">
            <p className="ff-poppins fw-600 fs-16 lh-28 color-character mb-0 pb-12px me-8px">{label}</p>
            <Switch
                className="mb-12px switch"
                name={name}
                value={value}
                onChange={handleChange}
                defaultChecked={defaultChecked}
            />
        </div>
    )
}

export default SwitchComponent;