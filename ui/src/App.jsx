import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import LeftMenu from './Components/Common/LeftMenu';
import MainContent from './Components/Common/MainContent';
import './App.scss';
import { UpdateCreditFilterContextProvider } from './Context/UpdateCreditFilterContext';


const App = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
  <div className="wrapper">
      <Router>
      <Container fluid className={`app-container ${menuOpen ? 'menu-open' : 'menu-closed'}`}>
        <Row>
          <Col className="left-menu" sm={2}>
            <UpdateCreditFilterContextProvider>
                <LeftMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
            </UpdateCreditFilterContextProvider>
          </Col>
          <Col className="main-content" sm={10}>
            <MainContent />
          </Col>
        </Row>
      </Container>
    </Router>
  </div>
  );
};

export default App;
