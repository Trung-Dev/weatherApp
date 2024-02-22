const WeatherDummyData = {
  coord: {
    lon: 5.31,
    lat: 52.4
  },
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04d"
    }
  ],
  base: "stations",
  main: {
    temp: 29.55,
    feels_like: 29.63,
    temp_min: 27.81,
    temp_max: 30.8,
    pressure: 1015,
    humidity: 44,
    sea_level: 1015,
    grnd_level: 1016
  },
  visibility: 10000,
  wind: {
    speed: 4.49,
    deg: 40,
    gust: 5.06
  },
  clouds: {
    all: 91
  },
  dt: 1686579091,
  sys: {
    type: 2,
    id: 2041374,
    country: "NL",
    sunrise: 1661834187,
    sunset: 1661882248
  },
  timezone: 7200,
  id: 6544259,
  name: "Gemeente Almere",
  cod: 200
};

export default WeatherDummyData;