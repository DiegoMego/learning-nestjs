import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

export default function LoginLayout() {
  return (
    <Row className="g-0 position-absolute d-flex align-items-center w-100 h-100">
      <Col xs={12} sm={4} />
      <Col xs={12} sm={4}>
        <Outlet />
      </Col>
      <Col xs={12} sm={4} />
    </Row>
  );
}
