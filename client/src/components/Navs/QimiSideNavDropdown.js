import styles from '../../assets/scss/nav/dropdown.module.scss';
import React, { useState, useContext } from 'react';
import { contexts } from '../../contexts';
import { Nav } from 'react-bootstrap';

const QimiSideNavDropdown = ({link}) => {
    const [open, setOpen] = useState(false);
    const { collapse } = useContext(contexts.nav_collapse);

    function OnNavLinkClick() { 
        if (!collapse) setOpen(!open);
    }

    return (
        <div className={collapse ? styles.collapse : ""}>
            <Nav.Link eventKey={link.id} className={styles.header} disabled={link.disabled} onClick={OnNavLinkClick}>
                <i className={link.icon}></i>
                <span className="link-name">{link.name}</span>
                <i className={["bi bi-caret-left-fill float-end", styles.arrow, open ?  styles.open : ""].join(" ")}></i>
            </Nav.Link>
            <div className={[styles.sublinks, open ? styles.open : ""].join(" ")}>
                {link.children.map(function (sublink) {
                    return (
                        <Nav.Link key={sublink.id} eventKey={sublink.id} href={sublink.url} disabled={sublink.disabled}>
                            <i className="bi bi-clock"></i>
                            <span className={styles.name}>{sublink.name}</span>
                        </Nav.Link>
                    );
                })}
            </div>
        </div>
    );
}

export default QimiSideNavDropdown;