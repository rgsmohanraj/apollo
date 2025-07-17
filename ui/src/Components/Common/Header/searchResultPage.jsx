import React from "react";
import {Link, useParams} from "react-router-dom";
import PageHeader from "../Page-Header";
import {Card} from "react-bootstrap";
import {ProductIcon} from "../../../assests/images/nav-icons/icons";
import {RightArrowCurvedIcon} from "../../../assests/images/partner-icons/icons";

const SearchResultPage = () => {
    const { search_input } = useParams();

    return (
        <>
            <PageHeader title={`Search Results for "${search_input}"`} isBackAllowed={true}/>

            <Card className="border-0 gray-box-shadow br-4px p-0">
                <Card.Title className="d-flex mb-16px color-heading-text fs-18 fw-600  border-bottom-gray p-0">
                    <div className="pa-24">
                        Product
                    </div>
                </Card.Title>
                <Card.Body>
                        <Link to="/partners/view/PN5623200" className="mb-12px d-flex search-list p-12px br-4px plain-link align-items-center w-100 position-relative">
                            <div className="search-icon-bg bg-heading height-42 width-42 d-flex rounded-circle align-items-center justify-content-center me-8px">
                                <ProductIcon />
                            </div>
                            <div className="d-block">
                                <div className="fs-14 fw-600 lh-18 color-primary mb-8px">SME Auto Lending</div>
                                <div className="fs-12 fw-400 lh-16 color-apollo-black">Partner: Early Salary Services Private Limited</div>
                            </div>
                            <div className="product-overview-view-more-icon bg-heading d-flex align-items-center justify-content-center height-32 width-32 position-absolute right-10">
                                <RightArrowCurvedIcon />
                            </div>
                        </Link>
                </Card.Body>
            </Card>
        </>
    );
};

export default SearchResultPage;