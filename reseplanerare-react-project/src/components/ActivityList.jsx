import React from 'react';
import RandomCat from './RandomCat';
import { useDispatch, useSelector } from 'react-redux';
import { removeActivity } from '../redux/travelSlice';

// Två props
function ActivityList() {
  // Ta bort en aktivitet

  const dispatch = useDispatch();
  const travel = useSelector((state) => state.travel.activities); // Se till att "travel" är korrekt

  function removeItem(id) {
    dispatch(removeActivity(id));
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
                <span className='material-icons-outlined'>delete</span>
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
