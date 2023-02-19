import React from 'react';
import IconCard from '../IconCard/IconCard';

import './statscard.css';

function StatsCard({ image, icon, data, name }) {
  console.log('data stats card', data);
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
