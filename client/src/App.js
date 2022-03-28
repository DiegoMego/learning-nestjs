import React, { useEffect } from "react";
import { Container } from 'react-bootstrap';
import MainLayout from './layouts/MainLayout';
import LoginLayout from './layouts/LoginLayout';
import { useSelector } from "react-redux";

export default function App() {
    const token = useSelector(state => state.auth.token);

    return (
        <Container fluid className="g-0">
            {token ? <MainLayout token={token} /> : <LoginLayout />}
        </Container>
    );
}