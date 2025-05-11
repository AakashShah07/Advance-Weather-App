// /* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import WeatherIcon from './WeatherIcon';

interface DailyForecastProps {
  day: {
    datetime: string;
    date: string;
    condition: string;
    tempMax: number;
    tempMin: number;
    windSpeed: number;
    humidity: number;
    weatherIcon: string;
  };
  units: 'metric' | 'imperial';
}

const DailyForecast: React.FC<DailyForecastProps> = ({ day, units }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, // Set to false for 24-hour format
    });  };

  const getTemperatureUnit = () => units === 'metric' ? '°F' : '°C';


  return (
    <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
     <p className="text-white font-medium mb-2">{formatDate(day.datetime)}</p>

      <div className="flex justify-between items-center">
        <WeatherIcon condition={day.weatherIcon} size="medium" />
        <div className="text-right">
          <p className="text-white text-lg font-semibold">
            {day.tempMax}{getTemperatureUnit()}
          </p>
          <p className="text-white/70 text-sm">
            {day.tempMin}{getTemperatureUnit()}
          </p>
        </div>
      </div>
      <div className="mt-4 text-white/80 text-sm">
        <div className="flex justify-between">
          <span>Humidity</span>
          <span>{day.humidity}%</span>
        </div>
        <div className="flex justify-between mt-1">
          <span>Wind</span>
          <span>{day.windSpeed} {units === 'metric' ? 'm/s' : 'mph'}</span>
        </div>
      </div>
    </div>
  );
};

export default DailyForecast;