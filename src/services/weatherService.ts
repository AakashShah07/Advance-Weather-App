import { mockWeatherData } from '../mock/weatherData';

export const getWeatherData = async (
  lat: number,
  lon: number,
  units: string
) => {
  const apiKey = 'a6d02fb45acd08f0eb45c32a1270de1c'; // move this to an .env file in production

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }

  const apiData = await response.json();

  // Convert OpenWeatherMap response to your app's structure
  const data = {
    current: {
      cityName: apiData.name,
      country: apiData.sys.country,
      temperature: Math.round(apiData.main.temp),
      feelsLike: Math.round(apiData.main.feels_like),
      tempMin: Math.round(apiData.main.temp_min),
      tempMax: Math.round(apiData.main.temp_max),
      weather: apiData.weather[0].main,
      weatherDescription: apiData.weather[0].description,
      weatherIcon: `https://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png`,
      humidity: apiData.main.humidity,
      pressure: apiData.main.pressure,
      windSpeed: apiData.wind.speed,
      unit: units === 'metric' ? 'F' : 'C'
    },
    forecast: [] // If needed, you can use the 5-day forecast API later
  };

  return data;
};


const convertToMetric = (data: any) => {
  const convertedData = {
    ...data,
    current: {
      ...data.current,
      temperature: Math.round((data.current.temperature - 32) * 5/9),
      feelsLike: Math.round((data.current.feelsLike - 32) * 5/9),
      tempMin: Math.round((data.current.tempMin - 32) * 5/9),
      tempMax: Math.round((data.current.tempMax - 32) * 5/9),
      windSpeed: Math.round(data.current.windSpeed / 2.237),
      unit: 'C'
    },
    forecast: data.forecast.map((day: any) => ({
      ...day,
      tempMin: Math.round((day.tempMin - 32) * 5/9),
      tempMax: Math.round((day.tempMax - 32) * 5/9),
      windSpeed: Math.round(day.windSpeed / 2.237)
    }))
  };
  
  return convertedData;
};