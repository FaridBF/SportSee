import React, { PureComponent } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from 'recharts';

export default class Example extends PureComponent {
  render() {
    const performanceData = this.props.performance.data;
    console.log('this.props', this.props);

    const items = performanceData.data.map((performanceItem) => {
      const performanceKind = performanceItem.kind;
      performanceItem.kind = performanceData.kind[performanceKind];
      console.log('performanceItem', performanceItem);
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
