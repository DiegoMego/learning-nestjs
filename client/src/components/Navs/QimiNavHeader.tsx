import { Nav } from 'react-bootstrap';
import React, { useContext } from 'react';
import styles from '../../assets/scss/nav/navheader.module.scss';
import { Contexts } from '../../contexts';

function QimiNavHeader({ title }: {title: string}) {
  const { collapse } = useContext(Contexts.NavCollapse);
  return (
    <Nav.Item className={[styles.container, collapse ? styles.collapse : ''].join(' ')}>
      <span className={styles.name}>{title}</span>
    </Nav.Item>
  );
}

export default QimiNavHeader;
