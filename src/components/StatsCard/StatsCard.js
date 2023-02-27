import React from 'react';
import IconCard from '../IconCard/IconCard';

import './statscard.css';

/**
 * StatsCard component
 * @param
 * @returns
 */
function StatsCard({ image, icon, data, name }) {
  return (
    <div className='statscard'>
      <IconCard image={image} icon={icon} />
      <div>
        <p className='result-statscard'>{data}</p>
        <p className='calorie-statscard'>{name}</p>
      </div>
    </div>
  );
}

export default StatsCard;
