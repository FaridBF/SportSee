import React from 'react';
import PropTypes from 'prop-types';
import './caloriemeasurementcard.css';

/**
 * CalorieMeasurementCard component
 * @param {object} chart - The chart object to display
 */
function CalorieMeasurementCard({ chart }) {
  return <div className='calorie-measurement-card'>{chart}</div>;
}

CalorieMeasurementCard.propTypes = {
  chart: PropTypes.object.isRequired
};

export default CalorieMeasurementCard;
