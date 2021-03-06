import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default function Logo({ style }) {
  return (
    <Link to="/" className={styles.logoStyle} style={style}>
      LOGO
    </Link>
  );
}
