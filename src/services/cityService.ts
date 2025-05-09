import { City } from '../types';
import { mockCities } from '../mock/cityData';

export const searchCitiesApi = async (term: string, limit = 20, page = 1): Promise<City[]> => {
  // In a real app, this would be an API call to a city database
  // For demonstration purposes, we'll filter the mock data
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const normalizedTerm = term.toLowerCase().trim();
  
  if (!normalizedTerm) {
    return getCitiesApi(page, limit);
  }
  
  const filteredCities = mockCities.filter(city => 
    city.name.toLowerCase().includes(normalizedTerm) || 
    city.country.toLowerCase().includes(normalizedTerm)
  );
  
  const pageSize = limit || 20;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  
  return filteredCities.slice(startIndex, endIndex);
};

export const getCitiesApi = async (page = 1, limit = 20): Promise<City[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const pageSize = limit;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  
  return mockCities.slice(startIndex, endIndex);
};