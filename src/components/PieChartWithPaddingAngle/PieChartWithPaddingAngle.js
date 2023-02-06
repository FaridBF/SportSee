import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 100 },
  { name: 'Group B', value: 300 }
  // { name: 'Group C', value: 300 },
  // { name: 'Group D', value: 200 }
];
const COLORS = ['white', 'red', 'red', 'white'];

export default class Example extends PureComponent {
  render() {
    return (
      <>
        <p className='scoring'>Score</p>
        <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx={120}
            cy={110}
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
          </Pie>
        </PieChart>
      </>
    );
  }
}
