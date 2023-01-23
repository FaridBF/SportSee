import './iconcard.css';

function IconCard({ image }) {
  return (
    <div>
      <img className='icon-leftmenu' src={image} alt='logo SportSee' />
    </div>
  );
}

export default IconCard;
