import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import QimiSideNav from './components/Navs/QimiSideNav';
import QimiNavbar from './components/NavBars/QimiNavbar';

export default function App() {
    return (
        <Container fluid className="g-0">
            <Row className="g-0">
                <Col md="auto">
                    <QimiSideNav />
                </Col>
                <Col>
                    <QimiNavbar />
                </Col>
            </Row>
        </Container>
    );
}