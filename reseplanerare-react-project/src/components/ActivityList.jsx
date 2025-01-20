import React from 'react';

function ActivityList({ travel, setTravel }) {
  function removeItem(index) {
    const updatedTravel = travel.filter((_, i) => i !== index);
    setTravel(updatedTravel);
  }

  return (
    <div>
      <ul className="activity-list">
        {travel.map((item, index) => {
          return (
            // Rendera alla object i travel array och ge varje <li> unik key
            <li key={index} className="activity-item">
              <h3 className="activity-title">{item.activity}</h3>
              <p className="place-text">{item.place}</p>
              <p className="date-text">{item.date}</p>
              <button onClick={() => removeItem(index)}>Ta bort</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ActivityList;
