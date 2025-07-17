import React from "react";
import {Button} from "antd";

const ButtonComponent = ({style, type, onClick, hasTitle, title, hasPrefixIcon, prefixIcon, hasSuffixIcon, suffixIcon, rootClassName,id}) => {
    return (
        <Button type={type} id={id} className={`height-32 gray-box-shadow d-flex align-items-center ${rootClassName} ${style == "primary" ? "primary-button gradient-primary color-light border-0" : "secondary-button border-apollo-primary bg-main-white color-primary"}`} onClick={onClick}>
            {hasPrefixIcon && prefixIcon} {hasTitle && title} {hasSuffixIcon && suffixIcon}
        </Button>
    );
};

export default ButtonComponent;