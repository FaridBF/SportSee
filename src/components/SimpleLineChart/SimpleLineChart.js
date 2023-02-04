import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'L',
    pv: 2400
  },
  {
    name: 'M',
    pv: 1398
  },
  {
    name: 'M',
    pv: 9800
  },
  {
    name: 'J',
    pv: 3908
  },
  {
    name: 'V',
    pv: 4800
  },
  {
    name: 'S',
    pv: 3800
  },
  {
    name: 'D',
    pv: 4300
  }
];

export default class SimpleLineChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <Tooltip />
          <Legend />
          <Line dataKey='pv' stroke='#8884d8' activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
