import { mockWeatherData } from '../mock/weatherData';

export const getWeatherData = async (cityId: string, units: 'metric' | 'imperial' = 'metric') => {
  // In a real app, this would be an API call to a weather service
  // For demonstration purposes, we'll use mock data
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Find city in mock data
  const data = mockWeatherData[cityId] || mockWeatherData.default;
  
  // Convert units if needed
  if (units === 'imperial' && data.current.unit === 'C') {
    return convertToImperial(data);
  } else if (units === 'metric' && data.current.unit === 'F') {
    return convertToMetric(data);
  }
  
  return data;
};

const convertToImperial = (data: any) => {
  const convertedData = {
    ...data,
    current: {
      ...data.current,
      temperature: Math.round(data.current.temperature * 9/5 + 32),
      feelsLike: Math.round(data.current.feelsLike * 9/5 + 32),
      tempMin: Math.round(data.current.tempMin * 9/5 + 32),
      tempMax: Math.round(data.current.tempMax * 9/5 + 32),
      windSpeed: Math.round(data.current.windSpeed * 2.237),
      unit: 'F'
    },
    forecast: data.forecast.map((day: any) => ({
      ...day,
      tempMin: Math.round(day.tempMin * 9/5 + 32),
      tempMax: Math.round(day.tempMax * 9/5 + 32),
      windSpeed: Math.round(day.windSpeed * 2.237)
    }))
  };
  
  return convertedData;
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