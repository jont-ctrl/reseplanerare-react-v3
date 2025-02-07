import { useSelector } from 'react-redux';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Details() {
  const travel = useSelector((state) => state.travel.activities);

  return (
    <>
      <Header />
      <main>
        <h2>Details</h2>
        {travel.map((trav) => {
          return (
            <div className='activity-item-details-page' key={trav.id}>
              <h3>{trav.activity}</h3>
              <Link to={`/details/${trav.id}`}>Läs mer</Link>
            </div>
          );
        })}
      </main>
      <Footer />
    </>
  );
}

export default Details;
