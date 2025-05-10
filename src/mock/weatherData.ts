/* eslint-disable @typescript-eslint/no-explicit-any */
// Mock weather data for demonstration purposes
export const mockWeatherData: Record<string, any> = {
  'london': {
    current: {
      cityName: 'London',
      country: 'United Kingdom',
      coordinates: { lat: 51.5074, lon: -0.1278 },
      temperature: 15,
      feelsLike: 13,
      tempMin: 12,
      tempMax: 17,
      humidity: 75,
      pressure: 1012,
      windSpeed: 4.5,
      description: 'Partly cloudy',
      condition: 'partly cloudy',
      unit: 'C'
    },
    forecast: [
      {
        date: '2025-06-01',
        condition: 'partly cloudy',
        tempMax: 17,
        tempMin: 11,
        windSpeed: 4.2,
        humidity: 70
      },
      {
        date: '2025-06-02',
        condition: 'rainy',
        tempMax: 16,
        tempMin: 10,
        windSpeed: 5.1,
        humidity: 85
      },
      {
        date: '2025-06-03',
        condition: 'cloudy',
        tempMax: 15,
        tempMin: 10,
        windSpeed: 3.7,
        humidity: 75
      },
      {
        date: '2025-06-04',
        condition: 'partly cloudy',
        tempMax: 18,
        tempMin: 12,
        windSpeed: 3.2,
        humidity: 65
      },
      {
        date: '2025-06-05',
        condition: 'sunny',
        tempMax: 20,
        tempMin: 13,
        windSpeed: 2.8,
        humidity: 60
      }
    ]
  },
  'newyork': {
    current: {
      cityName: 'New York',
      country: 'United States',
      coordinates: { lat: 40.7128, lon: -74.0060 },
      temperature: 22,
      feelsLike: 23,
      tempMin: 19,
      tempMax: 24,
      humidity: 60,
      pressure: 1015,
      windSpeed: 3.2,
      description: 'Sunny',
      condition: 'sunny',
      unit: 'C'
    },
    forecast: [
      {
        date: '2025-06-01',
        condition: 'sunny',
        tempMax: 25,
        tempMin: 18,
        windSpeed: 3.0,
        humidity: 55
      },
      {
        date: '2025-06-02',
        condition: 'partly cloudy',
        tempMax: 26,
        tempMin: 19,
        windSpeed: 3.5,
        humidity: 60
      },
      {
        date: '2025-06-03',
        condition: 'rainy',
        tempMax: 23,
        tempMin: 17,
        windSpeed: 4.0,
        humidity: 75
      },
      {
        date: '2025-06-04',
        condition: 'partly cloudy',
        tempMax: 24,
        tempMin: 18,
        windSpeed: 3.5,
        humidity: 65
      },
      {
        date: '2025-06-05',
        condition: 'sunny',
        tempMax: 27,
        tempMin: 20,
        windSpeed: 2.5,
        humidity: 50
      }
    ]
  },
  'tokyo': {
    current: {
      cityName: 'Tokyo',
      country: 'Japan',
      coordinates: { lat: 35.6762, lon: 139.6503 },
      temperature: 28,
      feelsLike: 30,
      tempMin: 25,
      tempMax: 31,
      humidity: 70,
      pressure: 1008,
      windSpeed: 2.1,
      description: 'Rainy',
      condition: 'rainy',
      unit: 'C'
    },
    forecast: [
      {
        date: '2025-06-01',
        condition: 'rainy',
        tempMax: 29,
        tempMin: 24,
        windSpeed: 2.5,
        humidity: 75
      },
      {
        date: '2025-06-02',
        condition: 'rainy',
        tempMax: 28,
        tempMin: 23,
        windSpeed: 3.0,
        humidity: 80
      },
      {
        date: '2025-06-03',
        condition: 'cloudy',
        tempMax: 30,
        tempMin: 24,
        windSpeed: 2.2,
        humidity: 65
      },
      {
        date: '2025-06-04',
        condition: 'partly cloudy',
        tempMax: 31,
        tempMin: 25,
        windSpeed: 1.8,
        humidity: 60
      },
      {
        date: '2025-06-05',
        condition: 'sunny',
        tempMax: 32,
        tempMin: 26,
        windSpeed: 1.5,
        humidity: 55
      }
    ]
  },
  'dubai': {
    current: {
      cityName: 'Dubai',
      country: 'United Arab Emirates',
      coordinates: { lat: 25.2048, lon: 55.2708 },
      temperature: 35,
      feelsLike: 38,
      tempMin: 31,
      tempMax: 39,
      humidity: 45,
      pressure: 1010,
      windSpeed: 3.7,
      description: 'Sunny',
      condition: 'sunny',
      unit: 'C'
    },
    forecast: [
      {
        date: '2025-06-01',
        condition: 'sunny',
        tempMax: 38,
        tempMin: 30,
        windSpeed: 3.5,
        humidity: 40
      },
      {
        date: '2025-06-02',
        condition: 'sunny',
        tempMax: 39,
        tempMin: 31,
        windSpeed: 4.0,
        humidity: 35
      },
      {
        date: '2025-06-03',
        condition: 'sunny',
        tempMax: 40,
        tempMin: 32,
        windSpeed: 3.8,
        humidity: 30
      },
      {
        date: '2025-06-04',
        condition: 'partly cloudy',
        tempMax: 37,
        tempMin: 30,
        windSpeed: 3.5,
        humidity: 45
      },
      {
        date: '2025-06-05',
        condition: 'sunny',
        tempMax: 38,
        tempMin: 31,
        windSpeed: 3.0,
        humidity: 40
      }
    ]
  },
  'singapore': {
    current: {
      cityName: 'Singapore',
      country: 'Singapore',
      coordinates: { lat: 1.3521, lon: 103.8198 },
      temperature: 30,
      feelsLike: 34,
      tempMin: 28,
      tempMax: 31,
      humidity: 80,
      pressure: 1009,
      windSpeed: 2.5,
      description: 'Thunderstorm',
      condition: 'thunderstorm',
      unit: 'C'
    },
    forecast: [
      {
        date: '2025-06-01',
        condition: 'thunderstorm',
        tempMax: 31,
        tempMin: 27,
        windSpeed: 2.8,
        humidity: 85
      },
      {
        date: '2025-06-02',
        condition: 'rainy',
        tempMax: 30,
        tempMin: 27,
        windSpeed: 3.0,
        humidity: 80
      },
      {
        date: '2025-06-03',
        condition: 'cloudy',
        tempMax: 31,
        tempMin: 28,
        windSpeed: 2.5,
        humidity: 75
      },
      {
        date: '2025-06-04',
        condition: 'rainy',
        tempMax: 30,
        tempMin: 27,
        windSpeed: 2.7,
        humidity: 85
      },
      {
        date: '2025-06-05',
        condition: 'partly cloudy',
        tempMax: 32,
        tempMin: 28,
        windSpeed: 2.0,
        humidity: 70
      }
    ]
  },
  // Default weather in case city is not found
  'default': {
    current: {
      cityName: 'Unknown City',
      country: 'Unknown Country',
      coordinates: { lat: 0, lon: 0 },
      temperature: 20,
      feelsLike: 20,
      tempMin: 18,
      tempMax: 22,
      humidity: 65,
      pressure: 1013,
      windSpeed: 3.0,
      description: 'Partly cloudy',
      condition: 'partly cloudy',
      unit: 'C'
    },
    forecast: [
      {
        date: '2025-06-01',
        condition: 'partly cloudy',
        tempMax: 22,
        tempMin: 17,
        windSpeed: 3.0,
        humidity: 65
      },
      {
        date: '2025-06-02',
        condition: 'sunny',
        tempMax: 24,
        tempMin: 18,
        windSpeed: 2.5,
        humidity: 60
      },
      {
        date: '2025-06-03',
        condition: 'partly cloudy',
        tempMax: 23,
        tempMin: 17,
        windSpeed: 3.2,
        humidity: 65
      },
      {
        date: '2025-06-04',
        condition: 'cloudy',
        tempMax: 21,
        tempMin: 16,
        windSpeed: 3.5,
        humidity: 70
      },
      {
        date: '2025-06-05',
        condition: 'partly cloudy',
        tempMax: 22,
        tempMin: 17,
        windSpeed: 3.0,
        humidity: 65
      }
    ]
  }
};

// Add mocked data for the generated cities
for (let i = 1; i <= 100; i++) {
  const temp = Math.floor(Math.random() * 35);
  const conditions = ['sunny', 'cloudy', 'rainy', 'partly cloudy', 'clear', 'thunderstorm', 'snow', 'windy', 'foggy'];
  const condition = conditions[Math.floor(Math.random() * conditions.length)];
  const tempMin = temp - Math.floor(Math.random() * 5);
  const tempMax = temp + Math.floor(Math.random() * 5);
  
  mockWeatherData[`city${i}`] = {
    current: {
      cityName: `City ${i}`,
      country: `Country ${i}`,
      coordinates: { lat: Math.random() * 90 * (Math.random() > 0.5 ? 1 : -1), lon: Math.random() * 180 * (Math.random() > 0.5 ? 1 : -1) },
      temperature: temp,
      feelsLike: temp + (Math.random() > 0.5 ? 2 : -2),
      tempMin,
      tempMax,
      humidity: Math.floor(Math.random() * 100),
      pressure: 1000 + Math.floor(Math.random() * 30),
      windSpeed: Math.floor(Math.random() * 10) + 1,
      description: condition.charAt(0).toUpperCase() + condition.slice(1),
      condition,
      unit: 'C'
    },
    forecast: Array.from({ length: 5 }, (_, index) => {
      const forecastTemp = temp + Math.floor(Math.random() * 5) - 2;
      const forecastCondition = conditions[Math.floor(Math.random() * conditions.length)];
      
      const date = new Date();
      date.setDate(date.getDate() + index + 1);
      
      return {
        date: date.toISOString().split('T')[0],
        condition: forecastCondition,
        tempMax: forecastTemp + Math.floor(Math.random() * 3) + 1,
        tempMin: forecastTemp - Math.floor(Math.random() * 3) - 1,
        windSpeed: Math.floor(Math.random() * 5) + 1,
        humidity: Math.floor(Math.random() * 100)
      };
    })
  };
}