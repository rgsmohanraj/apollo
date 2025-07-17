import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';
import {
  DashboardIcon, PartnersIcon, ProductsIcon, FeesandChargesIcon, EndBorrowersIcon, DocumentsIcon,
  DocumentsMastericon, ReportsIcon, ArrowLefticon, ProductSchemaicon, SOPconfigurationicon, CreditFiltericon,
  StepperTodoIcon, StepperPendingicon, StepperCompletedIcon
} from '../../../assests/images/nav-icons/icons';
import Header from '../Header';
import EndBorrowerModal from "../../../Pages/EndBorrowers/endBorrowerModal"
import './style.scss';

const useStepperStatusIcon = (validated, createProductMenuItems, setCreateProductMenuItems) => {
  useEffect(() => {
    if (validated !== undefined && Object.keys(validated).length > 0) {
      setCreateProductMenuItems((prev) => {
        return prev.map((menuItems) => {
          return {
            ...menuItems,
            child: menuItems.child.map((item, index) => {
              if (validated[index] === true) {
                return { ...item, icon: <StepperPendingicon /> };
              }
              return item;
            }),
          };
        });
      });
    }
  }, [validated, setCreateProductMenuItems]);
};


const LeftMenu = React.memo(({ menuOpen, toggleMenu, activeStep, validated, onBackToPartnerClick }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isCreateProductPage = location.pathname.startsWith("/products/create") ? true : false;
  const [showEndBorrowersModal, setShowEndBorrowersModal] = useState(false);
  console.log(validated !== undefined && Object.keys(validated).length === 0, 'leftmenu')
  const menuItems = [
    { name: "Dashboard", icon: <DashboardIcon /> },
    { name: "Partners", icon: <PartnersIcon /> },
    { name: "Products", icon: <ProductsIcon /> },
    { name: "End Borrowers", icon: <EndBorrowersIcon /> },
    { name: "Documents", icon: <DocumentsIcon /> },
    { name: "Document Master", icon: <DocumentsMastericon /> },
    { name: "Fees & Charges", icon: <FeesandChargesIcon /> },
    { name: "Reports", icon: <ReportsIcon /> }
  ];

  const [createProductMenuItems, setCreateProductMenuItems] = useState([
    {
      name: "Product Schema", icon: <ProductSchemaicon />,
      child: [
        { name: "Details", icon: <StepperTodoIcon /> },
        { name: "Emi Configuration", icon: <StepperTodoIcon /> },
        { name: "Terms", icon: <StepperTodoIcon /> },
        { name: "Settings", icon: <StepperTodoIcon /> },
        { name: "Disbursements", icon: <StepperTodoIcon /> },
        { name: "Collections", icon: <StepperTodoIcon /> },
        { name: "Servicer Fee Interest", icon: <StepperTodoIcon /> }
      ]
    },
    {
      name: "SOP Configuration", icon: <SOPconfigurationicon />,
      child: [
        { name: "Create Loan", icon: <StepperTodoIcon /> },
        { name: "Update Loan", icon: <StepperTodoIcon /> },
        { name: "Agreement Signed", icon: <StepperTodoIcon /> },
        { name: "Post Disb.Document", icon: <StepperTodoIcon /> },
      ]
    },
    {
      name: "Credit Filter", icon: <CreditFiltericon />,
      child: [
        { name: "Initial Filter", icon: <StepperTodoIcon /> },
        { name: "Configure Filter", icon: <StepperTodoIcon /> },
        { name: "Summary", icon: <StepperTodoIcon /> },
      ]
    }
  ])

  const [expandedMenus, setExpandedMenus] = useState({});

  useEffect(() => {
    const initialExpandedMenus = createProductMenuItems.reduce((acc, _, index) => {
      acc[index] = index === 0;
      return acc;
    }, {});

    setExpandedMenus(initialExpandedMenus);
    // eslint-disable-next-line
  }, []);


  const toggleMenuExpansion = (index) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  useStepperStatusIcon(validated, createProductMenuItems, setCreateProductMenuItems);



  return (
    <>
      <div className="header">
        <Header />
      </div>
      <Card className={`left-menu ${menuOpen ? 'open' : 'closed'} ${isCreateProductPage ? 'create-product-left-menu' : ''}`}>
        <Card.Body className="menu">
          <ListGroup variant="flush">
            {
              !isCreateProductPage &&
              menuItems.map((menuItem, index) => (
                <NavLink
                  className={`nav-item ${({ isActive }) => isActive ? 'active' : 'pending'}`}
                  key={index}
                  to={menuItem.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}
                  onClick={(event) => {
                    if (menuItem.name === "End Borrowers") {
                      event.preventDefault();
                      setShowEndBorrowersModal(true);
                    }
                  }}
                >
                  {menuOpen ? (
                    <>
                      {menuItem.icon}
                      <span className='nav-items-name'>{menuItem.name}</span>
                    </>
                  ) : (
                    menuItem.icon
                  )}
                </NavLink>
              ))
            }

            <div className="sidebar-container">
              {
                isCreateProductPage &&
                <div className="my-3">
                  <div className="ms-2 leftarrow-partner"
                    onClick={() => {
                      navigate('/partners');
                      onBackToPartnerClick();
                    }}>
                    {/* <Link to="/partners" className="ml-1rem no-underline leftarrow-partner"><ArrowLefticon /><span className="back-to-partner">Back to Partner</span></Link> */}
                    <ArrowLefticon /><span className="back-to-partner">Back to Partner</span>
                  </div>
                  {
                    createProductMenuItems.map((menuItem, index) => (
                      <div key={index} className="product-menuitems">
                        <div className={`${expandedMenus[index] ? 'py-2' : ''}`} onClick={() => toggleMenuExpansion(index)}>
                          <span className="product-menuitem-icon">{menuItem.icon}</span>
                          <span className={`fs-14 ${expandedMenus[index] ? 'fw-700' : 'fw-500'} lh-18 color-heading-text`}>{menuItem.name}</span>
                        </div>

                        {
                          expandedMenus[index] && menuItem.child.length > 0 && menuItem.child.map((childmenu, index) => (
                            <React.Fragment key={index}>
                              {index !== 0 && <div className="menu-divider"></div>}
                              <NavLink
                                // to={`${menuItem.name === 'Product Schema' ? `/products/create/${menuItem.name.split(' ').join('-').toLowerCase()}` : `/products/create/${childmenu.name.toLowerCase().replace(/\s+/g, '')}`} `}
                                to={`/products/create/${menuItem.name.split(' ').join('-').toLowerCase()}`}
                                className={`ps-3 product-nav-item ${activeStep === index ? 'product-nav-item-active' : ''}`}
                                // className={`ps-3 product-nav-item ${({ isActive }) => isActive ? 'active' : 'pending'}`}
                                state={{ id: index + 1 }}
                              // onClick={() => setActiveNavItem(index)}
                              >
                                <span className="ms-2">{childmenu.icon}</span>
                                <span className={`fs-12 fw-500 lh-16 ${validated && validated[index] ? 'color-alert' : 'color-lable-text'} ms-2`}>{childmenu.name}</span>
                              </NavLink>
                            </React.Fragment>
                          ))}
                      </div>
                    ))
                  }
                </div>
              }
            </div>
          </ListGroup>
        </Card.Body>
      </Card>
      <EndBorrowerModal open={showEndBorrowersModal} onClose={() => setShowEndBorrowersModal(false)}>
      </EndBorrowerModal>
    </>
  );
});

export default LeftMenu;
