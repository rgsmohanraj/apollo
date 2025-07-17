import React from "react";
import {ArrowLeftOutlined, CaretRightOutlined, SearchOutlined} from '@ant-design/icons';
import { Input } from "antd";
import {Row, Col, Badge} from 'react-bootstrap';
import { PlusBtn } from '../../../assests/images/nav-icons/icons'
import {Link, useNavigate} from 'react-router-dom';
import './style.scss';
import useBreadcrumb from "../../../hooks/useBreadcrumb";
import ButtonComponent from "../Button";

const PageHeader = ({
                        title, handleClick, typeBadge,
                        detailsTitle, detailsFunction, isBreadcrumbPresent,
                        isCreateEnabled, isSearchEnabled, isDynamicSearchTitle,
                        searchTitle, isTypeBadge, isDetailsButton, isLargeButton,
                        largeButtonClick, largeButtonTitle, isLargeButtonPrefixIcon,
                        largeButtonPrefixIcon, largeButtonRootClassName,
                        excludePb, count, isSuccessBadge, successBadgeTitle, isBackAllowed}) => {
    
    const onSearch = (event) => {
        const inputData = event.target.value;
        if(inputData.length>1){
            setTimeout(() => {
                console.log("searched data");
            }, 2000);
        }
        console.log(inputData);
    };

    const breadcrumb = useBreadcrumb();

    const searchText = (isDynamicSearchTitle) ? searchTitle : `Search by ${title} Name`;

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <>
        {count}
            <Row className={`${excludePb?'page-header-exclude-pb':'page-header'} d-flex align-items-center`}>
                {isBreadcrumbPresent &&
                    <Col lg={12}>
                        <div className="d-flex align-items-center ff-inter fs-12 pb-8px">
                            { breadcrumb.parents &&
                                breadcrumb.parents.map((parent, index) => (
                                    <Link to={parent.url} key={index} className="d-flex align-items-center plain-link color-inherit">
                                        <p className="fw-500 mb-0 me-2">{ parent.title }</p><CaretRightOutlined className="me-2" />
                                    </Link>
                                ))}
                            <p className="fw-600 mb-0">{breadcrumb.title}</p>
                        </div>
                    </Col>
                }
                <Col lg={6}>
                    <div className="fs-24 fw-600 lh-36 color-heading-text d-flex align-items-center">
                        {
                            breadcrumb.parents &&
                                <ArrowLeftOutlined className="me-16 color-heading-text fs-16" onClick={handleGoBack}/>
                        }
                        {
                            isBackAllowed &&
                            <ArrowLeftOutlined className="me-16 color-heading-text fs-16" onClick={handleGoBack}/>
                        }

                        <h4 className="d-inline m-0 fs-24 fw-600 lh-36 ff-poppins">{title}</h4>
                        {isCreateEnabled &&
                            <ButtonComponent style="primary" onClick={handleClick} rootClassName="plusBtn p-0 width-32 ms-2 justify-content-center" hasPrefixIcon={true} prefixIcon={<PlusBtn />} />
                        }
                        {isTypeBadge &&
                            <Badge className="partner-type-badge ms-12px">{typeBadge}</Badge>
                        }
                        {isSuccessBadge &&
                            <Badge className="success-type-badge ms-12px">{successBadgeTitle}</Badge>
                        }
                        {isLargeButton &&
                            <ButtonComponent
                                style="primary"
                                onClick={largeButtonClick}
                                hasTitle={true}
                                title={largeButtonTitle}
                                type="button"
                                hasPrefixIcon={isLargeButtonPrefixIcon}
                                prefixIcon={largeButtonPrefixIcon}
                                rootClassName={largeButtonRootClassName}
                            />
                        }
                    </div>
                </Col>
                <Col lg={6} className="search-form-item">
                    {isSearchEnabled &&
                        <Input className="search-input height-32" placeholder={searchText} suffix={<SearchOutlined />} onChange={onSearch} />
                    }
                    {isDetailsButton &&
                        <div className="w-100 d-flex">
                            <ButtonComponent rootClassName="clone-product-button ms-auto right-0 w-auto" style="secondary" onClick={detailsFunction} title={detailsTitle} hasTitle={true} type="button" />
                        </div>
                    }
                </Col>
            </Row>
        </>
    )
}

export default PageHeader;