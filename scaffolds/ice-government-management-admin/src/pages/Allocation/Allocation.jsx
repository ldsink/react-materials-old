import React from 'react';
import Container from '@icedesign/container';
import SearchBar from './components/SearchBar';
import AllocationTable from './components/AllocationTable';
import styles from './index.module.scss';

export default function Allocation() {
  return (
    <div>
      <div className={styles.nav}>
        <h2 className={styles.breadcrumb}>案款账号分配</h2>
      </div>
      <SearchBar />
      <Container className={styles.container}>
        <AllocationTable />
      </Container>
    </div>
  );
}
