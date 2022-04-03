import React, { Suspense, useEffect } from "react";
import { Container } from 'react-bootstrap';
import MainLayout from './layouts/MainLayout';
import LoginLayout from './layouts/LoginLayout';
import Login from "./views/auth/login";
import LoginLoader from './views/loader/login.loader';
import NotFound from "./views/error/notfound";
import Unauthorized from "./views/error/unauthorized";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import axios from './api/axios';
import Protect from './router/protect';
import routes from './router/routes';
import auth from "./redux/actions/auth.action";
import { AUTHENTICATION_STATUS } from "./shared/constants";
import { useAbility } from '@casl/react';
import AbilityContext from "./contexts/ability.context";

export default function App() {
    const token = useSelector(state => state.auth.token);
    const status = useSelector(state => state.auth.status);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const ability = useAbility(AbilityContext);
    
    useEffect(_ => {
        switch (status) {
            case AUTHENTICATION_STATUS.AUTHENTICATED:
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const origin = location.state?.from?.pathname || '/';
                navigate(origin);
                break;
            case AUTHENTICATION_STATUS.PENDING:
                dispatch(auth.refresh());
                break;
            default:
                break;
        }
    }, [status]);

    return (
        <Container fluid className="g-0">
            <LoginLoader />
            {/* {status === AUTHENTICATION_STATUS.PENDING ? <LoginLoader /> :
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
                                            {ability.can(route.auth_acl.action, route.auth_acl.subject) ? <route.element /> : <Unauthorized />}
                                        </Suspense>
                                        }
                                    />
                                )
                            })}
                        </Route>
                    </Route>
                </Routes>
            } */}
        </Container>
    );
}