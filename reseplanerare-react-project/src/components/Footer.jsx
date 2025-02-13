import { Link } from 'react-router-dom';
import RandomCat from './RandomCat';
import './Css/Footer.css';
import Weather from './Weather';

export default function Footer() {
  return (
    <footer>
      <div className='footer-content'>
        <div className='trip-planner-info'>
          <p> 
            Vår reseplanerare hjälper dig att skapa den perfekta resan. Fyll i
            dina preferenser och få en skräddarsydd reseplan.
          </p>
          <Link to='/new' className='footer-link'>
            Planera din resa här
          </Link>
        </div>

        <div className='weather-wrapper'>
          <Weather />
        </div>
        
          <RandomCat />

      </div>
    </footer>
  );
}
