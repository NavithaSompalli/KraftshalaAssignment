import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';
import SearchBar from './components/SearchBar/SearchBar';
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle';
import './App.css';

const apiStatuses = {
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILURE: 'failure',
}

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [apiStatus, setApiStatus] = useState(apiStatuses.LOADING);
  
  const fetchWeatherByCity = async (city) => {
    const apiKey = '78f1b9448d3227cc20ba6817f0a6a813';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    setApiStatus(apiStatuses.LOADING);

    try {
      const response = await axios.get(url);
      setWeatherData(prevData => [...prevData, response.data]);
      setApiStatus(apiStatuses.SUCCESS);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setApiStatus(apiStatuses.FAILURE);
    }
  };

  const fetchWeatherByCoords = async (lat, lon) => {
    const apiKey = '78f1b9448d3227cc20ba6817f0a6a813';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    setApiStatus(apiStatuses.LOADING);

    try {
      const response = await axios.get(url);
      setWeatherData([response.data]); // Clear previous data and add new data
      setApiStatus(apiStatuses.SUCCESS);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setApiStatus(apiStatuses.FAILURE);
    }
  };

  const getCurrentLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherByCoords(latitude, longitude);
      }, (error) => {
        console.error('Error getting location:', error);
        setApiStatus(apiStatuses.FAILURE);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
      setApiStatus(apiStatuses.FAILURE);
    }
  }, []);

  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  return (
    <div className={darkMode ? 'App dark-mode' : 'App'}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <h1>Weather Application</h1>
      <SearchBar city={city} setCity={setCity} fetchWeather={() => fetchWeatherByCity(city)} />
      {apiStatus === apiStatuses.LOADING && <p>Loading...</p>}
      {apiStatus === apiStatuses.FAILURE && <p>Failed to fetch weather data. Please try again.</p>}
      {apiStatus === apiStatuses.SUCCESS && weatherData.length > 0 && (
        <WeatherDisplay weatherData={weatherData} />
      )}
    </div>
  );
};

export default App;
