export interface City {
  id: string;
  name: string;
  country: string;
  timezone: string;
  latitude?: number;
  longitude?: number;
  currentWeather?: {
    temperature: number;
    condition: string;
    unit: string;
  };
}

export interface Weather {
  cityName: string;
  country: string;
  coordinates?: {
    lat: number;
    lon: number;
  };
  temperature: number;
  feelsLike: number;
  tempMin: number;
  tempMax: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  description: string;
  condition: string;
  unit: string;
}

export interface Forecast {
  date: string;
  condition: string;
  tempMax: number;
  tempMin: number;
  windSpeed: number;
  humidity: number;
}