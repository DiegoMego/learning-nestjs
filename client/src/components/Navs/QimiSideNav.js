import styles from '../../assets/scss/nav/sidenav.module.scss';
import { data } from '../../data/NavData';
import { Nav } from 'react-bootstrap';
import { contexts } from '../../contexts/index';
import QimiSideNavSection from './QimiSideNavSection';
import { useContext } from 'react';

const QimiSideNav = _ => {
  const { collapse, setCollapse } = useContext(contexts.nav_collapse);
  const onClickHandle = _ => setCollapse(!collapse);
    
  return (
    <div className={[styles.container, collapse ? styles.collapse : ""].join(" ")}>
      <Nav defaultActiveKey="/" className={styles["logo-container"]}>
        <Nav.Item>
          <img
            src="/public/images/logo.svg"
            alt="Logo"
            className={styles.logo}
          />
        </Nav.Item>
        <i className="bi bi-list" onClick={onClickHandle}></i>
      </Nav>
      {data.map(function (nav) {
        return (<QimiSideNavSection key={nav.id} title={nav.title} links={nav.links}/>);
      })}
    </div>
  );
}

export default QimiSideNav;