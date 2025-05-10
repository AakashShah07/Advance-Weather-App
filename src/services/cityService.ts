import { City } from '../types';
// import { mockCities } from '../mock/cityData';
import { getWeatherData } from './weatherService';

export const searchCitiesApi = async (term: string, limit = 20, page = 1): Promise<City[]> => {
  const offset = (page - 1) * limit;
  const q = term ? `&q=${encodeURIComponent(term)}` : '';

  const res = await fetch(
    `https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&rows=${limit}&start=${offset}${q}`
  );

  const data = await res.json();

  const cities: City[] = await Promise.all(
    data.records.map(async (record: any) => {
      const fields = record.fields;

      const lat = fields.coordinates?.[1];
      const lon = fields.coordinates?.[0];

      let currentWeather = undefined;
      if (lat && lon) {
        try {
          const weather = await getWeatherData(lat, lon, 'imperial');
          currentWeather = {
            temperature: weather.current.temperature,
            condition: weather.current.weather,
            unit: weather.current.unit,
          };
        } catch (error) {
          console.error(`Weather fetch failed for ${fields.name}:`, error);
        }
      }

      return {
        id: record.recordid,
        name: fields.name,
        country: fields.cou_name_en,
        latitude: lat,
        longitude: lon,
        timezone: fields.timezone || 'Unknown',
        currentWeather,
      };
    })
  );

  return cities;
};

export const getCitiesApi = async (page = 1, limit = 20): Promise<City[]> => {
  const offset = (page - 1) * limit;

  const res = await fetch(
    `https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&rows=${limit}&start=${offset}`
  );

  const data = await res.json();

  const cities: City[] = await Promise.all(
    data.records.map(async (record: any) => {
      const fields = record.fields;

      const lat = fields.coordinates?.[1];
      const lon = fields.coordinates?.[0];

      let currentWeather = undefined;
      if (lat && lon) {
        try {
          const weather = await getWeatherData(lat, lon, 'imperial');
          currentWeather = {
            temperature: weather.current.temperature,
            condition: weather.current.weather,
            unit: weather.current.unit,
          };
        } catch (error) {
          console.error(`Weather fetch failed for ${fields.name}:`, error);
        }
      }

      return {
        id: record.recordid,
        name: fields.name,
        country: fields.cou_name_en,
        latitude: lat,
        longitude: lon,
        timezone: fields.timezone || 'Unknown',
        currentWeather,
      };
    })
  );

  return cities;
};