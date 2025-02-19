import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SearchBar from '../components/SearchBar';
import '../components/Css/Detalis.css';
import '../components/Css/ActivityList.css';
import '../index.css';
import './Css/ActivityForm.css';
import './Css/ActivityList.css';
import './Css/CityImage.css';
import './Css/Detalis.css';
import './Css/Footer.css';
import './Css/Header.css';
import './Css/ReseTips.css';

function Details() {
  const travel = useSelector((state) => state.travel.activities) || [];
  const [filteredActivities, setFilteredActivities] = useState(travel);

  return (
    <>
      <Header />
      <main>
        <h2>Detaljer</h2>

        {/* Added SearchBar to allow filtering of activities */}
        <SearchBar data={travel} onSearch={setFilteredActivities} />

        <div className='activity-details-site'>
          {filteredActivities.length > 0 ? (
            filteredActivities.map((trav) => (
              <div className='activity-item-details-page' key={trav.id}>
                <h3>{trav.activity}</h3>
                <p>🗺️ {trav.place}</p>
                <Link to={`/details/${trav.id}`} className='read-more-link'>
                  Läs mer
                </Link>
              </div>
            ))
          ) : (
            <p>Inga aktiviteter hittades.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Details;
