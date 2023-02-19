import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  LabelList,
  Line,
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
    calories_brulees: 49,
    poids: 69
  },
  {
    name: '2',
    calories_brulees: 49,
    poids: 70
  },
  {
    name: '3',
    calories_brulees: 49,
    poids: 71
  },
  {
    name: '4',
    calories_brulees: 49,
    poids: 70
  },
  {
    name: '5',
    calories_brulees: 49,
    poids: 70
  },
  {
    name: '6',
    calories_brulees: 49,
    poids: 71
  },
  {
    name: '7',
    calories_brulees: 49,
    poids: 69
  },
  {
    name: '8',
    calories_brulees: 49,
    poids: 70
  },
  {
    name: '9',
    calories_brulees: 49,
    poids: 70
  },
  {
    name: '10',
    calories_brulees: 49,
    poids: 69
  }
];

export default class SimpleBarChart extends PureComponent {
  render() {
    return (
      <>
        <p className='text-activity'>Activité quotidienne</p>
        <ResponsiveContainer
          width='100%'
          height='100%'
          background-color='#E60000'
        >
          <BarChart
            width={10}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
            barCategoryGap={25}
            barGap={8} // espace entre les deux barres
          >
            <CartesianGrid strokeDasharray='4 2' vertical={false} />
            <XAxis
              dataKey='name'
              tickLine={false}
              padding={{
                right: -25,
                left: -25
              }}
            />
            <YAxis
              dataKey='poids'
              axisLine={false}
              tickLine={false}
              // domain={['dataMin', 'dataMax']}
              orientation='right'
            />
            <Tooltip
              formatter={(value, name) => [`${value} ${name}`]}
              labelFormatter={() => ``}
              contentStyle={{ backgroundColor: '#E60000', border: '#E60000' }}
              itemStyle={{ color: 'white' }}
            />
            <Legend
              verticalAlign='top'
              align='right'
              height={36}
              dataKey='calories_brulees'
              iconType='circle'
            />
            <Bar
              name='Poids(kg)'
              dataKey='poids'
              fill='#282D30'
              radius={[50, 50, 0, 0]}
            />
            <Bar
              name='Calories brûlées (kCal)'
              dataKey='calories_brulees'
              fill='#E60000'
              radius={[50, 50, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </>
    );
  }
}
