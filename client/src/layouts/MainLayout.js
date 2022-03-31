import React from "react";
import { Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import QimiSideNav from '../components/Navs/QimiSideNav';
import QimiNavbar from '../components/NavBars/QimiNavbar';
import { providers } from '../contexts/index';

const MainLayout = ({token}) => {
  return (
    <Row className="g-0">
      <Col md="auto">
        <providers.nav_collapse>
          <QimiSideNav />
        </providers.nav_collapse>
      </Col>
      <Col>
        <QimiNavbar />
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default MainLayout;