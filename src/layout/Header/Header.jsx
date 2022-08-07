import {Link} from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Umk1nus</h1>
      <nav className="header__navbar">
        <div className="header__navbar-menu">
          <Link to="/" className="header__navbar-menu-item">Информация</Link>
          <Link to="/proj" className="header__navbar-menu-item">Проекты</Link>
        </div>
      </nav>
    </header>
  )
}