import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: '1',
    uv: 4000,
    poids: 2400,
    amt: 70
  },
  {
    name: '2',
    calories_brulees: 3000,
    poids: 1398,
    amt: 2210
  },
  {
    name: '3',
    calories_brulees: 2000,
    poids: 9800,
    amt: 2290
  },
  {
    name: '4',
    calories_brulees: 2780,
    poids: 3908,
    amt: 2000
  },
  {
    name: '5',
    calories_brulees: 1890,
    poids: 4800,
    amt: 2181
  },
  {
    name: '6',
    calories_brulees: 2390,
    poids: 3800,
    amt: 2500
  },
  {
    name: '7',
    calories_brulees: 3490,
    poids: 4300,
    amt: 2100
  },
  {
    name: '8',
    calories_brulees: 3490,
    poids: 4300,
    amt: 2100
  },
  {
    name: '9',
    calories_brulees: 3490,
    poids: 4300,
    amt: 2100
  },
  {
    name: '10',
    calories_brulees: 3490,
    poids: 4300,
    amt: 2100
  }
];

export default class SimpleBarChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
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
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='poids' fill='#8884d8' />
          <Bar dataKey='calories_brulees' fill='#82ca9d' />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}