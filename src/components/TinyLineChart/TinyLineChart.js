import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

import DataModelisationService from '../../services/serviceModelisationData';

/**
 * TinyLineChart component
 * @param data is a Array (sessions) of object
 * @param {Object} props.averageSessions - An object containing the sessions data to be displayed.
 * @param {Object} props.averageSessions.data - An object containing the sessions array.
 * @param {Array} props.averageSessions.data.sessions - An array containing objects representing the sessions.
 * @param {string} props.averageSessions.data.sessions.day - The day of the session as a string (ex: 'M', 'T', 'W', 'Th', 'F', 'Sa', 'Su').
 * @param {number} props.averageSessions.data.sessions.sessionLength - The length of the session in minutes.
 * @example 0 : {day:'L', sessionLenght:30}
 * @returns {React.Component} a component that displays the average duration of a session with a legend "Durée moyenne des sessions"
 */
export default class TinyLineChart extends PureComponent {
  render() {
    const { averageSessions } = this.props;
    console.log('averageSessions', averageSessions);
    const items = averageSessions.data.sessions.map((item) => {
      item.day = DataModelisationService.getDayOfWeek(item.day).toString();
      console.log('item.day', typeof item.day);
      console.log('item', item);
      return item;
    });

    const renderLegend = () => {
      return <p className='duration-of-sessions'>Durée moyenne des sessions</p>;
    };

    return (
      <>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            width={500}
            height={300}
            data={items}
            margin={{ top: 5, right: 15, left: 15, bottom: 5 }}
          >
            <Tooltip
              formatter={(value, name) => [`${value} ${name}`]}
              labelFormatter={() => ``}
              contentStyle={{
                backgroundColor: 'white'
              }}
              itemStyle={{ color: 'black' }}
            />
            <XAxis
              axisLine={false}
              dataKey='day'
              tickLine={false}
              tick={{
                stroke: '#FF5A5A',
                fontWeight: '500',
                opacity: '1.4',
                fontSize: 10
              }}
            />
            <Line
              name='min'
              type='monotone'
              dataKey='sessionLength'
              stroke='#F9C3C3'
              strokeWidth={2}
              style={{
                color: '#FF5A5A',
                fontWeight: '500',
                fontSize: '15px',
                lineHeight: '24px',
                opacity: '0.5'
              }}
            />
            <Legend content={renderLegend} verticalAlign='top' />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  }
}

TinyLineChart.propTypes = {
  averageSessions: PropTypes.shape({
    data: PropTypes.shape({
      sessions: PropTypes.arrayOf(
        PropTypes.shape({
          //TODO
          // day: PropTypes.string.isRequired,
          sessionLength: PropTypes.number.isRequired
        })
      )
    }).isRequired
  }).isRequired
};
