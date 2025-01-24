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
      <p className='clock-timer'>{time}</p>
    </>
  );
}

export default ClockTime;
