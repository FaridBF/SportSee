import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import logoSportSee from '../../assets/logo/logoSportSee.png';

import './header.css';

/**
 * Composant permettant la création de notre composant Header présent sur l'ensemble des pages du site
 * Menu de navigation permettant une redirection vers la page souhaitée via Link pour le logo et NavLink pour le menu (react-router-dom)
 */
function Header() {
  return (
    <div className='header-container'>
      <Link to='/'>
        <img className='logo-header' src={logoSportSee} alt='logo SportSee' />
      </Link>
      <nav>
        <ul className='menu-nav'>
          <li>
            <NavLink className='link-nav' to='/'>
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
