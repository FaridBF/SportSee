import './iconcard.css';

/**
 * IconCard component
 * @param
 * @returns
 */
function IconCard({ image, icon }) {
  return (
    <div className='icon-container'>
      <img className={icon} src={image} alt='logo' />
    </div>
  );
}

export default IconCard;
