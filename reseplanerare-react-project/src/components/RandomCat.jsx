import { useEffect, useState } from 'react';
import config from '../config.js';

function RandomCat() {
  const [catImage, setCatImage] = useState();

  useEffect(() => {
    async function fetchCatImage() {
      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?api_key=${config.apiKey}`
        );
        const data = await response.json();
        console.log(data);
        setCatImage(data[0].url);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCatImage();
  }, []);

  return (
    <>
      <img src={catImage} alt='cat' className='randomCat-img' />
      <figcaption>Random katt</figcaption>
    </>
  );
}

export default RandomCat;
