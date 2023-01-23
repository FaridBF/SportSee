import IconCard from '../IconCard/IconCard';

import iconBike from '../../assets/iconLeftMenu/iconBike.png';
import iconMusculation from '../../assets/iconLeftMenu/iconMusculation.png';
import iconSwimming from '../../assets/iconLeftMenu/iconSwimming.png';
import iconZen from '../../assets/iconLeftMenu/iconZen.png';

import './leftmenu.css';

function LeftMenu() {
  return (
    <section className='leftmenu-section'>
      <IconCard image={iconZen} />
      <IconCard image={iconSwimming} />
      <IconCard image={iconBike} />
      <IconCard image={iconMusculation} />
      <p className='text-section'>Copyright SportSee 2023</p>
    </section>
  );
}

export default LeftMenu;
