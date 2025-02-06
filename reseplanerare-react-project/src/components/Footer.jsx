import { useEffect, useState } from 'react';

const ApiKey = 'cbd897574f95429ebc6131621250602';
const URL = `https://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=Stockholm&aqi=no`;

function Footer() {
  const [weather, setWeather] = useState(null);
  const cacheExpiryTime = 15 * 60 * 1000;

  useEffect(() => {
    const fetchData = async () => {
      const cachedWeather = localStorage.getItem('weatherData');
      const cachedTimestamp = localStorage.getItem('weatherTimestamp');

      if (
        cachedWeather &&
        cachedTimestamp &&
        Date.now() - cachedTimestamp < cacheExpiryTime
      ) {
        setWeather(JSON.parse(cachedWeather));
      } else {
        try {
          const result = await fetch(URL);
          const json = await result.json();
          console.log(json);

          localStorage.setItem('weatherData', JSON.stringify(json));
          localStorage.setItem('weatherTimestamp', Date.now().toString());

          setWeather(json);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <footer>
      <h1>Det här är en footer</h1>
      {weather && (
        <>
          <p>{`Tempraturen i Stockholm är: ${weather.current.temp_c}°C men det känns som ${weather.current.feelslike_c}°C`}</p>
          <p>{`Senast uppdaterad: ${weather.current.last_updated}`}</p>
          <p>&copy; {new Date().getFullYear()} Copyright Reseplaneraren</p>
        </>
      )}
    </footer>
  );
}

export default Footer;
