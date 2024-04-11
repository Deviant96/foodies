import React, { createContext, useContext, useEffect, useState } from 'react';

const FiltersContext = createContext();

export const useFilters = () => useContext(FiltersContext);

export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState([]);
  const [totalFiltersApplied, setTotalFiltersApplied] = useState(null);

  const [sortBy, setSortBy] = useState('asc');
  const [selectedArea, setSelectedArea] = useState(null);

  const ContainSelectedArea = arr => {
    return arr.includes('selectedarea');
  };

  useEffect(() => {
    const addFilter = filter => {
      setFilters([...filters, filter.toLowerCase()]);
      setTotalFiltersApplied(totalFiltersApplied + 1);
    };

    const removeFilter = filterToRemove => {
      const updatedFilters = filters.filter(filter => filter !== filterToRemove.toLowerCase());
      setFilters(updatedFilters);
      setTotalFiltersApplied(totalFiltersApplied - 1);
    };

    // Trying to automatically calculate total filter based on selectedArea presence in filters
    if (selectedArea) {
      if (!ContainSelectedArea(filters)) {
        addFilter('selectedArea');
      }
    } else {
      if (ContainSelectedArea(filters)) {
        removeFilter('selectedArea');
      }
    }
  }, [selectedArea, filters, totalFiltersApplied]);

  const toggleSort = () => {
    setSortBy(sortBy === 'asc' ? 'desc' : 'asc');
  };

  const selectArea = area => {
    setSelectedArea(area);
  };

  return (
    <FiltersContext.Provider value={{ sortBy, toggleSort, selectedArea, selectArea, totalFiltersApplied }}>
      {children}
    </FiltersContext.Provider>
  );
};
