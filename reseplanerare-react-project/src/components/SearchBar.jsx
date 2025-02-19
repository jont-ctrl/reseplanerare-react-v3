import { useState } from "react";
import PropTypes from "prop-types"; 
import './Css/SearchBar.css'

const SearchBar = ({ data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredData = data.filter((item) =>
      item.activity.toLowerCase().includes(term.toLowerCase()) ||
      item.place.toLowerCase().includes(term.toLowerCase())
    );

    onSearch(filteredData);
  };

  return (
    <input
      type="text"
      placeholder="Sök aktivitet..."
      value={searchTerm}
      onChange={handleSearch}
      className="search-input"
    />
  );
};

SearchBar.propTypes = {
  data: PropTypes.array.isRequired, 
  onSearch: PropTypes.func.isRequired, 
};

export default SearchBar;
