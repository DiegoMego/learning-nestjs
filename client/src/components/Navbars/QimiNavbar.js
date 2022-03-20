import styles from './qiminavbar.module.css';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';

const QimiNavbar = (props) => {
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
                            <span className={styles.userfullname}>Diego Mego</span>
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