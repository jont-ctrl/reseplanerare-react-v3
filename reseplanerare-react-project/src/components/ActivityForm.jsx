import { useState } from 'react';
import ActivityList from './ActivityList';

function ActivityForm() {
  const [travel, setTravel] = useState([]);
  const [newActivity, setNewActivity] = useState('');
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');

  // Hantera aktivitetens namn
  function handleActivityChange(event) {
    setNewActivity(event.target.value);
  }

  // Hantera datum
  function handleDateChange(event) {
    setDate(event.target.value);
  }

  // Hantera plats
  function handlePlaceChange(event) {
    setPlace(event.target.value);
  }

  // Lägg till aktivitet i listan
  function addActivity() {
    event.preventDefault();

    const newTravelItem = {
      activity: newActivity,
      date: date,
      place: place,
    };

    // Lägg till ny travel item object i travel array
    setTravel([...travel, newTravelItem]);

    // Töm fälten
    setNewActivity('');
    setDate('');
    setPlace('');
  }

  return (
    <>
      <div>
        <form className="travel-form" onSubmit={addActivity}>
          <input
            type="text"
            name="aktivitet"
            id="aktivitet"
            placeholder="Ange aktivitet"
            required
            value={newActivity}
            onChange={handleActivityChange}
          />
          <input
            type="date"
            name="datum"
            id="datum"
            required
            value={date}
            onChange={handleDateChange}
          />
          <input
            type="text"
            name="plats"
            id="plats"
            placeholder="Ange plats"
            required
            value={place}
            onChange={handlePlaceChange}
          />
          <button type="submit">Lägg till</button>
        </form>
      </div>

      <ActivityList travel={travel} />
    </>
  );
}

export default ActivityForm;
