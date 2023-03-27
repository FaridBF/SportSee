import PropTypes from 'prop-types';

import IconCard from '../IconCard/IconCard';

import iconBike from '../../assets/iconLeftMenu/iconBike.png';
import iconMusculation from '../../assets/iconLeftMenu/iconMusculation.png';
import iconSwimming from '../../assets/iconLeftMenu/iconSwimming.png';
import iconZen from '../../assets/iconLeftMenu/iconZen.png';

import './leftmenu.css';

/**
 * LeftMenu component
 * @param {string} image - The image path for the icon card
 * @returns a different icons in dynamic ways with a description
 */
function LeftMenu() {
  return (
    <section className='leftmenu-section'>
      <div className='icons-leftmenu-container'>
        <IconCard image={iconZen} icon={'icon'} />
        <IconCard image={iconSwimming} icon={'icon'} />
        <IconCard image={iconBike} icon={'icon'} />
        <IconCard image={iconMusculation} icon={'icon'} />
      </div>
      <p className='text-section'>Copyright SportSee 2023</p>
    </section>
  );
}

LeftMenu.propTypes = {
  //TODO
  image: PropTypes.string
};

export default LeftMenu;
