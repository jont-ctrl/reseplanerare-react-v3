import { useEffect, useState } from 'react';
import './Css/CityImage.css';

function ImageLocation({ place }) {
  const [imageLocation, setImageLocation] = useState();

  useEffect(() => {
    async function getLocationImg(params) {
      try {
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${place}&per_page=1`,
          {
            headers: {
              Authorization:
                'XUTYbdDJPL9sKLTzH4zH913rIlP6aShPhBM6DzSAkkkQBoul8YMBAS9W',
            },
          }
        );
        const data = await response.json();
        setImageLocation(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    getLocationImg();
  }, []);

  // Check if imageLocation and photos data are available before rendering, and loading message
  if (!imageLocation) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <img
        className='city-photo'
        src={
          imageLocation.photos.length === 0
            ? 'https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            : imageLocation.photos[0].src.large
        }
        alt={
          imageLocation.photos.length === 0
            ? 'Yellow bus travel'
            : imageLocation.photos[0].alt
        }
      />
    </>
  );
}

export default ImageLocation;
