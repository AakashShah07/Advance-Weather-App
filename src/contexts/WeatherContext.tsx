import React, { createContext, useContext, useState, useEffect } from 'react';

interface WeatherContextType {
  favorites: string[];
  addToFavorites: (cityId: string) => void;
  removeFromFavorite: (cityId: string) => void;
}

const WeatherContext = createContext<WeatherContextType>({
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorite: () => {},
});

interface WeatherProviderProps {
  children: React.ReactNode;
}

export const WeatherProvider: React.FC<WeatherProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem('weatherFavorites');
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error('Error loading favorites:', error);
      }
    }
  }, []);

  const addToFavorites = (cityId: string) => {
    const newFavorites = [...favorites, cityId];
    setFavorites(newFavorites);
    localStorage.setItem('weatherFavorites', JSON.stringify(newFavorites));
  };

  const removeFromFavorite = (cityId: string) => {
    const newFavorites = favorites.filter(id => id !== cityId);
    setFavorites(newFavorites);
    localStorage.setItem('weatherFavorites', JSON.stringify(newFavorites));
  };

  return (
    <WeatherContext.Provider value={{ favorites, addToFavorites, removeFromFavorite }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);