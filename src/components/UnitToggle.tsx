import React from 'react';

interface UnitToggleProps {
  units: 'metric' | 'imperial';
  onChange: (unit: 'metric' | 'imperial') => void;
}

const UnitToggle: React.FC<UnitToggleProps> = ({ units, onChange }) => {
  return (
    <div className="flex items-center bg-white/20 rounded-full p-1">
      <button
        onClick={() => onChange('metric')}
        className={`text-sm font-medium rounded-full py-1 px-3 transition-colors ${
          units === 'metric'
            ? 'bg-white text-blue-600'
            : 'text-white hover:bg-white/10'
        }`}
      >
        °C
      </button>
      <button
        onClick={() => onChange('imperial')}
        className={`text-sm font-medium rounded-full py-1 px-3 transition-colors ${
          units === 'imperial'
            ? 'bg-white text-blue-600'
            : 'text-white hover:bg-white/10'
        }`}
      >
        °F
      </button>
    </div>
  );
};

export default UnitToggle;