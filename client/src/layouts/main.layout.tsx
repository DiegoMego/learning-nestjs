import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import NavLeft from '../components/navs/left.nav';
import CustomNavbar from '../components/navbars/custom.navbar';
import { Providers } from '../contexts/index';

function MainLayout() {
  return (
    <Row className="g-0">
      <Col md="auto">
        <Providers.NavCollapse>
          <NavLeft />
        </Providers.NavCollapse>
      </Col>
      <Col>
        <div className="d-flex flex-column h-100">
          <CustomNavbar />
          <Row className="g-0 flex-grow-1">
            <Col>
              <Outlet />
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}

export default MainLayout;
