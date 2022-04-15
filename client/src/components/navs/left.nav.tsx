import { Nav } from 'react-bootstrap';
import React, { useContext } from 'react';
import styles from '../../assets/scss/nav/left.module.scss';
import data from '../../assets/data/nav.data';
import { Contexts } from '../../contexts/index';
import NavSection from './section.nav';

export default function NavLeft() {
  const { collapse, setCollapse } = useContext(Contexts.NavCollapse);
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
      {data.map((nav) => (<NavSection key={nav.id} title={nav.title} links={nav.links} />))}
    </div>
  );
}
