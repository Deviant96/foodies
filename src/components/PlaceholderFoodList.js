import React from 'react';
import PlaceholderFoodCard from './PlaceholderFoodCard';

const PlaceholderFoodList = ({ total = 5 }) => {
  const items = Array.from({ length: total });

  return items.map((_, idx) => <PlaceholderFoodCard key={idx} />);
};

export default PlaceholderFoodList;
