import styles from './navheader.module.css';
import { NavbarCollapseContext } from '../Contexts/NavbarCollapseContext';
import { Nav } from 'react-bootstrap';
import { useContext } from 'react';

const QimiNavHeader = ({ title }) => {
    const { collapse } = useContext(NavbarCollapseContext);
    return (
        <Nav.Item className={[styles.container, collapse ? styles.collapse : ""].join(" ")}>
            <span className={styles.name}>{title}</span>
        </Nav.Item>
    );
}

export default QimiNavHeader;