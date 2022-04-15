/* global NavDataLinks */
import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../../assets/scss/nav/section.module.scss';
import { Contexts } from '../../contexts';
import NavHeader from './header.nav';
import NavDropdown from './dropdown.nav';

export default function NavSection(
  { title, links }: { title: string, links: Array<NavDataLinks> },
) {
  const { collapse } = useContext(Contexts.NavCollapse);
  return (
    <Nav
      defaultActiveKey="/"
      className={['qimi-nav-section flex-column', styles.nav, collapse ? styles.collapse : ''].join(' ')}
    >
      <NavHeader title={title} />
      {links.map((link) => {
        if (link.children.length) {
          return (
            <NavDropdown key={link.id} link={link} />
          );
        }
        return (
          <Link
            to={link.url}
            key={link.id}
            className="nav-link"
            // eventKey={link.id}
            // disabled={link.disabled}
          >
            <i className={link.icon} />
            <span className="link-name">{link.name}</span>
          </Link>
        );
      })}
    </Nav>
  );
}
