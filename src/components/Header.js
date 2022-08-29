import '../styles/Header.scss';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <Link to="/" className="header-link">
      <header className="header">
        <h1 className="header-title">¡Accio personajes!</h1>
      </header>
    </Link>
  );
}

export default Header;
