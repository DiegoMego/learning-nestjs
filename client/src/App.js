import React, { Suspense, useEffect } from "react";
import { Container } from 'react-bootstrap';
import MainLayout from './layouts/MainLayout';
import LoginLayout from './layouts/LoginLayout';
import Login from "./views/auth/login";
import NotFound from "./views/error/notfound";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import axios from './api/axios';
import Protect from './router/protect';
import routes from './router/routes';

export default function App() {
    const token = useSelector(state => state.auth.token);
    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(_ => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const origin = location.state?.from?.pathname || '/';
            navigate(origin);
        }
    }, [token]);

    return (
        <Container fluid className="g-0">
            <Routes>
                <Route element={<LoginLayout />}>
                    <Route path='*' element={<NotFound />} />
                    <Route path='/auth/login' element={<Login />} />
                </Route>
                <Route element={<Protect token={token} />}>
                    <Route element={<MainLayout />}>
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
                    </Route>
                </Route>
            </Routes>
            {/* {token ? <MainLayout token={token} /> : <LoginLayout />} */}
        </Container>
    );
}