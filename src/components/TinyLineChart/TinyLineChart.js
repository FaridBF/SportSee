import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

import DataModelisationService from '../../services/serviceModelisationData';

export default class TinyLineChart extends PureComponent {
  render() {
    const { averageSessions } = this.props;
    // console.log('averageSessions', averageSessions);
    const items = averageSessions.data.sessions.map((item) => {
      item.day = DataModelisationService.getDayOfWeek(item.day);
      return item;
    });

    return (
      <>
        <p className='duration-of-sessions'>Durée moyenne des sessions</p>
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
            />{' '}
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
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  }
}
