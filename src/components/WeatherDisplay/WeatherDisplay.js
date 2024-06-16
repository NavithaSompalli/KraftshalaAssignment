import React from 'react';
import moment from 'moment';
import './index.css'

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div className="weather-display">
      {weatherData.map((data, index) => (
        <div key={index} className="weather-card">
          <img src="https://res.cloudinary.com/dqyqjbuku/image/upload/v1718454449/cloudy_1_zpjlrc.png" alt="coludy-icon" className='cloudy-image'/>
          <h2>{data.name}</h2>
          
          <p>Temperature: {data.main.temp}°C</p>
          <p>Weather: {data.weather[0].description}</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Wind Speed: {data.wind.speed} m/s</p>
          <p>Date and Time: {moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
      
          
        </div>
      ))}
    </div>
  );
};

export default WeatherDisplay;
