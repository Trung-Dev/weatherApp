function FormatWeatherData(data){
    const temperature = Math.round(data.main.temp)
    const maxTemperature = Math.round(data.main.temp_max)
    const minTemperature = Math.round(data.main.temp_min)
    
    const city = data.name;
    const iconName = data.weather[0].main.toLowerCase();

    const timestamp = data.main.timestamp;
    const date = new Date(timestamp * 1000);

    const day = new Date(data.dt*1000);

    return { temperature, maxTemperature, minTemperature, city, iconName, day, date };
}

export default FormatWeatherData