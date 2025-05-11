import React, { forwardRef } from 'react';
import WeatherIcon from './WeatherIcon';
import { City } from '../types';

interface CityRowProps {
  city: City;
  onClick: () => void;
  onFavorite: () => void;
  isFavorite: boolean;
}

const CityRow = forwardRef<HTMLTableRowElement, CityRowProps>(
  ({ city, onClick }, ref) => {
    

    const handleRowClick = () => {
      onClick();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        onClick();
      }
    };

    const handleContextMenu = () => {
      // Allow default context menu for "open in new tab" functionality
    };

    return (
      <tr
        ref={ref}
        onClick={handleRowClick}
        onKeyDown={handleKeyDown}
        onContextMenu={handleContextMenu}
        className="hover:bg-gray-50 dark:hover:bg-gray-750 border-b border-gray-200 dark:border-gray-700 cursor-pointer transition-colors"
        tabIndex={0}
        role="button"
      >
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">{city.name}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-600 dark:text-gray-300">{city.country}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-600 dark:text-gray-300">{city.timezone}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          {city.currentWeather ? (
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {city.currentWeather.temperature}°{city.currentWeather.unit}
            </div>
          ) : (
            <div className="text-sm text-gray-500 dark:text-gray-400">-</div>
          )}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          {city.currentWeather ? (
            <WeatherIcon condition={city.currentWeather.condition} size="small" />
          ) : (
            <div className="text-sm text-gray-500 dark:text-gray-400">-</div>
          )}
        </td>
      </tr>
    );
  }
);

CityRow.displayName = 'CityRow';

export default CityRow;