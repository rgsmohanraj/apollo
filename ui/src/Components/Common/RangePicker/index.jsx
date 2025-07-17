import React, { useState } from 'react';
import { DatePicker } from 'antd';
import { Form } from 'react-bootstrap';
const { RangePicker } = DatePicker;

const RangePickerComponent = ({ value, disabledDate, name, label, onChange, required, labelaction, validated}) => {
    // const disabledDate = (current, { from }) => {
    //     if (from) {
    //         return Math.abs(current.diff(from, 'days')) >= 7;
    //     }
    //     return false;
    // };

    return (
        <>
            {labelaction ? " " : <Form.Label className={required ? 'mandatory' : ''}>{label}</Form.Label>}
            <RangePicker
                value={value}
                disabledDate={disabledDate}
                // size="sm"
                name={name}
                // placeholder={`Please Enter ${label}`}
                onChange={onChange}
                required={required}
            />
        </>
    );
};

export default RangePickerComponent;