import React, { useEffect, useState } from 'react';

const ReseTips = () => {
  const [imageData, setImageData] = useState([]);
  const [error, setError] = useState(null);
  
  const fetchImages = async () => {
    const url = `https://api.pexels.com/v1/search?query=travel+destinations&per_page=10&page=1`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: '5J8APYk7giUDKXDxjLxXeFEGJMbHVDrjqdn4s5Y7nve0M3BUMy4Ux5Vv', // Replace with your Pexels API key
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setImageData(data.photos); // Pexels returns images inside the "photos" array
    } catch (error) {
      setError(error.message);
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <h1>ReseTips - Bilder för dina reseidéer</h1>
      {error && <p style={{ color: 'red' }}>Fel: {error}</p>}
      {imageData.length > 0 ? (
        <div>
          <h2>Exempel på resmål:</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {imageData.map((image, index) => (
              <img
                key={index}
                src={image.src.medium}
                alt={`Bild ${index + 1}`}
                style={{ width: '200px', margin: '10px' }}
              />
            ))}
          </div>
        </div>
      ) : (
        <p>Laddar bilder...</p>
      )}
    </div>
  );
};

export default ReseTips;
