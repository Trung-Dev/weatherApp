import { useState, useEffect } from "react";
import FormatWeatherData from "./FormatWeatherData";
import WeatherDummyData from "./WeatherDummyData";

const apiKey = process.env.REACT_APP_API_KEY

function useWeather() {
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
                const positionCoordinates = {
                    latitude: Number(position.coords.latitude).toFixed(2),
                    longitude: Number(position.coords.longitude).toFixed(2)
                };

                // const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${positionCoordinates.latitude}&lon=${positionCoordinates.longitude}&appid=${apiKey}`;

                const getData = async () => {
                    try {
                        const response = await fetch(WeatherDummyData);
                        if (!response.ok) {
                            throw new Error(
                                `This is an HTTP error: The status is ${response.status}`
                            );
                        }
                        // let actualData = await response.json();
                        const formattedData = FormatWeatherData(WeatherDummyData)
                        setWeatherData(formattedData);
                        setError(null);
                    } catch (err) {
                        setError(err.message);
                        setWeatherData(null);
                    } finally {
                        setIsLoading(false);
                    }
                }
                getData();
            },
            (error) => {
                setIsLoading(false);
                setError("Error Code = " + error.code + " - " + error.message);
            });
    }, []);
    return { weatherData , error, isLoading };
}

export default useWeather;