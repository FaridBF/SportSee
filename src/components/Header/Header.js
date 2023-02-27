import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import logoSportSee from '../../assets/logoHeader/logoSportSee.png';

import './header.css';

/**
 * Component allowing the creation of our Header component present on all the pages of the site
 * Navigation menu allowing redirection to the desired page via Link for the logo and NavLink for the menu (react-router-dom)
 */
function Header() {
  return (
    <div className='header-container'>
      <Link to='/'>
        <img className='logo-header' src={logoSportSee} alt='logo SportSee' />
      </Link>
      <nav className='menu-nav-container'>
        <ul className='menu-nav'>
          <li className='left-link-nav'>
            <NavLink className='link-nav firstLinkNav' to='/'>
              SportSee
            </NavLink>
          </li>
          <li>
            <NavLink className='link-nav' to='/'>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink className='link-nav' to='/error'>
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink className='link-nav' to='/error'>
              Réglage
            </NavLink>
          </li>
          <li>
            <NavLink className='link-nav' to='/error'>
              Communauté
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
