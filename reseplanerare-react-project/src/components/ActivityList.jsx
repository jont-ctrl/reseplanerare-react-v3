import React from 'react';
import RandomCat from './RandomCat';

// Två props
function ActivityList({ travel, setTravel }) {
  // Ta bort en aktivitet
  function removeItem(id) {
    const updatedTravel = travel.filter((item) => item.id !== id);
    setTravel(updatedTravel);
  }

  return (
    <div className='activityList-area'>
      <RandomCat />
      <ul className='activity-list'>
        {travel.map((item) => {
          return (
            // Rendera alla object i travel array och ge varje <li> unik key
            <li key={item.id} className='activity-item'>
              <h3 className='activity-title'>{item.activity}</h3>
              <p className='place-text'>{item.place}</p>
              <p className='time-text'>{item.time}</p>
              <p className='date-text'>{item.date}</p>
              <button className='addBtn' onClick={() => removeItem(item.id)}>
                <span class='material-icons-outlined'>delete</span>
                Ta bort
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ActivityList;
