/* eslint-disable indent */
import React, { Suspense, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useAbility } from '@casl/react';
import MainLayout from './layouts/main.layout';
import LoginLayout from './layouts/login.layout';
import Login from './views/auth/login';
import DefaultLoader from './views/loader/default.loader';
import NotFound from './views/error/notfound';
import Unauthorized from './views/error/unauthorized';
import axios from './api/axios';
import Protect from './router/protect';
import routes from './router/routes';
import auth from './redux/actions/auth.action';
import { AUTHENTICATION_STATUS } from './shared/constants';
import AbilityContext from './contexts/ability.context';
import { useAppDispatch, useAppSelector } from './hooks/store.hooks';

type LocationState = {
  state?: {
    from?: {
      pathname?: string,
    },
  }
}

export default function App() {
  const token = useAppSelector((state) => state.auth.token);
  const status = useAppSelector((state) => state.auth.status);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const ability = useAbility(AbilityContext);

  useEffect(() => {
    switch (status) {
      case AUTHENTICATION_STATUS.AUTHENTICATED:
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        if (localStorage.getItem('authenticated') === 'false') {
          localStorage.setItem('authenticated', 'true');
          const currentLocation = location as LocationState;
          const origin = currentLocation.state?.from?.pathname || '/';
          navigate(origin);
        }
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
      {/* <Unauthorized /> */}
      {status === AUTHENTICATION_STATUS.PENDING ? (
        <DefaultLoader />
      ) : (
        <Routes>
          <Route element={<LoginLayout />}>
            <Route path="*" element={<NotFound />} />
            <Route path="/auth/login" element={<Login />} />
          </Route>
          <Route element={<Protect token={token} />}>
            <Route element={<MainLayout />}>
              {routes.map((route) => (
                <Route
                  path={route.path}
                  // eslint-disable-next-line prettier/prettier
                  element={(
                    <Suspense fallback={<DefaultLoader />}>
                      {ability.can(
                        route.auth_acl.action,
                        route.auth_acl.subject,
                      ) ? (
                        <route.element />
                      ) : (
                        <Unauthorized />
                      )}
                    </Suspense>
                    // eslint-disable-next-line prettier/prettier
                  )}
                />
              ))}
            </Route>
          </Route>
        </Routes>
      )}
    </Container>
  );
}
