import '../styles/Header.scss';

import wand from '../images/wand.jpg';
function Header() {
  return (
    <header className="header">
      <h1 className="header-title">¡Accio personajes!</h1>
      <img src={wand} alt="¡Alakabum!" className="header-image" />
    </header>
  );
}

export default Header;
