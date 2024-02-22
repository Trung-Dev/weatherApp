    import WeatherDummyData from "./WeatherDummyData";

    const GetSunStandProgressPercentage = () => {
        const { sunrise, sunset } = WeatherDummyData.sys;

        const currentDate = new Date();
        const sunriseDateInMs = new Date(sunrise * 1000);
        const sunsetDateInMs = new Date(sunset * 1000);
        
        sunriseDateInMs.setFullYear(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        sunsetDateInMs.setFullYear(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        
        const totalTime = sunsetDateInMs - sunriseDateInMs;
        const currentTime = currentDate - sunriseDateInMs;
        const progressPercentage = currentTime / totalTime;
        return progressPercentage;
    }
    
    export default GetSunStandProgressPercentage;
    