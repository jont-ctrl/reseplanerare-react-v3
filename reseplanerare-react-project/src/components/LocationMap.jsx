import { useSelector } from 'react-redux';

function LocationMap({ travel }) {
  return (
    <>
      <h3>Map:</h3>
      <iframe
        src={`https://www.google.com/maps?q=${travel}&output=embed`}
        title={`${travel} Location`}
      ></iframe>
    </>
  );
}

export default LocationMap;
