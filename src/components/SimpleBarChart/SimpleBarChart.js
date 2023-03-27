import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

import DataModelisationService from '../../services/serviceModelisationData';

/**
 * SimpleBarChart component recharts
 * @param {Array} props.activity.sessions - Array of sessions, each containing a day, kilogram and calories
 * @param {string} props.activity.sessions.day - Day of the session in string format ('2022-03-27')
 * @param {number} props.activity.sessions.kilogram - Weight measured during the session in kg
 * @param {number} props.activity.sessions.calories - Calories burned during the session in kcal
 * @param {number} props.activity.userId - User ID associated with the activity data
 * @example sessions: [{day: '1', kilogram: 70, calories: 240}] , userId: 18
 * @returns a component that displays in the form of a bar(Bar) the evolution of weight (YAxis) and calories (YAxis) day by day (XAxis) with a two Legend ( Calories, Kilogram)
 * and a description of component (<p>Activité quotidienne</p>) + On hover, the synthetic result (Tooltip)
 */
export default class SimpleBarChart extends PureComponent {
  render() {
    const { activity } = this.props;
    // console.log('activity', activity);
    const items = activity.data.sessions.map((item) => {
      item.day = DataModelisationService.converToDate(item.day);
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
            barCategoryGap={40}
            barGap={8} // espace entre les deux barres
          >
            <CartesianGrid strokeDasharray='4 2' vertical={false} />
            <XAxis
              dataKey={'day'}
              tickLine={false}
              padding={{
                right: -25,
                left: -25
              }}
            />
            <YAxis orientation='right' axisLine={false} tickLine={false} />
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

SimpleBarChart.propTypes = {
  activity: PropTypes.shape({
    data: PropTypes.shape({
      sessions: PropTypes.arrayOf(
        PropTypes.shape({
          day: PropTypes.string.isRequired,
          kilogram: PropTypes.number.isRequired,
          calories: PropTypes.number.isRequired
        })
      ).isRequired
    }).isRequired
  }).isRequired
};
