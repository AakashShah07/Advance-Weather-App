/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useState, useEffect } from 'react';
import { useSearchParams, useParams } from 'next/navigation'; // ✅ NEXT.JS IMPORT
import {  MapPin, Droplets, Wind, ArrowDown, ArrowUp, Thermometer } from 'lucide-react';
import DailyForecast from '@/components/DailyForecast';
import WeatherIcon from '@/components/WeatherIcon';
import UnitToggle from '@/components/UnitToggle';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import { useBackground } from '@/hooks/useBackground';
import { getWeatherData,getForecastData } from '@/services/weatherService';
import { Forecast ,Weather} from '@/types';

const WeatherDetails: React.FC = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  const cityId = params.cityId;
  const lat = searchParams.get('lat');
  const name = searchParams.get('name');
  const country = searchParams.get('country');
  const lon = searchParams.get('lon');  // const navigate = useNavigate();
  const [weather, setWeather] = useState<Weather>();
  const [forecast, setForecast] = useState<Forecast[]>([]);
  const [loading, setLoading] = useState(true);
  const [units, setUnits] = useState<'metric' | 'imperial'>('metric');
  const { backgroundStyle, weatherClass } = useBackground(weather?.condition);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!cityId) return;
      
      setLoading(true);
      try {
        if (!lat || !lon || !units) {
          throw new Error('Latitude or Longitude is missing');
        }
        const data = await getWeatherData(parseFloat(lat), parseFloat(lon), units);
        setWeather({
          cityName: name ?? '',
          country: country ?? '',
          temperature: data.current.temperature,
          feelsLike: data.current.feelsLike,
          tempMin: data.current.tempMin,
          tempMax: data.current.tempMax,
          description: data.current.weatherDescription,
          condition: data.current.weather, // Ensure this maps to the correct condition
          humidity: data.current.humidity,
          pressure: data.current.pressure,
          windSpeed: data.current.windSpeed,
          unit: units,
          coordinates: {
            lat: parseFloat(lat),
            lon: parseFloat(lon),
          },
        });
        // setForecast(data.forecast);
        const foreDat = await getForecastData(parseFloat(lat), parseFloat(lon), units);
        setForecast(foreDat.forecast)


      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [cityId, units]);

  const handleFavoriteToggle = () => {
    // if (!cityId) return;
    
    // if (isFavorite) {
    //   removeFromFavorite(cityId);
    // } else {
    //   addToFavorites(cityId);
    // }
  };

  const handleUnitChange = (newUnit: 'metric' | 'imperial') => {
    setUnits(newUnit);
  };
 
  const handleBack = () => {
    // navigate('/');
  };

  const getTemperatureUnit = () =>  units === 'metric' ? '°F' : '°C';;
    const getSpeedUnit = () => units === 'metric' ? 'm/s' : 'mph';

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 p-4">
        <LoadingSkeleton rows={10} />
      </div>
    );
  }

  return (
    <div 
      className={`min-h-screen transition-colors duration-700 ${weatherClass}`}
      style={backgroundStyle}
    >
      <div className="container mx-auto px-4 py-8">
        <header className="flex items-center justify-between mb-8">
          <button 
            onClick={handleBack}
            className="flex items-center text-white bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            aria-label="Go back"
          >
            {/* <ChevronLeft className="h-6 w-6" /> */}
          </button>
          
          <UnitToggle units={units} onChange={handleUnitChange} />
          
          <button
            onClick={handleFavoriteToggle}
            className={`flex items-center justify-center rounded-full p-2 transition-colors 
             'bg-white/20 text-white hover:bg-white/30'
            }`}
            aria-label={'Add to favorites'}
          >
            {/* <Heart className={`h-6 w-6 ${isFavorite ? 'fill-current' : ''}`} /> */}
          </button>
        </header>

        {weather && (
          <>
            <div className="text-white mb-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold mb-2">{weather.cityName}</h1>
                  <p className="flex items-center text-lg opacity-90 mb-4">
                    <MapPin className="h-5 w-5 mr-1" />
                    {weather.country}
                  </p>
                </div>
                
                <div className="flex items-center">
                  <WeatherIcon condition={weather.condition} size="large" />
                  <div className="ml-4">
                    <div className="text-6xl font-light">{weather.temperature}{getTemperatureUnit()}</div>
                    <p className="text-xl capitalize">{weather.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 bg-white/10 backdrop-blur-md rounded-xl p-4">
                <div className="flex items-center">
                  <Thermometer className="h-6 w-6 mr-2" />
                  <div>
                    <p className="text-sm opacity-75">Feels Like</p>
                    <p className="text-xl font-medium">{weather.feelsLike}{getTemperatureUnit()}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Droplets className="h-6 w-6 mr-2" />
                  <div>
                    <p className="text-sm opacity-75">Humidity</p>
                    <p className="text-xl font-medium">{weather.humidity}%</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Wind className="h-6 w-6 mr-2" />
                  <div>
                    <p className="text-sm opacity-75">Wind</p>
                    <p className="text-xl font-medium">{weather.windSpeed} {getSpeedUnit()}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex mr-2">
                    <ArrowDown className="h-3 w-3 mr-1" /><ArrowUp className="h-3 w-3" />
                  </div>
                  <div>
                    <p className="text-sm opacity-75">Min / Max</p>
                    <p className="text-xl font-medium">
                      {weather.tempMin}{getTemperatureUnit()} / {weather.tempMax}{getTemperatureUnit()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5-Day Forecast</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                {forecast.map((day, index) => (
                  <DailyForecast 
                    key={index}
                    day={day}
                    units={units}
                  />
                ))}
              </div>
            </div>

            
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherDetails;