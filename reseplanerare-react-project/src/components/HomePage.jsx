import Header from './Header';
import { useSelector } from 'react-redux';
import ActivityList from './ActivityList';

function HomePage() {
  const travel = useSelector((state) => state.travel.activities);

  return (
    <>
      <Header />
      <main>
        <h2>Homepage</h2>
        <h3>Aktiviteter:</h3>
        {travel.map((trav) => {
          return (
            <>
              <div className='activity-item-homepage' key={trav.id}>
                <h3>{trav.activity}</h3>
                <p>{trav.place}</p>
              </div>
            </>
          );
        })}
      </main>
    </>
  );
}

export default HomePage;
