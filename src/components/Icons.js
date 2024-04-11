import React from 'react';

const SortIcon = ({ flipped }) => {
  return (
    <svg
      width="20px"
      className={flipped && 'scale-y-[-1]'}
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M4 16L13 16" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 11H13" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 6L13 6" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 4L17 20L20 16" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const FilterIcon = () => {
  return (
    <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 10.5A3.502 3.502 0 0 0 18.355 8H21a1 1 0 1 0 0-2h-2.645a3.502 3.502 0 0 0-6.71 0H3a1 1 0 0 0 0 2h8.645A3.502 3.502 0 0 0 15 10.5zM3 16a1 1 0 1 0 0 2h2.145a3.502 3.502 0 0 0 6.71 0H21a1 1 0 1 0 0-2h-9.145a3.502 3.502 0 0 0-6.71 0H3z"
        fill="#000000"
      />
    </svg>
  );
};

const MagnifierIcon = () => {
  return (
    <svg aria-hidden="true" height="20" width="20">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.1 8.842a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Zm-.957 5.338a6.85 6.85 0 1 1 .993-.98l5.183 4.76a.963.963 0 1 1-1.354 1.368l-4.822-5.148Z"
        fill="currentColor"
        fillOpacity=".92"></path>
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  );
};

export { CloseIcon, SortIcon, FilterIcon, MagnifierIcon };
