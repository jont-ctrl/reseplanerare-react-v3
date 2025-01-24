import { useEffect, useState } from 'react';

function ClockTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString('sv-SE', { hour12: false }));
    }, 1000); // Updatera tiden varje sekund
  }, []);

  return (
    <>
      <h3 className='clock-timer'>{time}</h3>
    </>
  );
}

export default ClockTime;
