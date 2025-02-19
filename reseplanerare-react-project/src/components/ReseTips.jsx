import React, { useEffect, useState } from 'react';
import Header from './Header';  
import Footer from './Footer';  
import './Css/ActivityForm.css';
import './Css/ActivityList.css';
import './Css/CityImage.css';
import './Css/Detalis.css';
import './Css/Footer.css';
import './Css/Header.css';
import './Css/ReseTips.css';
import '../index.css'

const ReseTips = () => {
  const [imageData, setImageData] = useState([]);
  const [error, setError] = useState(null);
  const [cities, setCities] = useState([]);

  const capitals = [
    "Paris", "London", "Tokyo", "Rome", "Berlin", "Madrid", "Copenhagen", "Stockholm", "Oslo", "Washington DC"
  ];

  const getRandomCapitals = (num = 3) => {
    let randomCities = [];
    while (randomCities.length < num) {
      const randomCity = capitals[Math.floor(Math.random() * capitals.length)];
      if (!randomCities.includes(randomCity)) {
        randomCities.push(randomCity);
      }
    }
    setCities(randomCities); 
  };

  const fetchImages = async () => {
    let allImages = [];

    try {
      for (const city of cities) {
        const url = `https://api.pexels.com/v1/search?query=${city}+capital&per_page=5&page=1`;

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: '5J8APYk7giUDKXDxjLxXeFEGJMbHVDrjqdn4s5Y7nve0M3BUMy4Ux5Vv',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (data.photos) {
          allImages = [...allImages, ...data.photos];
        }
      }

      setImageData(allImages); 
    } catch (error) {
      setError(error.message);
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    getRandomCapitals(3); // Get 3 random capitals when the component mounts
  }, []);

  useEffect(() => {
    if (cities.length > 0) {
      fetchImages(); // Fetch images once we have the random cities
    }
  }, [cities]);

  return (
    <>
      <Header /> {/* Include Header component */}
      <div className="activity-list">
        <h1 className="activity-title">ReseTips - Exempel på populära resmål</h1>
        {error && <p style={{ color: 'red' }}>Fel: {error}</p>}
        {imageData.length > 0 ? (
          <div className="activityList-area">
            {cities.map((city, index) => (
              <div key={index} className="activity-item">
                <h2>Res till {city}</h2>
                <div className="randomCat-wrapper">
                  {imageData
                    .filter(image => image.alt.includes(city)) // Filter images by city name
                    .map((image, imageIndex) => (
                      <figure key={imageIndex} className="randomCat-img">
                        <img
                          className='ReseTipsImg'
                          src={image.src.medium} // Choose the appropriate size (e.g., medium, large, etc.)
                          alt={`Bild från ${city} ${imageIndex + 1}`}
                          style={{ width: '100%', borderRadius: '1rem' }}
                        />
                        <figcaption>Bild från {city} {imageIndex + 1}</figcaption>
                      </figure>
                    ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Laddar bilder...</p>
        )}
      </div>
      <Footer /> {/* Include Footer component */}
    </>
  );
};

export default ReseTips;
