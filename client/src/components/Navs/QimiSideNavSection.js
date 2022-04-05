import styles from '../../assets/scss/nav/sidenavsection.module.scss';
import { contexts } from '../../contexts';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import QimiNavHeader from './QimiNavHeader';
import QimiSideNavDropdown from './QimiSideNavDropdown';
import { useContext } from 'react';

const QimiSideNavSection = ({title, links}) => {
    const { collapse } = useContext(contexts.nav_collapse);
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
                    <Link to={link.url} key={link.id} className="nav-link" eventKey={link.id} disabled={link.disabled}>
                        <i className={link.icon}></i>
                        <span className="link-name">{link.name}</span>
                    </Link>);
            })}
        </Nav>
    );
}

export default QimiSideNavSection;