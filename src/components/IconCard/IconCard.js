import './iconcard.css';

function IconCard({ image, icon }) {
  return (
    <div className='icon-container'>
      <img className={icon} src={image} alt='logo' />
    </div>
  );
}

export default IconCard;
