import React from 'react';

const PlaceholderFoodCard = () => {
  return (
    <div className="max-w-sm w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className={`w-full h-32 bg-gray-300 animate-pulse`}></div>
      <div className="p-4">
        <div className="h-4 bg-gray-400 rounded w-3/4 mb-4 animate-pulse"></div>
        <div className="h-4 bg-gray-400 rounded w-2/3 animate-pulse"></div>
      </div>
    </div>
  );
};

export default PlaceholderFoodCard;
