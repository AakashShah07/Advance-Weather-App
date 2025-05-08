import React from 'react';

interface LoadingSkeletonProps {
  rows?: number;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ rows = 3 }) => {
  return (
    <div className="animate-pulse">
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="flex space-x-4 py-4">
          <div className="flex-1 space-y-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;