import React from 'react';
import { generateRandomStars } from '../utils/utils';

const FoodCard = ({ item, onClick }) => {
  return (
    <div
      key={item.idMeal}
      className="p-1 rounded cursor-pointer select-none transition-transform hover:scale-[.9]"
      onClick={() => onClick(item)}>
      <img src={item.strMealThumb} alt={item.strMeal} className="w-full h-32 object-cover mb-2 rounded-2xl" />
      <h3 className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap px-2 leading-none">
        {item.strMeal}
      </h3>
      <p className="flex flex-row items-center gap-1 px-2 leading-none text-sm font-bold">
        <span className="text-2xl text-green-700 leading-none">✪</span> {generateRandomStars()}
      </p>
    </div>
  );
};

export default FoodCard;
