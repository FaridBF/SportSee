import React from 'react';
import './dailyactivity.css';

/**
 * DailyActivity component
 * @param {ReactNode} chart - The chart component to be rendered
 */
function DailyActivity({ chart }) {
  return <div className='daily-activity-container'>{chart}</div>;
}

export default DailyActivity;
