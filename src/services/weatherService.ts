/* eslint-disable @typescript-eslint/no-explicit-any */

export const getWeatherData = async (
  lat: number,
  lon: number,
  units: string
) => {

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${process.env.NEXT_PUBLIC_WEATHERMAP_KEY}`;

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


export const getForecastData = async (
  lat: number,
  lon: number,
  units: string
) => {

  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${process.env.NEXT_PUBLIC_WEATHERMAP_KEY}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch weather forecast data');
  }

  const apiData = await response.json();

  // Extract the current weather from the first forecast entry
  const current = apiData.list[0];
  const city = apiData.city;

  const data = {
    current: {
      cityName: city.name,
      country: city.country,
      temperature: Math.round(current.main.temp),
      feelsLike: Math.round(current.main.feels_like),
      tempMin: Math.round(current.main.temp_min),
      tempMax: Math.round(current.main.temp_max),
      weather: current.weather[0].main,
      weatherDescription: current.weather[0].description,
      weatherIcon: `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`,
      humidity: current.main.humidity,
      pressure: current.main.pressure,
      windSpeed: current.wind.speed,
      unit: units === 'metric' ? 'C' : 'F',
    },

    forecast: apiData.list.map((item: any) => ({
      timestamp: item.dt,
      datetime: item.dt_txt,
      temperature: Math.round(item.main.temp),
      feelsLike: Math.round(item.main.feels_like),
      tempMin: Math.round(item.main.temp_min),
      tempMax: Math.round(item.main.temp_max),
      weather: item.weather[0].main,
      weatherDescription: item.weather[0].description,
      weatherIcon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
      humidity: item.main.humidity,
      pressure: item.main.pressure,
      windSpeed: item.wind.speed,
      pop: item.pop,
      rainVolume: item.rain?.['3h'] || 0,
    }))
  };

  return data;
};
