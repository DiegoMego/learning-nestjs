import { Col, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Login from '../views/auth/login';
import Unauthenticated from '../views/error/unauthenticated';

const LoginLayout = _ => {
  return (
    <Row className="g-0 position-absolute d-flex align-items-center w-100 h-100">
      <Col xs={12} sm={4}></Col>
      <Col xs={12} sm={4}>
        <Routes>
          <Route path='*' element={<Unauthenticated />} />
          <Route path='/auth/login' element={<Login />}
          />
        </Routes>
      </Col>
      <Col xs={12} sm={4}></Col>
    </Row>
  );
}

export default LoginLayout;