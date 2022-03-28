import { Col, Row } from 'react-bootstrap';
import { Outlet, Route, Routes } from 'react-router-dom';

const LoginLayout = _ => {
  return (
    <Row className="g-0 position-absolute d-flex align-items-center w-100 h-100">
      <Col xs={12} sm={4}></Col>
      <Col xs={12} sm={4}>
        <Outlet />
      </Col>
      <Col xs={12} sm={4}></Col>
    </Row>
  );
}

export default LoginLayout;