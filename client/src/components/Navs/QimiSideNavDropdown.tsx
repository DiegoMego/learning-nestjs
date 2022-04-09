/* global NavDataLinks */
import React, { useState, useContext } from 'react';
import { Nav } from 'react-bootstrap';
import styles from '../../assets/scss/nav/dropdown.module.scss';
import { contexts } from '../../contexts';

function QimiSideNavDropdown({ link }: { link: NavDataLinks}) {
  const [open, setOpen] = useState(false);
  const { collapse } = useContext(contexts.nav_collapse);

  const OnNavLinkClick = () => {
    if (!collapse) setOpen(!open);
  };

  return (
    <div className={collapse ? styles.collapse : ''}>
      <Nav.Link
        eventKey={link.id}
        className={styles.header}
        disabled={link.disabled}
        onClick={OnNavLinkClick}
      >
        <i className={link.icon} />
        <span className="link-name">{link.name}</span>
        <i className={['bi bi-caret-left-fill float-end', styles.arrow, open ? styles.open : ''].join(' ')} />
      </Nav.Link>
      <div className={[styles.sublinks, open ? styles.open : ''].join(' ')}>
        {link.children.map((sublink) => (
          <Nav.Link
            key={sublink.id}
            eventKey={sublink.id}
            href={sublink.url}
            disabled={sublink.disabled}
          >
            <i className="bi bi-clock" />
            <span className={styles.name}>{sublink.name}</span>
          </Nav.Link>
        ))}
      </div>
    </div>
  );
}

export default QimiSideNavDropdown;
