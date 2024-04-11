import React, { useState, useEffect } from 'react';
import FilterPillBox from './FilterPillBox';
import FilterDropdown from './FilterDropdown';
import { useFilters } from '../contexts/FiltersContext';

const FilterBar = () => {
  const { sortBy, toggleSort, totalFiltersApplied } = useFilters();
  const [showDropdown, setShowDropdown] = useState(false);
  const [filterActiveSortBy, setFilterActiveSortBy] = useState(false);

  const handleFilterClick = e => {
    setShowDropdown(true);
  };

  const handleCloseDropdown = () => {
    setShowDropdown(false);
  };

  const dummyLabels = [
    {
      icon: 'filter',
      label: 'Filter',
      onClick: handleFilterClick,
      totalFilter: totalFiltersApplied,
    },
    {
      active: filterActiveSortBy,
      icon: 'sort',
      label: 'Sort AZ',
      onClick: toggleSort,
    },
    {
      label: 'Fast Delivery',
    },
    {
      label: 'New Foods',
    },
    {
      label: 'Ratings 4.0+',
    },
    {
      label: 'Pure Veg',
    },
    {
      label: 'Offers',
    },
    {
      label: 'Rs.300 - Rs.400',
    },
    {
      label: 'Less than Rs.300',
    },
  ];

  useEffect(() => {
    setFilterActiveSortBy(sortBy === 'desc' && true);
  }, [sortBy]);

  return (
    <div className="w-full overflow-x-scroll" style={{ scrollbarWidth: 'none' }}>
      <div className="flex flex-row gap-2 items-center pt-1 pb-4 w-fit overflow-auto relative">
        {dummyLabels.map((item, index) => (
          <FilterPillBox
            key={index}
            icon={item.icon}
            isActive={item.active}
            label={item.label}
            onClick={item.onClick}
            totalFilter={item.totalFilter}
          />
        ))}
      </div>
      <FilterDropdown onClose={handleCloseDropdown} isOpen={showDropdown} />
    </div>
  );
};

export default FilterBar;
