import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {

    const [forecast, setForecast] = useState([]);
    const [selectedCity, setSelectedCity] = useState('Istanbul');
    const cities = [
        "Istanbul",
        "Ankara",
        "Izmir",
        "Antalya",
        "Bursa",
        "Adana",
        "Trabzon",
      ];
    const apiKey = "YOUR_KEY";

    const fetchWeatherData = async (city) => {
        try {
            const response = await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
            const data = response.data;
            console.log(data);
            const dailyForecast = data.list
                .filter((item, index) => index % 8 === 0)
                .slice(0, 5);

            setForecast(dailyForecast);

        } catch (error) {
            console.error("Failed to fetch weather data:", error);
        }
    };

    useEffect(() => {
        if (selectedCity) {
            fetchWeatherData(selectedCity);
        }
    }, [selectedCity]);

    const value = {
        forecast,
        selectedCity,
        setSelectedCity,
        cities
    };
    return (
        <>
            <WeatherContext.Provider value={value}>
                {children}
            </WeatherContext.Provider>
        </>
    );
}

export const useWeather = () => useContext(WeatherContext);
