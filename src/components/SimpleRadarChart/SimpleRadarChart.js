import React, { PureComponent } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from 'recharts';

const data = [
  {
    subject: 'Intensité',
    A: 120,
    B: 110,
    fullMark: 150
  },
  {
    subject: 'Vitesse',
    A: 98,
    B: 130,
    fullMark: 150
  },
  {
    subject: 'Force',
    A: 86,
    B: 130,
    fullMark: 150
  },
  {
    subject: 'Endurance',
    A: 99,
    B: 100,
    fullMark: 150
  },
  {
    subject: 'Energie',
    A: 85,
    B: 90,
    fullMark: 150
  },
  {
    subject: 'Cardio',
    A: 65,
    B: 85,
    fullMark: 150
  }
];

// const data2 = {
//   data: {
//     userId: 18,
//     kind: {
//       1: 'cardio',
//       2: 'energy',
//       3: 'endurance',
//       4: 'strength',
//       5: 'speed',
//       6: 'intensity'
//     },
//     data: [
//       {
//         value: 200,
//         kind: 1
//       },
//       {
//         value: 240,
//         kind: 2
//       },
//       {
//         value: 80,
//         kind: 3
//       },
//       {
//         value: 80,
//         kind: 4
//       },
//       {
//         value: 220,
//         kind: 5
//       },
//       {
//         value: 110,
//         kind: 6
//       }
//     ]
//   }
// };

export default class Example extends PureComponent {
  render() {
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
          data={data}
          fill='#8884d8'
        >
          <PolarGrid fillOpacity={0.7} strokeWidth={2} radialLines={false} />
          <PolarAngleAxis dataKey='subject' stroke='white' tickLine={false} />
          <Radar
            name='Mike'
            dataKey='A'
            stroke='#E60000'
            fill='#E60000'
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
