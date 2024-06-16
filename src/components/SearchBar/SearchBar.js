import React from 'react';
import './index.css'

const SearchBar = ({ city, setCity, fetchWeather }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name or zipcode"
      />
      <button onClick={fetchWeather}>Get Weather report</button>
    </div>
  );
};

export default SearchBar;
