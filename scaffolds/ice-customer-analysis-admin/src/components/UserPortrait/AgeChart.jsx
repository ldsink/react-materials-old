import React from 'react';
import { Chart, Geom, Axis, Tooltip, Shape } from 'bizcharts';
import ChartTitle from './ChartTitle';

const data = [
  {
    name: 'YOUNG',
    value: 20,
    year: '19岁以下',
    washaway: 0.21014492753623193,
  },
  {
    name: 'YOUNG',
    value: 32,
    year: '20-29岁',
    washaway: 0.5596330275229358,
  },
  {
    name: 'MIDDLE',
    value: 22,
    year: '30-39岁',
    washaway: 0,
  },
  {
    name: 'MIDDLE',
    value: 18,
    year: '40-49岁',
    washaway: 0,
  },
  {
    name: 'OLD',
    value: 6,
    year: '50-59岁',
    washaway: 0,
  },
  {
    name: 'OLD',
    value: 2,
    year: '60岁以上',
    washaway: 0,
  },
];

Shape.registerShape('interval', 'textInterval', {
  drawShape(cfg, group) {
    const points = this.parsePoints(cfg.points); // 将0-1空间的坐标转换为画布坐标
    const { _origin: cfgOrigin } = cfg.origin;

    const value = cfgOrigin.value;
    group.addShape('text', {
      attrs: {
        text: value,
        textAlign: 'center',
        x: points[1].x + cfg.size / 2,
        y: points[1].y,
        fontFamily: 'PingFang SC',
        fontSize: 12,
        fill: '#BBB',
      },
    });
    const polygon = group.addShape('polygon', {
      attrs: {
        points: points.map((point) => {
          return [point.x, point.y];
        }),
        fill: cfg.color,
      },
    });
    return polygon;
  },
});
Shape.registerShape('interval', 'fallFlag', {
  getShapePoints({ x, y, y0, size }) {
    return [
      {
        x: x + size,
        y: y0 + size,
      },
      {
        x,
        y,
      },
    ];
  },

  drawShape(cfg, group) {
    const { _origin: cfgOrigin } = cfg.origin;

    if (cfgOrigin === data[data.length - 1]) {
      return;
    }

    const points = this.parsePoints(cfg.points); // 将0-1空间的坐标转换为画布坐标

    const p1 = points[0];
    const width = 9;
    const washaway = cfgOrigin.washaway;
    group.addShape('text', {
      attrs: {
        text: `${(washaway * 100).toFixed(1)} %`,
        x: p1.x - width / 2 - 14,
        y: p1.y - 14,
        fontFamily: 'PingFang SC',
        fontSize: 12,
        fill: '#BBB',
      },
    });
    const polygon = group.addShape('image', {
      attrs: {
        x: p1.x - 16,
        y: p1.y - 16,
        img:
          'https://zos.alipayobjects.com/rmsportal/JuBdciUyUAkewNAetxtS.png',
        width: 32,
        height: 32,
      },
    });
    return polygon; // 将自定义Shape返回
  },
});

export default function Columnmarked() {
  const colorSet = {
    YOUNG: '#1890ff',
    MIDDLE: '#f04864',
    OLD: '#FED46B',
  };
  const scale = {
    value: {
      alias: '人数',
    },
  };
  return (
    <div>
      <ChartTitle title="年龄分布" />
      <Chart
        height={240}
        data={data}
        padding={[60, 20, 40, 60]}
        scale={scale}
        forceFit
      >
        <Axis name="name" title={null} />
        <Tooltip />

        <Geom
          type="interval"
          position="year*value"
          color={[
            'name',
            (value) => {
              return colorSet[value];
            },
          ]}
          size={30}
        />
        <Geom
          type="interval"
          position="year*value"
          color="#E4E4E4"
          shape="fallFlag"
        />
      </Chart>
    </div>
  );
}
