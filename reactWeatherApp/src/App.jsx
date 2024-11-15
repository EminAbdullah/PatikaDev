import React from 'react';
import { useWeather } from './Context/WeatherContext';
import WeatherApp from './Components/WeatherApp';

function App() {
  const { forecast } = useWeather();

  const today = new Date().toLocaleDateString('en-US', { weekday: 'short' });

  return (
    <>
      <div>
        <WeatherApp />

        {forecast && (
          <div style={{ display: 'flex', marginTop: '20px' }}>
            {forecast.map((day, index) => {
              const isToday = today === new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'short' });

              return (
                <div
                  key={index}
                  style={{
                    width:"100px",
                    height:"150px",
                    textAlign: 'center',
                    padding: '10px',
                    border: isToday ? '2px solid black' : '1px solid #ddd',
                    borderRadius: '8px',
                    backgroundColor: isToday ? '#f0f8ff' : '#fff'
                  }}
                >
                  <div>{new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'short' })}</div>
                  <img
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt={day.weather[0].description}
                    style={{ width: '40px', height: '40px' }}
                  />
                  <div>{Math.round(day.main.temp)}°C</div>
                  <div style={{ fontSize: '12px', color: '#555' }}>
                    {Math.round(day.main.temp_min)}° / {Math.round(day.main.temp_max)}°
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
