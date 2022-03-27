import { Col, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Login from '../views/auth/login';
import Unauthenticated from '../views/error/unauthenticated';

const LoginLayout = _ => {
  return (
    <Row>
      <Col xs={12} sm={3}></Col>
      <Col xs={12} sm={6}>
        <Routes>
          <Route path='*' element={<Unauthenticated />} />
          <Route path='/auth/login' element={<Login />}
          />
        </Routes>
      </Col>
      <Col xs={12} sm={3}></Col>
    </Row>
  );
}

export default LoginLayout;