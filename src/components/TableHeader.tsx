import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { City } from '../types';

interface TableHeaderProps {
  onSort: (key: keyof City) => void;
  sortConfig: {
    key: keyof City;
    direction: 'ascending' | 'descending';
  } | null;
}

const TableHeader: React.FC<TableHeaderProps> = ({ onSort, sortConfig }) => {
  const getColumnHeader = (key: keyof City, label: string) => {
    const isSorted = sortConfig?.key === key;
    
    return (
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:text-gray-700 dark:hover:text-gray-200"
        onClick={() => onSort(key)}
      >
        <div className="flex items-center space-x-1">
          <span>{label}</span>
          <span>
            {isSorted ? (
              sortConfig?.direction === 'ascending' ? (
                <ArrowUp className="h-4 w-4" />
              ) : (
                <ArrowDown className="h-4 w-4" />
              )
            ) : (
              <div className="h-4 w-4" />
            )}
          </span>
        </div>
      </th>
    );
  };

  return (
    <thead className="bg-gray-50 dark:bg-gray-700">
      <tr>
        {getColumnHeader('name', 'City Name')}
        {getColumnHeader('country', 'Country')}
        {getColumnHeader('timezone', 'Timezone')}
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
        >
          Temperature
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
        >
          Weather
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;