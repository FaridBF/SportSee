import React, { PureComponent } from 'react';
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label
} from 'recharts';
import DataModelisationService from '../../services/serviceModelisationData';

const data = [
  { name: 'Group A', value: 100 },
  { name: 'Group B', value: 300 }
];
const COLORS = ['white', 'red', 'red', 'white'];

/**
 * PieChartWithPaddingAngle component recharts
 * @param
 * @returns
 */
export default class PieChartWithPaddingAngle extends PureComponent {
  render() {
    const { userInfos } = this.props;

    return (
      <>
        <p className='scoring'>Score</p>
        <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx={120}
            cy={100}
            startAngle={360}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill='#8884d8'
            paddingAngle={5}
            dataKey='value'
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Label
              value={
                DataModelisationService.converToPercent(userInfos.data.score) +
                ' de votre objectif'
              }
              position='center'
              className='chart-label'
            />
            {data.map((entry, index) => (
              <Sector
                key={`sector-${index}`}
                value={entry.value}
                fill={COLORS[index % COLORS.length]}
              >
                <Label>{entry.name}</Label>
              </Sector>
            ))}
          </Pie>
        </PieChart>
      </>
    );
  }
}
