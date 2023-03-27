import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from 'recharts';

import DataModelisationService from '../../services/serviceModelisationData';

/**
 * SimpleRadarChart component recharts
 * @param {Object} props that includes containing user performance data(an array that includes objects), the userID (a number) and Kind that is a string object
 * @param {Object[]} props.data - Array of objects containing user performance data.
 * @param {number} props.data[].value - User performance value.
 * @param {string} props.data[].kind - User performance type.
 * @param {Object} props.data.kind - Object containing performance type translations.
 * @example userID: 18 / data : 1 :{value: 240, kind: 'Energie'} / kind : 4 : "strength"
 * @returns a component that displays the user's value as a radar for the following criteria: "Cardio, Energie, Endurance, Force, Vitesse,Intensité"
 */
export default class SimpleRadarChart extends PureComponent {
  render() {
    const performanceData = this.props.performance.data;
    // console.log('performanceData', performanceData);

    const items = performanceData.data.map((performanceItem) => {
      const performanceKind = performanceItem.kind;
      performanceItem.kind = performanceData.kind[performanceKind];
      const stringObj = new String(performanceData.kind[performanceKind]);
      performanceItem.kind =
        DataModelisationService.translateEnglishToFrench(stringObj);
      return performanceItem;
    });

    return (
      <ResponsiveContainer
        width='100%'
        height='100%'
        stroke='#8884d8'
        fill='#8884d8'
      >
        <RadarChart
          cx='50%'
          cy='50%'
          outerRadius='75%'
          width={730}
          height={250}
          data={items}
          fill='#8884d8'
        >
          <PolarGrid fillOpacity={0.7} strokeWidth={2} radialLines={false} />
          <PolarAngleAxis dataKey='kind' stroke='white' tickLine={false} />
          <Radar
            name='Mike'
            dataKey='value'
            stroke='#E60000'
            fill='#E60000'
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}

SimpleRadarChart.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        kind: PropTypes.string.isRequired
      })
    ).isRequired,
    kind: PropTypes.object.isRequired
  })
};
