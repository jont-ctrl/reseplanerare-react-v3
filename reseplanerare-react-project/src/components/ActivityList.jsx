import React from 'react';
import RandomCat from './RandomCat';

// Två props
function ActivityList({ travel, setTravel }) {
  function removeItem(index) {
    const updatedTravel = travel.filter((item, i) => i !== index);
    setTravel(updatedTravel);
  }

  return (
    <div className='activityList-area'>
      <RandomCat />
      <ul className='activity-list'>
        {travel.map((item, index) => {
          return (
            // Rendera alla object i travel array och ge varje <li> unik key
            <li key={index} className='activity-item'>
              <h3 className='activity-title'>{item.activity}</h3>
              <p className='place-text'>{item.place}</p>
              <p className='time-text'>{item.time}</p>
              <p className='date-text'>{item.date}</p>
              <button className='addBtn' onClick={() => removeItem(index)}>
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
