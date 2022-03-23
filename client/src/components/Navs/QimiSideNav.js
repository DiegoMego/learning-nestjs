import { data } from '../../data/NavData';
import styles from './sidenav.module.scss';
import { Nav } from 'react-bootstrap';
import { NavbarCollapseContext, NavbarCollapseProvider } from '../Contexts/NavbarCollapseContext';
import QimiSideNavSection from './QimiSideNavSection';
import { useContext } from 'react';

const QimiSideNav = _ => {
    return (
            <NavbarCollapseProvider>
                <ContentProvider />
            </NavbarCollapseProvider>
        );
    }
    
function ContentProvider() {
    const { collapse, setCollapse } = useContext(NavbarCollapseContext);
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