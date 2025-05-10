import { City } from '../types';
import { mockCities } from '../mock/cityData';

export const searchCitiesApi = async (term: string, limit = 20, page = 1): Promise<City[]> => {
  const offset = (page - 1) * limit;
  const q = term ? `&q=${encodeURIComponent(term)}` : '';

  const res = await fetch(
    `https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&rows=${limit}&start=${offset}${q}`
  );

  const data = await res.json();

  const cities: City[] = data.records.map((record: any) => {
    const fields = record.fields;
    return {
      id: record.recordid,
      name: fields.name,
      country: fields.cou_name_en,
      timezone: fields.timezone || 'Unknown',
    };
  });

  return cities;
};

export const getCitiesApi = async (page = 1, limit = 20): Promise<City[]> => {
  const offset = (page - 1) * limit;

  const res = await fetch(
    `https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&rows=${limit}&start=${offset}`
  );

  const data = await res.json();

  const cities: City[] = data.records.map((record: any) => {
    const fields = record.fields;
    return {
      id: record.recordid,
      name: fields.name,
      country: fields.cou_name_en,
      timezone: fields.timezone || 'Unknown',
    };
  });

  return cities;
};