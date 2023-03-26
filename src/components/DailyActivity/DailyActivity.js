import React from 'react';
import './dailyactivity.css';

/**
 * DailyActivity component
 * @param object: chart
 */
function DailyActivity({ chart }) {
  console.log('chart', chart);
  return <div className='daily-activity-container'>{chart}</div>;
}

export default DailyActivity;
