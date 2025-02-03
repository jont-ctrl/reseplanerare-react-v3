import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <main>
      <h2>Sidan hittades inte! Error 404</h2>
      <p>Har du tappat bort dig?</p>
      <Link to='/'>Gå tillbaks till hem</Link>
    </main>
  );
}

export default PageNotFound;
