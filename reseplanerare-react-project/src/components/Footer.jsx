import { Link } from 'react-router-dom';
import RandomCat from './RandomCat';
import './Css/Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className='footer-content'>
        <div className='trip-planner-info'>
          <h2>Planera din resa med oss!</h2>
          <p>
            Vår reseplanerare hjälper dig att skapa den perfekta resan. Fyll i
            dina preferenser och få en skräddarsydd reseplan.
          </p>
          <Link to='/new' className='footer-link'>
            Planera din resa här
          </Link>
        </div>
        <RandomCat />
      </div>
    </footer>
  );
}
