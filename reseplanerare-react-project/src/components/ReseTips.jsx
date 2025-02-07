import React, { useEffect, useState } from 'react';

function ReseTips() {
  const [hotelPhotos, setHotelPhotos] = useState(null);

  useEffect(() => {
    const fetchHotelPhotos = async () => {
      const url =
        'https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=1178275040';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'your-api-key-here',
          'x-rapidapi-host': 'hotels4.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setHotelPhotos(result);
      } catch (error) {
        console.error('Error fetching hotel photos:', error);
      }
    };

    fetchHotelPhotos();
  }, []);

  return (
    <div>
      <h1>ReseTips</h1>
      {hotelPhotos ? (
        <div>
          <h2>Hotel Photos:</h2>
          {}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ReseTips;
