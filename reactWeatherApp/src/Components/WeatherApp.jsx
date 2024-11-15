import React from 'react'
import { useWeather } from '../Context/WeatherContext';

const WeatherApp = () => {

    const { selectedCity, setSelectedCity, cities } = useWeather();
    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    return (
        <div style={
            {
                width:"600px",
                height:"50px",
                display: 'flex',

                alignItems: 'center',
                backgroundColor: '#f7faff',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}>
            <select id="dropdown" name="options" value={selectedCity} onChange={handleCityChange}  style={{
                    padding: '2px',
                    fontSize: '16px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    backgroundColor: '#fff',
                    color: '#333',
                    minWidth:"150px",
                    minHeight:"30px"
                }}>
                {cities.map((city, index) => (
                    <option key={index} value={city}>
                        {city}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default WeatherApp
