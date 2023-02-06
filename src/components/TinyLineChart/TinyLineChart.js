import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

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

export default class TinyLineChart extends PureComponent {
  render() {
    return (
      <>
        <p className='duration-of-sessions'>Durée moyenne des sessions</p>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 15, left: 15, bottom: 5 }}
          >
            <Tooltip />
            <XAxis axisLine={false} dataKey='name' tickLine={false} />
            <Line
              type='monotone'
              dataKey='pv'
              stroke='#F9C3C3'
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  }
}
