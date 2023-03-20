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

    // const objectif = <p className='objectif'>de votre objectif</p>;

    return (
      <>
        <p>Score</p>
        {/* <Text width={250} height={220}>
          Score
        </Text> */}

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
            <Label
              value={DataModelisationService.converToPercent(
                userInfos.data.score
              )}
              position='center'
              fill='black'
            />
            <Label
              className='chart-label'
              value={'de votre ojectif'}
              width={10}
              fill='black'
              // position='insideBottom'
            />
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

{
  /* <div className='scoring'>
          <p>{DataModelisationService.converToPercent(userInfos.data.score)}</p>
          <span>de votre objectif</span>
        </div> */
}
{
  /* <p className='scoreLabel'>
          <span className='scoreValue'>
            {DataModelisationService.converToPercent(userInfos.data.score)}
          </span>
          <br />
          de votre
          <br />
          objectif
        </p> */
}
