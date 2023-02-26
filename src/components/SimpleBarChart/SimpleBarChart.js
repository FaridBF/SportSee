import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

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

import { converToDate } from '../../services/serviceModelisationData';
export default class SimpleBarChart extends PureComponent {
  // static propTypes = {
  //   activity: PropTypes.shape({
  //     data: PropTypes.shape({
  //       sessions: PropTypes.arrayOf(
  //         PropTypes.shape({
  //           day: PropTypes.string.isRequired,
  //           kilogram: PropTypes.number.isRequired,
  //           calories: PropTypes.number.isRequired
  //         })
  //       ).isRequired
  //     }).isRequired
  //   }).isRequired
  // };
  render() {
    const { activity } = this.props;
    console.log('activity', activity);
    const items = activity.data.sessions.map((item) => {
      item.day = converToDate(item.day);
      return item;
    });

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
            data={items}
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
              dataKey={'day'}
              tickLine={false}
              domain={['dataMin', 'dataMax']}
              padding={{
                right: -25,
                left: -25
              }}
            />
            <YAxis
              dataKey='kilogram'
              axisLine={false}
              tickLine={false}
              domain={[68, 71]}
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
              dataKey='calories'
              iconType='circle'
            />
            <Bar
              name='Poids(kg)'
              dataKey='kilogram'
              fill='#282D30'
              radius={[50, 50, 0, 0]}
            />
            <Bar
              name='Calories brûlées (kCal)'
              dataKey='calories'
              fill='#E60000'
              radius={[50, 50, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </>
    );
  }
}
