import React, { useEffect } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import styles from '../../assets/scss/navbar/qiminavbar.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/store.hooks';
import user from '../../redux/actions/user.action';

export default function CustomNavbar() {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.user.profile);

  useEffect(() => {
    dispatch(user.profile.get());
  }, []);

  return (
    <Navbar bg={styles.container} expand="sm" className={styles.container}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link} className={styles['dropdown-item']}>
              <i className="bi bi-bell" />
            </Dropdown.Toggle>
            <Dropdown.Menu align="end" className={styles['dropdown-menu']}>
              <Dropdown.Item className={styles['dropdown-item']}>Hello there!</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link} className={styles['dropdown-item']}>
              <i className="bi bi-person-circle" />
              <span className={styles.userfullname}>
                {profile.FirstName}
                {profile.LastName}
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu align="end" className={styles['dropdown-menu']}>
              <Dropdown.Item className={styles['dropdown-item']}>Mi Perfil</Dropdown.Item>
              <Dropdown.Item className={styles['dropdown-item']}>Cerrar Sesión</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
