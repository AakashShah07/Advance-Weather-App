"use client";
import MyHeader from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import { Search } from "lucide-react";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { getWeatherData } from "@/services/weatherService";
import { getCitiesApi } from "@/services/cityService";
import CityRow from "@/components/CityRow";
import TableHeader from "@/components/TableHeader";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { useCities } from "@/hooks/useCities";
import { City } from "@/types";
import { useWeather } from "@/contexts/WeatherContext";

export default function Home() {
  const { cities, loading, searchCities, hasMore, loadMore } = useCities();
  const [searchTerm, setSearchTerm] = useState("");
  const [enrichedCities, setEnrichedCities] = useState<City[]>([]);

  const [sortConfig, setSortConfig] = useState<{
    key: keyof City;
    direction: "ascending" | "descending";
  } | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const { addToFavorites, favorites } = useWeather();

  useEffect(() => {
    if (!loading && cities.length > 0) {
      enrichCitiesWithWeather();
    }
  }, [cities, loading]);
  
  const enrichCitiesWithWeather = async () => {

    const enriched = await Promise.all(
      cities.map(async (city) => {
        if (city.currentWeather || !city.latitude || !city.longitude) {
          return city;
        }
  
        try {
          const weather = await getWeatherData(city.latitude, city.longitude, 'imperial');
          return {
            ...city,
            currentWeather: {
              temperature: weather.current.temperature,
              condition: weather.current.weather,
              unit: weather.current.unit,
            },
          };
        } catch (error) {
          console.error(`Failed to fetch weather for ${city.name}:`, error);
          return city;
        }
      })
    );
  
    setEnrichedCities(enriched);
  };
  

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    searchCities(value);
  };

  const handleCityClick = (cityId: string) => {
    // navigate(`/weather/${cityId}`);
  };

  const handleSort = (key: keyof City) => {
    let direction: "ascending" | "descending" = "ascending";

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }

    setSortConfig({ key, direction });
  };

  const sortedCities = React.useMemo(() => {
    const citiesCopy = [...enrichedCities.length ? enrichedCities : cities];
    if (sortConfig !== null) {
      citiesCopy.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return citiesCopy;
  }, [enrichedCities,cities, sortConfig]);

  const lastCityElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, loadMore]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
      <MyHeader title="Weather App" />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <SearchBar
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for cities..."
            icon={<Search className="h-5 w-5 text-gray-400" />}
          />

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <TableHeader onSort={handleSort} sortConfig={sortConfig} />
                <tbody>
                  {sortedCities.map((city, index) => {
                    if (sortedCities.length === index + 1) {
                      return (
                        <CityRow
                          ref={lastCityElementRef}
                          key={city.id}
                          city={city}
                          isFavorite={favorites.includes(city.id)}
                          onClick={() => handleCityClick(city.id)}
                          onFavorite={() => addToFavorites(city.id)}
                        />
                      );
                    } else {
                      return (
                        <CityRow
                          key={city.id}
                          city={city}
                          isFavorite={favorites.includes(city.id)}
                          onClick={() => handleCityClick(city.id)}
                          onFavorite={() => addToFavorites(city.id)}
                        />
                      );
                    }
                  })}
                </tbody>
              </table>
            </div>

            {loading && (
              <div className="p-4">
                <LoadingSkeleton rows={5} />
              </div>
            )}

            {!loading && cities.length === 0 && (
              <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                No cities found. Try a different search term.
              </div>
            )}
          </div>
        </div>
      </main>
      
    </div>
  );
}
