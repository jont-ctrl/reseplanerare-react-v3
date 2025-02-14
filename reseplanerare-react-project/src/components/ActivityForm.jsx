import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addActivity } from '../redux/travelSlice';
import ActivityList from './ActivityList';
import Header from './Header';

const MemoizedHeader = React.memo(Header);
const MemoizedActivityList = React.memo(ActivityList);
import './Css/ActivityForm.css'
import Footer from './Footer.jsx';

function ActivityForm() {
  const dispatch = useDispatch();
  
  const [newActivity, setNewActivity] = useState('');
  const [date, setDate] = useState('');
  const [newTime, setNewTime] = useState('');
  const [place, setPlace] = useState('');

  const travel = useSelector((state) => state.travel.activities);

  // 🟢 Use useMemo to optimize activity count calculation
  const activityAmount = useMemo(() => travel.length, [travel]);

  // 🟢 Memoized Random City Generator
  const handleRandomCity = useCallback(() => {
    const randomCityPick = [
      'Stockholm', 'Göteborg', 'Malmö', 'Oslo', 'Köpenhamn',
      'Helsingfors', 'Paris', 'New York', 'Tokyo', 'Berlin',
      'London', 'Sydney', 'Dubai', 'Barcelona', 'Rom'
    ];
    setPlace(randomCityPick[Math.floor(Math.random() * randomCityPick.length)]);
  }, []);

  // 🟢 Memoized Event Handlers
  const handleActivityChange = useCallback((event) => {
    setNewActivity(event.target.value);
  }, []);

  const handleDateChange = useCallback((event) => {
    setDate(event.target.value);
  }, []);

  const handlePlaceChange = useCallback((event) => {
    setPlace(event.target.value);
  }, []);

  const handleTimeChange = useCallback((event) => {
    setNewTime(event.target.value);
  }, []);

  // 🟢 Memoized Submit Handler
  const addActivityHandler = useCallback((event) => {
    event.preventDefault();
    const newTravelItem = {
      activity: newActivity,
      date,
      time: newTime,
      place,
      id: Date.now(),
    };
    dispatch(addActivity(newTravelItem));

    // Reset fields
    setNewActivity('');
    setDate('');
    setNewTime('');
    setPlace('');
  }, [newActivity, date, newTime, place, dispatch]);

  return (
    <>
      <MemoizedHeader />
      <form className='travel-form' onSubmit={addActivityHandler}>
        <input
          type='text'
          name='aktivitet'
          id='aktivitet'
          placeholder='Ange aktivitet'
          required
          value={newActivity}
          onChange={handleActivityChange}
        />
        <input
          type='text'
          name='plats'
          id='plats'
          placeholder='Ange plats'
          required
          value={place}
          onChange={handlePlaceChange}
        />
        <button type='button' onClick={handleRandomCity} className='random-btn'>
          🔄
        </button>
        <input
          type='time'
          name='time'
          id='time'
          value={newTime}
          onChange={handleTimeChange}
        />
        <input
          type='date'
          name='datum'
          id='datum'
          required
          value={date}
          onChange={handleDateChange}
        />
        <button type='submit' className='addBtn'>
          <span className='material-icons-outlined'>add</span>
          Lägg till
        </button>
        <p>Antal aktiviteter: {activityAmount}</p>
      </form>

      <MemoizedActivityList />
    </>
  );
}

export default React.memo(ActivityForm);
