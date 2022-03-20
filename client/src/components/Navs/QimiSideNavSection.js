import styles from './sidenavsection.module.css';
import { NavbarCollapseContext } from '../Contexts/NavbarCollapseContext';
import { Nav } from 'react-bootstrap';
import QimiNavHeader from './QimiNavHeader';
import QimiSideNavDropdown from './QimiSideNavDropdown';
import { useContext } from 'react';

const QimiSideNavSection = ({title, links}) => {
    const { collapse } = useContext(NavbarCollapseContext);
    return (
        <Nav defaultActiveKey="/" className={["qimi-nav-section flex-column", styles.nav, collapse ? styles.collapse : ""].join(" ")}>
            <QimiNavHeader title={title} />
            {links.map(function (link) {
                if (link.children.length) {
                    return (
                        <QimiSideNavDropdown key={link.id} link={link}/>
                    );
                }
                return (
                    <Nav.Link key={link.id} eventKey={link.id} href={link.url} disabled={link.disabled}>
                        <i className={link.icon}></i>
                        <span className="link-name">{link.name}</span>
                    </Nav.Link>);
            })}
        </Nav>
    );
}

export default QimiSideNavSection;