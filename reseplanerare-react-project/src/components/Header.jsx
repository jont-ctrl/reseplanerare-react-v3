import ClockTime from './ClockTime';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1 className='main-title'>
        <Link to='/'>Reseplanerare</Link>
      </h1>
      <ul className='header-links'>
        <li>
          <Link to='/'>Hem</Link>
        </li>
        <li>
          <Link to='/new'>Ny Aktivitet</Link>
        </li>
        <li>
          <Link to='/details'>Detailjsida</Link>
        </li>
      </ul>
      <ClockTime />
    </header>
  );
}

export default Header;
