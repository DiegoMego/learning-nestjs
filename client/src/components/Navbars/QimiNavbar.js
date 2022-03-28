import styles from './qiminavbar.module.scss';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import user from '../../redux/actions/user.auction';

const QimiNavbar = (props) => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    useEffect(async () => {
        dispatch(user.profile.get('ede1d0bb-41d1-427d-8682-141f4f20c1dd'));
    }, []);

    return (
        <Navbar bg={styles.container} variant="custom" expand="sm" className={styles.container}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Dropdown as={Nav.Item}>
                        <Dropdown.Toggle as={Nav.Link} className={styles["dropdown-item"]}>
                            <i className="bi bi-bell"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu align="end" className={styles["dropdown-menu"]}>
                            <Dropdown.Item className={styles["dropdown-item"]}>Hello there!</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown as={Nav.Item}>
                        <Dropdown.Toggle as={Nav.Link} className={styles["dropdown-item"]}>
                            <i className="bi bi-person-circle"></i>
                            <span className={styles.userfullname}>{profile.FirstName} {profile.LastName}</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu align="end" className={styles["dropdown-menu"]}>
                            <Dropdown.Item className={styles["dropdown-item"]}>Mi Perfil</Dropdown.Item>
                            <Dropdown.Item className={styles["dropdown-item"]}>Cerrar Sesión</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default QimiNavbar;