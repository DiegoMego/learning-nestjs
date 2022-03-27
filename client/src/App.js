import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import MainLayout from './layouts/MainLayout';

export default function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <Container fluid className="g-0">
            <MainLayout />
        </Container>
    );
}