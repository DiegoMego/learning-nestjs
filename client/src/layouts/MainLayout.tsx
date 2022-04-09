import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import QimiSideNav from '../components/Navs/QimiSideNav';
import QimiNavbar from '../components/Navbars/QimiNavbar';
import { providers } from '../contexts/index';

function MainLayout() {
  return (
    <Row className="g-0">
      <Col md="auto">
        <providers.nav_collapse>
          <QimiSideNav />
        </providers.nav_collapse>
      </Col>
      <Col>
        <div className="d-flex flex-column h-100">
          <QimiNavbar />
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