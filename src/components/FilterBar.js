import React from 'react';
import FilterPillBox from './FilterPillBox';

const FilterBar = () => {
  const handleFilterClick = () => {
    console.log('Main filter click');
  };

  const dummyLabels = [
    {
      icon: 'filter',
      label: 'Filter',
      onClick: handleFilterClick,
      totalFilter: 2,
    },
    {
      active: true,
      icon: 'sort',
      label: 'Sort AZ',
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
    </div>
  );
};

export default FilterBar;
