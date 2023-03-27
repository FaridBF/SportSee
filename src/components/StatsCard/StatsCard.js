import React from 'react';
import PropTypes from 'prop-types';

import IconCard from '../IconCard/IconCard';
import './statscard.css';

/**
 * StatsCard component
 * @param {Object} props - The props object of the component.
 * @param {string} props.image - The URL of the image to be displayed.
 * @param {string} props.icon - The name of the icon to be displayed.
 * @param {string} props.data - The data to be displayed.
 * @param {string} props.name - The name of the data to be displayed.
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

StatsCard.propTypes = {
  image: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default StatsCard;
