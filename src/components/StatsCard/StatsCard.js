import React from 'react';
import IconCard from '../IconCard/IconCard';

import './statscard.css';

function StatsCard({ image, icon }) {
  return (
    <div className='statscard'>
      <IconCard image={image} icon={icon} />
      <div>
        <p classsName='result-statscard'>290g</p>
        <p className='calorie-statscard'>Calories</p>
      </div>
    </div>
  );
}

export default StatsCard;
