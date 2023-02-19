import React from 'react';
import IconCard from '../IconCard/IconCard';

import './statscard.css';

function StatsCard({ image, icon, data }) {
  return (
    <div className='statscard'>
      <IconCard image={image} icon={icon} />
      <div>
        <p className='result-statscard'>{data}</p>
        {/* <p className='calorie-statscard'>Calories</p> */}
      </div>
    </div>
  );
}

export default StatsCard;
