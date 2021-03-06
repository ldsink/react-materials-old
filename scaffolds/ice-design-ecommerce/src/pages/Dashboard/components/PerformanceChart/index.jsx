import React from 'react';
import IceContainer from '@icedesign/container';
import { Tab } from '@alifd/next';
import LineChart from './LineChart';
import Head from './Head';
import styles from './index.module.scss';

const MOCK_DATA = {
  all: {
    day: '677.00',
    month: '3621.00',
    target: '10000.00',
    percent: '30',
  },
  online: {
    day: '1286.00',
    month: '2836.00',
    target: '5000.00',
    percent: '61',
  },
  offline: {
    day: '892.00',
    month: '1928.00',
    target: '5000.00',
    percent: '28',
  },
};

export default function PerformanceChart() {
  return (
    <IceContainer className={styles.flowStatistics}>
      <h4 className="title">
        销售业绩
      </h4>
      <Tab shape="text" size="small">
        <Tab.Item title="全店" key="1">
          <Head data={MOCK_DATA.all} />
          <LineChart />
        </Tab.Item>
        <Tab.Item title="网店" key="2">
          <Head data={MOCK_DATA.online} />
          <LineChart />
        </Tab.Item>
        <Tab.Item title="门店" key="3">
          <Head data={MOCK_DATA.offline} />
          <LineChart />
        </Tab.Item>
      </Tab>
    </IceContainer>
  );
}
PerformanceChart.displayName = 'PerformanceChart';
