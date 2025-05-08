import React, { forwardRef } from 'react';
import { Star } from 'lucide-react';
import WeatherIcon from './WeatherIcon';
import { City } from '../types';

interface CityRowProps {
  city: City;
  onClick: () => void;
  onFavorite: () => void;
  isFavorite: boolean;
}

const CityRow = forwardRef<HTMLTableRowElement, CityRowProps>(
  ({ city, onClick, onFavorite, isFavorite }, ref) => {
    const handleFavoriteClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      onFavorite();
    };

    const handleRowClick = () => {
      onClick();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        onClick();
      }
    };

    const handleContextMenu = (e: React.MouseEvent) => {
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
            <button
              onClick={handleFavoriteClick}
              className={`mr-3 ${isFavorite ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'} hover:text-yellow-500 transition-colors`}
              aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              <Star className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
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