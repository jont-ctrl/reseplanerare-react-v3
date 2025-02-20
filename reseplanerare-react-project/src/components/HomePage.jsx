import Header from './Header';
import { useSelector } from 'react-redux';
import ActivityList from './ActivityList';
import Footer from './Footer';
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

function HomePage() {
  const travel = useSelector((state) => state.travel.activities);

  return (
    <>
      <Header />
      <main>
        <h2>Översikt aktiviteter:</h2>
        {travel.map((trav) => {
          return (
            <>
              <div className='activity-item-homepage' key={trav.id}>
                <h3>{trav.activity}</h3>
                <p>🗺️ {trav.place}</p>
              </div>
            </>
          );
        })}
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
