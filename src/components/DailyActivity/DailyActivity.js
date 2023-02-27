import React from 'react';
import './dailyactivity.css';

/**
 * DailyActivity component
 * @param
 * @returns
 */
function DailyActivity({ chart }) {
  return <div className='daily-activity-container'>{chart}</div>;
}

export default DailyActivity;
