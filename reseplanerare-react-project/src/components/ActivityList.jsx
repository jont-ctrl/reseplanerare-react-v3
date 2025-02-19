import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeActivity, updateActivity } from '../redux/travelSlice';
import './Css/ActivityList.css';

// Två props
function ActivityList() {
  // Ta bort en aktivitet

  const dispatch = useDispatch();
  const travel = useSelector((state) => state.travel.activities); // Se till att "travel" är korrekt

  // För redigering
  const [editingActivity, setEditingActivity] = useState(null);
  const [editedValues, setEditedValues] = useState({});

  function removeItem(id) {
    dispatch(removeActivity(id));
  }

  // Starta redigering
  function startEditing(activity) {
    setEditingActivity(activity.id);
    setEditedValues({
      activity: activity.activity,
      place: activity.place,
      time: activity.time,
      date: activity.date,
    });
  }

  // Avbryt redigering
  function cancelEditing() {
    setEditingActivity(null);
    setEditedValues({});
  }

  // Spara redigering
  function saveEditing() {
    dispatch(
      updateActivity({ id: editingActivity, updatedActivity: editedValues })
    );
    setEditingActivity(null);
    setEditedValues({});
  }

  // Hantera ändringar i fälten under redigering
  function handleInputChange(e, field) {
    setEditedValues((prevValues) => ({
      ...prevValues,
      [field]: e.target.value,
    }));
  }

  return (
    <div className='activityList-area'>
      <ul className='activity-list'>
        {travel.map((item) => (
          <li key={item.id} className='activity-item'>
            {editingActivity === item.id ? (
              // Formulär för att redigera
              <div className='edit-container'>
                <input
                  type='text'
                  value={editedValues.activity}
                  onChange={(e) => handleInputChange(e, 'activity')}
                  className='edit-input'
                  placeholder='Aktivitet'
                />
                <input
                  type='text'
                  value={editedValues.place}
                  onChange={(e) => handleInputChange(e, 'place')}
                  className='edit-input'
                  placeholder='Plats'
                />
                <input
                  type='time'
                  value={editedValues.time}
                  onChange={(e) => handleInputChange(e, 'time')}
                  className='edit-input'
                />
                <input
                  type='date'
                  value={editedValues.date}
                  onChange={(e) => handleInputChange(e, 'date')}
                  className='edit-input'
                />
                <div className='button-container'>
                  <button className='saveBtn' onClick={saveEditing}>
                    Spara
                  </button>
                  <button className='cancelBtn' onClick={cancelEditing}>
                    Avbryt
                  </button>
                </div>
              </div>
            ) : (
              // Visa information för en aktivitet
              <>
                <h3 className='activity-title'>{item.activity}</h3>
                <p className='place-text'>🗺️ {item.place}</p>
                <p className='time-text'>🕒 {item.time}</p>
                <p className='date-text'>📅 {item.date}</p>
                <button className='editBtn' onClick={() => startEditing(item)}>
                  Redigera
                </button>
                <button className='addBtn' onClick={() => removeItem(item.id)}>
                  Ta bort
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityList;
