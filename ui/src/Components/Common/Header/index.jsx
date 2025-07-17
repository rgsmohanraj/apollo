import React, {useState, useEffect, useRef} from "react";
import { Card, Row, Col,Dropdown } from 'react-bootstrap';
import { AiOutlineLogout } from "react-icons/ai";
import {
    VivritiNextLogo,
    ApolloLogo,
    ProductIcon,
    PartnerIcon, ProfileDropdownSuffix
} from "../../../assests/images/nav-icons/icons"
import './style.scss'
import {SearchOutlined} from "@ant-design/icons";
import {Input} from "antd";
import {random} from "lodash";
import {ApplicationIcon, LoanValueIcon} from "../../../assests/images/partner-icons/icons";
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const [loggedUser] = useState("John Doe");
    const [defaultValue, setDefaultValue] = useState("");

    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");
    const [searchVisible, setSearchVisible] = useState(false);
    const searchRef = useRef(null);
    const searchInput = useRef(null);
    const [searchData, setSearchData] = useState([]);


    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
    };

    useEffect(() => {
        setDefaultValue(loggedUser);

        // Add event listener to detect clicks outside the search input
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // Remove event listener when component unmounts
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [loggedUser]);

    useEffect(() => {
        if (searchVisible) {
            // Focus on the input field when it becomes visible
            searchInput.current.focus();
            setSearchData([])
        }
    }, [searchVisible]);

    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setSearchVisible(false);
            setSearchValue("");
        }
    };

    const handleSearchClick = () => {
        navigate(`/search/${searchValue}`);
        setSearchVisible(false);
    };

    const handleSearch = (event) => {
        const rand = Math.random();
        const productObject = {
            title: event.target.value,
            subTitle: rand < 0.5 ? "No. of Products: 2" : "Partner: Early Salary Services Private Limited",
            type: rand < 0.5 ? "partner" : "product",
            link: rand < 0.5 ? "/partners/view/PN5623200" : "/products/view/1"
        };
        setSearchData( [...searchData, productObject]);
    }

    return (
        <>
            <Card className="header-card">
                <Row className="header-row">
                    <Col sm={6} className="col-logo">
                        <VivritiNextLogo className="" alt="logo1" />
                        <ApolloLogo className="" alt="logo2" />
                    </Col>
                    <Col sm={6} className="col-search-select">
                         <span className="searchBar form-item d-flex align-items-center justify-content-end flex-column position-relative" ref={searchRef}>
                            {/*<SearchIcon  onClick={toggleSearch}/>*/}
                             {searchVisible ? (
                                 <>
                                     <Input
                                         rootClassName="search-input"
                                         placeholder="Search"
                                         suffix={<SearchOutlined onClick={handleSearchClick}/>}
                                         onPressEnter={handleSearch}
                                         ref={searchInput}
                                         value={searchValue}
                                         onChange={(e) => setSearchValue(e.target.value)}
                                     />
                                     {searchData.length > 0 && (
                                         <div className="position-absolute bg-main-white w-100 br-4px pa-16 gray-box-shadow search-results">
                                             {searchData.some(item => item.type === "partner") && (
                                                 <div className="fs-12 fw-600 lh-16 color-lable-text mb-12px">Partner</div>
                                             )}
                                             {searchData
                                                 .filter(item => item.type === "partner")
                                                 .map((item, index) => (
                                                     <Link to={item.link} key={index} className="mb-12px d-flex search-list p-12px br-4px plain-link" onClick={toggleSearch}>
                                                         <div className="search-icon-bg bg-heading height-32 width-32 d-flex rounded-circle align-items-center justify-content-center me-8px">
                                                             <ProductIcon />
                                                         </div>
                                                         <div className="d-block">
                                                             <div className="fs-12 fw-600 lh-16 color-primary">{item.title}</div>
                                                             <div className="fs-10 fw-400 lh-12 color-apollo-black">{item.subTitle}</div>
                                                         </div>
                                                     </Link>
                                                 ))}
                                             {searchData.some(item => item.type === "product") && (
                                                 <div className="fs-12 fw-600 lh-16 color-lable-text mb-12px">Product</div>
                                             )}
                                             {searchData
                                                 .filter(item => item.type === "product")
                                                 .map((item, index) => (
                                                     <Link to={item.link} key={index} className="mb-12px d-flex search-list p-12px br-4px plain-link" onClick={toggleSearch}>
                                                         <div className="search-icon-bg bg-heading height-32 width-32 d-flex rounded-circle align-items-center justify-content-center me-8px">
                                                             <PartnerIcon />
                                                         </div>
                                                         <div className="d-block">
                                                             <div className="fs-12 fw-600 lh-16 color-primary">{item.title}</div>
                                                             <div className="fs-10 fw-400 lh-12 color-apollo-black">{item.subTitle}</div>
                                                         </div>
                                                     </Link>
                                                 ))}
                                         </div>
                                     )}
                                 </>

                             ) : (
                                 <SearchOutlined className="search-icon" onClick={toggleSearch} />
                             )}
                        </span>
                    <span>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" defaultValue={defaultValue}>
                        <div className="user-name"><span className="first-letter">{loggedUser.charAt(0)}</span></div>
                            <span className="logged-user">{loggedUser}</span>
                            <span className="dropdown-icon ms-2">
                                <ProfileDropdownSuffix />
                            </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1"><AiOutlineLogout className="logout-icon"/><span className="logged-user">Logout</span></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </span>
                    </Col>
                </Row>
            </Card>
        </>
    )
}
export default Header;