import './iconcard.css';

/**
 * IconCard component
 * @param props image(string) and icon(string)
 * @returns component that dynamically returns an icon and an image
 */
function IconCard({ image, icon }) {
  return (
    <div className='icon-container'>
      <img className={icon} src={image} alt='logo' />
    </div>
  );
}

export default IconCard;
