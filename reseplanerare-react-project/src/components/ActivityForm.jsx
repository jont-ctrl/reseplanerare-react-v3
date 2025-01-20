import { useState } from 'react';
import ActivityList from './ActivityList';

function ActivityForm() {
  // [stateValue variable håller aktuella värdet, funktion för uppdatera], intialvalue
  const [travel, setTravel] = useState([]);
  const [newActivity, setNewActivity] = useState('');
  const [date, setDate] = useState('');
  const [newTime, setNewTime] = useState('');
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

  // Hantera tid
  function handleTimeChange(event) {
    setNewTime(event.target.value);
  }

  // Lägg till aktivitet i listan
  function addActivity() {
    event.preventDefault();

    const newTravelItem = {
      activity: newActivity,
      date: date,
      time: newTime,
      place: place,
    };

    // Lägg till ny travel item object i travel array och updatera state
    setTravel([...travel, newTravelItem]);

    // Töm fälten
    setNewActivity('');
    setDate('');
    setNewTime('');
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
            type="text"
            name="plats"
            id="plats"
            placeholder="Ange plats"
            required
            value={place}
            onChange={handlePlaceChange}
          />
          <input
            type="time"
            name="time"
            id="time"
            value={newTime}
            onChange={handleTimeChange}
          />
          <input
            type="date"
            name="datum"
            id="datum"
            required
            value={date}
            onChange={handleDateChange}
          />

          <button type="submit" className="addBtn">
            <span class="material-icons-outlined">add</span>
            Lägg till
          </button>
        </form>
      </div>

      <ActivityList travel={travel} setTravel={setTravel} />
    </>
  );
}

export default ActivityForm;
