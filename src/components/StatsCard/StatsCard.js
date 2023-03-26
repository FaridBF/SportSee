import React from 'react';
import IconCard from '../IconCard/IconCard';

import './statscard.css';

/**
 * StatsCard component
 * @param props image (string), icon(string), data(string), name(string)
 * @returns component that returns an icon and an image via the IronCard component
 * with the user's data (protein, calories, lipids, carbohydrates)
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
