import React, { Suspense, useEffect } from "react";
import { Row, Col } from 'react-bootstrap';
import { Routes, Route, Outlet } from 'react-router-dom';
import QimiSideNav from '../components/Navs/QimiSideNav';
import QimiNavbar from '../components/NavBars/QimiNavbar';
import routes from '../router/routes';
import axios from '../api/axios';

const MainLayout = ({token}) => {
  // useEffect(_ => {
  //   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  // }, []);
  return (
    <Row className="g-0">
      <Col md="auto">
        <QimiSideNav />
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