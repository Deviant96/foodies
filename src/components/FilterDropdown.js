import React, { useState, useEffect, useRef } from 'react';
import { areas } from '../data/areas';

const FilterDropdown = ({ isOpen, onClose, onClick }) => {
  const dropdownRef = useRef(null);
  const [filterSelectedArea, setFilterSelectedArea] = useState(null);

  const handleAreaSelect = area => {
    setFilterSelectedArea(area);
  };

  const onApplyFilter = () => {
    onClose(false);
  };

  const handleClearSelection = () => {
    onClose(false);
    setFilterSelectedArea(null);
  };

  const handleClickDropdownOverlay = () => {
    onClose(isOpen);
  };

  useEffect(() => {
    // Trying to place the dropdown below the button
    const buttonRect = dropdownRef.current.parentNode.getBoundingClientRect();
    dropdownRef.current.style.left = `${buttonRect.left}px`;
    dropdownRef.current.style.top = `${buttonRect.bottom}px`;
  }, [onClose]);

  return (
    <>
      <div
        ref={dropdownRef}
        className={`absolute bottom-0 left-0 z-10 bg-white border border-gray-300 p-4 min-w-48 h-fit rounded-xl ${isOpen ? 'block' : 'hidden'}`}
        onClick={onClick}>
        <h3 className="font-semibold mb-2">Filter By Area</h3>
        <div className="flex flex-col flex-wrap">
          {areas.map((area, index) => (
            <label key={index} className="inline-flex justify-between items-center p-2 cursor-pointer">
              {area}
              <input
                type="radio"
                className="form-radio accent-[#ee6c00]"
                name="area"
                value={area}
                onChange={() => handleAreaSelect(area)}
                checked={filterSelectedArea === area}
              />
            </label>
          ))}
        </div>

        <hr className="absolute left-0 w-full mt-4" />

        <button
          onClick={handleClearSelection}
          className="bg-transparent py-2 mt-6 rounded w-full text-sm font-bold text-gray-400 text-left">
          Clear
        </button>
        <button
          onClick={onApplyFilter}
          className="bg-transparent py-2 mt-2 rounded w-full text-sm font-bold text-[#f15700] text-left">
          Apply
        </button>
      </div>

      <DropdownOverlay onClick={handleClickDropdownOverlay} isOpen={isOpen} />
    </>
  );
};

export default FilterDropdown;

// Preventing click on any element but the dropdown when the dropdown is shown
// by showing overlay behind the dropdown
const DropdownOverlay = ({ isOpen, onClick }) => {
  return (
    <div className={`absolute top-0 left-0 w-full h-full z-[9] ${isOpen ? 'block' : 'hidden'}`} onClick={onClick}></div>
  );
};
