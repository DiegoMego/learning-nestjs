import React, { useEffect } from "react";
import { Container } from 'react-bootstrap';
import MainLayout from './layouts/MainLayout';
import LoginLayout from './layouts/LoginLayout';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function App() {
    const token = useSelector(state => state.auth.token);
    const navigate = useNavigate();
    
    useEffect(_ => {
        if (token) navigate('/');
    }, [token]);

    return (
        <Container fluid className="g-0">
            {token ? <MainLayout token={token} /> : <LoginLayout />}
        </Container>
    );
}