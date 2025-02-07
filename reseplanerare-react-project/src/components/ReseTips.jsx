import React, { useEffect, useState } from 'react';
import OpenAI from 'openai';

const openai = new OpenAI();

const ReseTips = () => {
  const [countryPhotos, setCountryPhotos] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await openai.images.generate({
          model: 'dall-e-3',
          prompt: 'Country Location Trip advising',
          n: 1,
          size: '1024x1024',
        });

        setCountryPhotos(response.data[0].url);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      <h1>ReseTips</h1>
      {countryPhotos ? (
        <div>
          <h2>Country Photos:</h2>
          <img
            src={countryPhotos}
            alt='Generated Country'
            style={{ width: '100%', maxWidth: '1024px' }}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ReseTips;
