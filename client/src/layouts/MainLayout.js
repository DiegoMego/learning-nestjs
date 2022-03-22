import React, { Suspense } from "react";
import { Row, Col } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import QimiSideNav from '../components/Navs/QimiSideNav';
import QimiNavbar from '../components/NavBars/QimiNavbar';
import routes from '../router/routes';

const MainLayout = () => {
  return (
    <Row className="g-0">
      <Col md="auto">
        <QimiSideNav />
      </Col>
      <Col>
        <QimiNavbar />
        <Row>
          <Col>
            <Routes>
              {routes.map(route => {
                return (
                  <Route
                    path={route.path}
                    element={
                      <Suspense fallback={<></>}>
                        <route.element />
                      </Suspense>
                    }
                  />
                )
              })}
            </Routes>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default MainLayout;