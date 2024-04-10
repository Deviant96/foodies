import React from 'react';
import { FilterIcon, SortIcon } from './Icons';

const FilterPillBox = ({ label, isActive, icon, onClick, totalFilter }) => {
  const baseClasses =
    'p-2 border-gray-300 whitespace-nowrap border border-solid rounded-full text-sm cursor-pointer shadow-md flex items-center gap-1';

  const activeClasses = isActive ? 'outline outline-2 outline-[#f15700]' : '';

  const combinedClasses = `${baseClasses} ${isActive ? activeClasses : ''}`;

  let iconComponent;
  switch (icon) {
    case 'filter':
      iconComponent = <FilterIcon />;
      break;
    case 'sort':
      iconComponent = isActive ? <SortIcon /> : <SortIcon flipped={true} />;
      break;
    default:
      iconComponent = null;
      break;
  }

  return (
    <div className={combinedClasses} onClick={onClick}>
      {totalFilter > 0 && (
        <span className="p-2 rounded-full bg-[#f15700] text-white relative w-5 h-5">
          <span className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">{totalFilter}</span>
        </span>
      )}
      {label}
      {icon && <span>{iconComponent}</span>}
    </div>
  );
};

export default FilterPillBox;
