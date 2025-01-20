import React from 'react';

function ActivityList({ travel }) {
  return (
    <div>
      <ul className="activity-list">
        {travel.map((item, index) => {
          return (
            <li key={index} className="activity-item">
              <h3 className="activity-title">{item.activity}</h3>
              <p className="place-text">{item.place}</p>
              <p className="date-text">{item.date}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ActivityList;
