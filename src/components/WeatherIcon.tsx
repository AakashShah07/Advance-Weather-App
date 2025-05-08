import React from 'react';
import { 
  Sun, Cloud, CloudRain, CloudSnow, CloudLightning, 
  CloudFog, CloudDrizzle, Wind, CloudSun, Droplets
} from 'lucide-react';

interface WeatherIconProps {
  condition: string;
  size?: 'small' | 'medium' | 'large';
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ condition, size = 'medium' }) => {
  const getIcon = () => {
    const condition_lower = condition.toLowerCase();
    
    if (condition_lower.includes('sun') || condition_lower.includes('clear')) {
      return <Sun />;
    } else if (condition_lower.includes('rain')) {
      return <CloudRain />;
    } else if (condition_lower.includes('snow')) {
      return <CloudSnow />;
    } else if (condition_lower.includes('thunder') || condition_lower.includes('lightning')) {
      return <CloudLightning />;
    } else if (condition_lower.includes('fog') || condition_lower.includes('mist')) {
      return <CloudFog />;
    } else if (condition_lower.includes('drizzle')) {
      return <CloudDrizzle />;
    } else if (condition_lower.includes('wind')) {
      return <Wind />;
    } else if (condition_lower.includes('partly cloudy')) {
      return <CloudSun />;
    } else if (condition_lower.includes('cloud')) {
      return <Cloud />;
    } else if (condition_lower.includes('humid') || condition_lower.includes('humidity')) {
      return <Droplets />;
    } else {
      // Default icon
      return <Sun />;
    }
  };

  const getSize = () => {
    switch (size) {
      case 'small':
        return 'h-5 w-5';
      case 'medium':
        return 'h-8 w-8';
      case 'large':
        return 'h-16 w-16';
      default:
        return 'h-8 w-8';
    }
  };

  return (
    <div className={`${getSize()} text-white`}>
      {getIcon()}
    </div>
  );
};

export default WeatherIcon;