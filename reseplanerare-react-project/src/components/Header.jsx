import ClockTime from './ClockTime';
import { Link } from 'react-router-dom';
import './Css/Header.css';

function Header() {
  return (
    <header className='header'>
      <h1 className='main-title'>
        <Link to='/'>Reseplanerare</Link>
      </h1>
      <nav className='header-nav'>
        <ul className='header-links'>
          <li>
            <Link to='/'>Hem</Link>
          </li>
          <li>
            <Link to='/new'>Ny aktivitet</Link>
          </li>
          <li>
            <Link to='/details'>Detailjsida</Link>
          </li>
          <li className='clock-container'>
            <ClockTime />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
