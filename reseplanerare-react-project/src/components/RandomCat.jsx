import { useEffect, useState } from 'react';

const apiKey =
  'live_MBYQSspEx30fGV0wezgfXkQJyISkrB8fzatBUBNsL1dSVwnkj0oWYmiOptDSP7Lv';

function RandomCat() {
  const [catImage, setCatImage] = useState();

  useEffect(() => {
    async function fetchCatImage() {
      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?api_key=${apiKey}`
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
    <div className="randomCat-wrapper">
      <img src={catImage} alt="cat" className="randomCat-img" />
      <figcaption>Random katt</figcaption>
    </div>
  );
}

export default RandomCat;
