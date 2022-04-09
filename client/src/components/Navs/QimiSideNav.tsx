import { Nav } from 'react-bootstrap';
import React, { useContext } from 'react';
import styles from '../../assets/scss/nav/sidenav.module.scss';
import data from '../../data/NavData';
import { contexts } from '../../contexts/index';
import QimiSideNavSection from './QimiSideNavSection';

function QimiSideNav() {
  const { collapse, setCollapse } = useContext(contexts.nav_collapse);
  const onClickHandle = () => setCollapse(!collapse);
  const onKeyPressHandle = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Tab') {
      setCollapse(!collapse);
    }
  };

  return (
    <div className={[styles.container, collapse ? styles.collapse : ''].join(' ')}>
      <Nav defaultActiveKey="/" className={styles['logo-container']}>
        <Nav.Item>
          <img
            src="/public/images/logo.svg"
            alt="Logo"
            className={styles.logo}
          />
        </Nav.Item>
        <i aria-label="header" role="button" tabIndex={0} className="bi bi-list" onClick={onClickHandle} onKeyPress={onKeyPressHandle} />
      </Nav>
      {data.map((nav) => (<QimiSideNavSection key={nav.id} title={nav.title} links={nav.links} />))}
    </div>
  );
}

export default QimiSideNav;
