import Header from './Header';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
        <h2>activity details: {activityID}</h2>
        <h2>{travel.activity}</h2>
        <h3>{travel.place}🗺️</h3>
        <p>{travel.date}📅</p>
        <p>{travel.time}🕒</p>
        <Link to='/details'>Gå Tillbaka</Link>
      </div>
    </>
  );
}

export default ActivityDetails;
