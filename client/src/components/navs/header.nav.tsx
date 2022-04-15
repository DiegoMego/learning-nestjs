import { Nav } from 'react-bootstrap';
import React, { useContext } from 'react';
import styles from '../../assets/scss/nav/header.module.scss';
import { Contexts } from '../../contexts';

export default function NavHeader({ title }: {title: string}) {
  const { collapse } = useContext(Contexts.NavCollapse);
  return (
    <Nav.Item className={[styles.container, collapse ? styles.collapse : ''].join(' ')}>
      <span className={styles.name}>{title}</span>
    </Nav.Item>
  );
}
