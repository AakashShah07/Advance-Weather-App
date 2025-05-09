import { City } from '../types';

// This is mock data for demonstration purposes
export const mockCities: City[] = [
  {
    id: 'london',
    name: 'London',
    country: 'United Kingdom',
    timezone: 'GMT+1',
    currentWeather: {
      temperature: 15,
      condition: 'partly cloudy',
      unit: 'C'
    }
  },
  {
    id: 'newyork',
    name: 'New York',
    country: 'United States',
    timezone: 'GMT-4',
    currentWeather: {
      temperature: 22,
      condition: 'sunny',
      unit: 'C'
    }
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    timezone: 'GMT+9',
    currentWeather: {
      temperature: 28,
      condition: 'rainy',
      unit: 'C'
    }
  },
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    timezone: 'GMT+2',
    currentWeather: {
      temperature: 18,
      condition: 'cloudy',
      unit: 'C'
    }
  },
  {
    id: 'sydney',
    name: 'Sydney',
    country: 'Australia',
    timezone: 'GMT+10',
    currentWeather: {
      temperature: 25,
      condition: 'sunny',
      unit: 'C'
    }
  },
  {
    id: 'berlin',
    name: 'Berlin',
    country: 'Germany',
    timezone: 'GMT+2',
    currentWeather: {
      temperature: 16,
      condition: 'partly cloudy',
      unit: 'C'
    }
  },
  {
    id: 'moscow',
    name: 'Moscow',
    country: 'Russia',
    timezone: 'GMT+3',
    currentWeather: {
      temperature: 10,
      condition: 'snow',
      unit: 'C'
    }
  },
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'United Arab Emirates',
    timezone: 'GMT+4',
    currentWeather: {
      temperature: 35,
      condition: 'sunny',
      unit: 'C'
    }
  },
  {
    id: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    timezone: 'GMT+8',
    currentWeather: {
      temperature: 30,
      condition: 'thunderstorm',
      unit: 'C'
    }
  },
  {
    id: 'toronto',
    name: 'Toronto',
    country: 'Canada',
    timezone: 'GMT-4',
    currentWeather: {
      temperature: 12,
      condition: 'cloudy',
      unit: 'C'
    }
  },
  {
    id: 'melbourne',
    name: 'Melbourne',
    country: 'Australia',
    timezone: 'GMT+10',
    currentWeather: {
      temperature: 22,
      condition: 'windy',
      unit: 'C'
    }
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    country: 'Spain',
    timezone: 'GMT+2',
    currentWeather: {
      temperature: 24,
      condition: 'sunny',
      unit: 'C'
    }
  },
  {
    id: 'rome',
    name: 'Rome',
    country: 'Italy',
    timezone: 'GMT+2',
    currentWeather: {
      temperature: 26,
      condition: 'clear',
      unit: 'C'
    }
  },
  {
    id: 'cairo',
    name: 'Cairo',
    country: 'Egypt',
    timezone: 'GMT+2',
    currentWeather: {
      temperature: 32,
      condition: 'sunny',
      unit: 'C'
    }
  },
  {
    id: 'seoul',
    name: 'Seoul',
    country: 'South Korea',
    timezone: 'GMT+9',
    currentWeather: {
      temperature: 20,
      condition: 'cloudy',
      unit: 'C'
    }
  }
];

// Generate more mock data to demonstrate infinite scrolling
for (let i = 1; i <= 100; i++) {
  const temp = Math.floor(Math.random() * 35);
  const conditions = ['sunny', 'cloudy', 'rainy', 'partly cloudy', 'clear', 'thunderstorm', 'snow', 'windy', 'foggy'];
  const condition = conditions[Math.floor(Math.random() * conditions.length)];
  
  mockCities.push({
    id: `city${i}`,
    name: `City ${i}`,
    country: `Country ${i}`,
    timezone: `GMT${Math.random() > 0.5 ? '+' : '-'}${Math.floor(Math.random() * 12)}`,
    currentWeather: {
      temperature: temp,
      condition,
      unit: 'C'
    }
  });
}