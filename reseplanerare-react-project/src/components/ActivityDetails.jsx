import Header from './Header';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../components/Css/ActivityForm.css';
import '../components/Css/ActivityList.css';
import '../components/Css/CityImage.css';
import '../components/Css/Detalis.css';
import '../components/Css/Footer.css';
import '../components/Css/Header.css';
import '../index.css';
import ImageLocation from './ImageLocation';

function ActivityDetails() {
  const { activityID } = useParams();

  // Hämta bara rätt aktivitet med find aktivitets id:t
  const travel = useSelector((state) =>
    state.travel.activities.find((item) => item.id == activityID)
  );
  console.log(travel);

  return (
    <>
      <Header />
      <div className='activity-full-details'>
        <h4>Aktivitets id: {activityID}</h4>
        <h5>{travel.activity}</h5>
        <ImageLocation place={travel.place} />
        <p>🗺️ {travel.place}</p>
        <p>📅 {travel.date}</p>
        <p>🕒 {travel.time}</p>
        <Link to='/details'>Gå Tillbaka</Link>
      </div>
      <Footer />
    </>
  );
}

export default ActivityDetails;
