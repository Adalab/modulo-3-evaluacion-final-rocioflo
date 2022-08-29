import '../styles/Header.scss';

import { Link } from 'react-router-dom';

import wand from '../images/wand.jpg';
function Header() {
  return (
    <Link to="/" className="header-link">
      <header className="header">
        <h1 className="header-title">¡Accio personajes!</h1>
        <img src={wand} alt="¡Alakabum!" className="header-image" />
      </header>
    </Link>
  );
}

export default Header;
