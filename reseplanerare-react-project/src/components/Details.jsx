import { useSelector } from 'react-redux';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../components/Css/Detalis.css';
import '../components/Css/ActivityList.css';
import '../index.css';

function Details() {
  const travel = useSelector((state) => state.travel.activities);

  return (
    <>
      <Header />
      <main>
        <h2>Details</h2>
        <div className='activity-details-site'>
          {travel.map((trav) => {
            return (
              <div className='activity-item-details-page' key={trav.id}>
                <h3>{trav.activity}</h3>
                <Link to={`/details/${trav.id}`} className='read-more-link'>
                  Läs mer
                </Link>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Details;
