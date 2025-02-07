import { useEffect, useState } from 'react';

const ApiKey = 'cbd897574f95429ebc6131621250602';
const URL = `https://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=Stockholm&aqi=no`;
const CACHE_EXPIRY_TIME = 15 * 60 * 1000; // 15 minutes in milliseconds

function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    const cachedWeather = localStorage.getItem('weatherData');
    const cachedTimestamp = localStorage.getItem('weatherTimestamp');

    if (
      cachedWeather &&
      cachedTimestamp &&
      Date.now() - cachedTimestamp < CACHE_EXPIRY_TIME
    ) {
      setWeather(JSON.parse(cachedWeather));
    } else {
      try {
        const result = await fetch(URL);
        if (!result.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const json = await result.json();

        console.log(json);

        localStorage.setItem('weatherData', JSON.stringify(json));
        localStorage.setItem('weatherTimestamp', Date.now().toString());

        setWeather(json);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Could not fetch weather data. Please try again later.');
      }
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <footer>
      <h1>Det här är en footer</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        weather && (
          <>
            <p>{`Tempraturen i Stockholm är: ${weather.current.temp_c}°C men det känns som ${weather.current.feelslike_c}°C`}</p>
            <p>{`Senast uppdaterad: ${weather.current.last_updated}`}</p>
          </>
        )
      )}
      <p>&copy; {new Date().getFullYear()} Copyright Reseplaneraren</p>
    </footer>
  );
}

export default Weather;
