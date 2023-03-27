import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { RadialBarChart, RadialBar, Legend } from 'recharts';
import DataModelisationService from '../../services/serviceModelisationData';

/**
 * ScoreRadialBarChart component recharts
 * @param object Data which consists of UserInfos: an object that consists of numbers and string,
 * score : number, id: number, keyData: an object that consists of numbers
 * @param {number} props.userInfos.data.score - score
 * @param {Object} props.userInfos.data.todayScore - today's score
 * @example data: id: 18, keyData: {calorieCount: 2500,...}, score: 0,3, userInfos: {firstName: 'Cecilia',...}
 * @returns a component that displays as a circle(RadialBarChart) the percentage goal achievement (renderLegend)
 * with a title of component.
 */
export default class ScoreRadialBarChart extends PureComponent {
  render() {
    const { userInfos } = this.props;
    // console.log('userInfos', userInfos);

    const data = [
      {
        id: 1,
        todayScore: (userInfos.data.score ?? userInfos.data.todayScore) * 100,
        fill: '#E60000'
      },
      { id: 2, todayScore: 100, opacity: 0 }
    ];

    const renderLegend = () => {
      return (
        <div className='containerScore'>
          <p className='resultScore'>
            {DataModelisationService.converToPercent(
              userInfos.data.score ?? userInfos.data.todayScore
            )}
          </p>
          <span className='descriptionScore'>
            de votre <br /> objectif
          </span>
        </div>
      );
    };

    return (
      <>
        <h1 className='titleRadialBarChart'>Score</h1>
        <RadialBarChart
          width={250}
          height={200}
          innerRadius={70}
          outerRadius={90}
          data={data}
          startAngle={90}
          endAngle={450}
        >
          <Legend
            content={renderLegend}
            layout='vertical'
            align='center'
            verticalAlign='middle'
          />
          <RadialBar
            minAngle={15}
            background
            clockWise={true}
            dataKey='todayScore'
            cornerRadius='10'
          />
        </RadialBarChart>
      </>
    );
  }
}

ScoreRadialBarChart.propTypes = {
  userInfos: PropTypes.shape({
    data: PropTypes.shape({
      score: PropTypes.number,
      todayScore: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};
