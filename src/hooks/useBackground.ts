import { useMemo } from 'react';

export const useBackground = (condition?: string) => {
  return useMemo(() => {
    if (!condition) {
      return {
        backgroundStyle: {
          backgroundImage: 'linear-gradient(to bottom right, #3498db, #2c3e50)',
        },
        weatherClass: 'bg-blue-600',
      };
    }

    const condition_lower = condition.toLowerCase();
    
    if (condition_lower.includes('clear') || condition_lower.includes('sun')) {
      return {
        backgroundStyle: {
          backgroundImage: 'linear-gradient(to bottom right, #f1c40f, #e67e22)',
        },
        weatherClass: 'bg-yellow-500',
      };
    } else if (condition_lower.includes('rain') || condition_lower.includes('drizzle')) {
      return {
        backgroundStyle: {
          backgroundImage: 'linear-gradient(to bottom right, #2c3e50, #34495e)',
        },
        weatherClass: 'bg-gray-700',
      };
    } else if (condition_lower.includes('snow')) {
      return {
        backgroundStyle: {
          backgroundImage: 'linear-gradient(to bottom right, #aeb6bf, #7f8c8d)', // darker gray gradient
        },
        weatherClass: 'bg-gray-200 text-gray-800', // Different text color for light background
      };
    } else if (condition_lower.includes('thunder') || condition_lower.includes('lightning')) {
      return {
        backgroundStyle: {
          backgroundImage: 'linear-gradient(to bottom right, #2c3e50, #8e44ad)',
        },
        weatherClass: 'bg-purple-900',
      };
    } else if (condition_lower.includes('fog') || condition_lower.includes('mist')) {
      return {
        backgroundStyle: {
          backgroundImage: 'linear-gradient(to bottom right, #95a5a6, #7f8c8d)',
        },
        weatherClass: 'bg-gray-400',
      };
    } else if (condition_lower.includes('cloud')) {
      return {
        backgroundStyle: {
          backgroundImage: 'linear-gradient(to bottom right, #3498db, #95a5a6)',
        },
        weatherClass: 'bg-blue-400',
      };
    } else {
      // Default background
      return {
        backgroundStyle: {
          backgroundImage: 'linear-gradient(to bottom right, #3498db, #2c3e50)',
        },
        weatherClass: 'bg-blue-600',
      };
    }
  }, [condition]);
};