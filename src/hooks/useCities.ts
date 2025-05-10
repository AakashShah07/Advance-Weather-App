/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback, useEffect } from 'react';
import { City } from '../types';
import { searchCitiesApi, getCitiesApi } from '../services/cityService';

export const useCities = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [lastSearchTerm, setLastSearchTerm] = useState('');

  const searchCities = useCallback(async (searchTerm: string, limit?: number) => {
    setLoading(true);
    setLastSearchTerm(searchTerm);
    
    try {
      const results = await searchCitiesApi(searchTerm, limit);
      setCities(results);
      setHasMore(results.length > 0);
      setPage(1);
      return results;
    } catch (error) {
      console.error('Error searching cities:', error);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    const nextPage = page + 1;
    
    try {
      const newCities = lastSearchTerm
        ? await searchCitiesApi(lastSearchTerm, undefined, nextPage)
        : await getCitiesApi(nextPage);
      
      if (newCities.length === 0) {
        setHasMore(false);
      } else {
        setCities(prevCities => [...prevCities, ...newCities]);
        setPage(nextPage);
      }
    } catch (error) {
      console.error('Error loading more cities:', error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, page, lastSearchTerm]);

  // 👉 Auto-load first page if no search term
  useEffect(() => {
    const fetchInitialCities = async () => {
      if (cities.length === 0 && !lastSearchTerm) {
        setLoading(true);
        try {
          const initialCities = await getCitiesApi(1);
          setCities(initialCities);
          setHasMore(initialCities.length > 0);
        } catch (error) {
          console.error('Error fetching initial cities:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchInitialCities();
  }, []); // Runs only once on mount

  return {
    cities,
    loading,
    hasMore,
    searchCities,
    loadMore,
  };
};