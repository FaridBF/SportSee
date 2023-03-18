import React, { PureComponent } from 'react';
import {
  PieChart,
  Pie,
  RadialBarChart,
  RadialBar,
  Sector,
  Cell,
  Text,
  ResponsiveContainer,
  Label,
  Legend
} from 'recharts';
import DataModelisationService from '../../services/serviceModelisationData';

// const data = [{ value: 100 }, { value: 100 }];
// const COLORS = ['white', 'red'];

/**
 * PieChartWithPaddingAngle component recharts
 * @param
 * @returns
 */
export default class PieChartWithPaddingAngle extends PureComponent {
  render() {
    const { userInfos } = this.props;
    console.log('userInfos', userInfos);

    const data = [
      { name: 'completed', value: userInfos.data.score, fillColor: 'red' },
      {
        name: 'not-completed',
        value: 1 - userInfos.data.score,
        fillColor: 'transparent'
      }
    ];

    const formatPercent = (value) => `${(value * 100).toFixed(0)}%`;

    return (
      <>
        <p>Score avec RadialBarChart</p>
        {/* PIIIIEEEEE */}
        {/* <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            paddingLeft: '35px'
          }}
        >
          Score
        </Text> */}
        {/* <p>Score</p>
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
              value={DataModelisationService.converToPercent(
                userInfos.data.score
              )}
              position='center'
              className='chart-label'
            />
            <Label value={'de votre objectif'} position='center' />
            {data.map((entry, index) => (
              <Sector
                key={`sector-${index}`}
                value={entry.value}
                fill={COLORS[index % COLORS.length]}
              ></Sector>
            ))}
          </Pie>
        </PieChart> */}
        {/* <PieChart width={160} height={160}></PieChart> */}
        <PieChart width={250} height={220}>
          <Pie
            data={data}
            dataKey='value'
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
            cy={120}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.fillColor}
                cornerRadius='50%'
              />
            ))}
          </Pie>
        </PieChart>
      </>
    );
  }
}
