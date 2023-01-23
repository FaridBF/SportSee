import IconCard from '../IconCard/IconCard';
import './leftmenu.css';

function LeftMenu() {
  return (
    <section className='leftmenu-section'>
      <IconCard />
      <IconCard />
      <IconCard />
      <IconCard />
      <p className='text-section'>Copyright SportSee 2023</p>
    </section>
  );
}

export default LeftMenu;
