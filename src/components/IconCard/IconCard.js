import PropTypes from 'prop-types';
import './iconcard.css';

/**
 * IconCard component
 * @param {object} props - Props component
 * @param {string} props.image - The path to the image
 * @param {string} props.icon - The class name for the icon
 * @returns Component that dynamically returns an icon and an image
 */
function IconCard({ image, icon }) {
  return (
    <div className='icon-container'>
      <img className={icon} src={image} alt='logo' />
    </div>
  );
}

IconCard.propTypes = {
  image: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default IconCard;
