import React, { useEffect, useState } from 'react';
import PlaceholderFoodCard from './PlaceholderFoodCard';
import { CloseIcon } from './Icons';
import { fetchFoodItem } from '../services/api';

const FoodModal = ({ id, onClose, isOpen }) => {
  const [foodItem, setFoodItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleClickModalOverlay = () => {
    onClose(isOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchFoodItem(id);
        setFoodItem(data.meals[0]);
      } catch (error) {
        setError('There is a trouble when getting food list');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" id="modal">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Modal overlay. When clicked, it closes the modal */}
        <div onClick={handleClickModalOverlay} className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div className="inline-block align-bottom w-full bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          {error ? (
            <div className="text-center text-red-500">
              <span className="font-bold">ERROR: </span>
              {error}
            </div>
          ) : isLoading ? (
            <div className="m-6">
              <PlaceholderFoodCard height="32" />
            </div>
          ) : (
            <>
              <img
                className="h-full w-full max-h-52 object-cover"
                src={foodItem?.strMealThumb}
                alt={foodItem?.strMeal}
              />

              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">
                      {foodItem?.strMeal}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{foodItem?.strTags}</p>
                      <p className="mt-3 text-base text-gray-500 whitespace-pre-line">{foodItem?.strInstructions}</p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 p-2">
                    <button type="button" className="bg-gray-200 rounded-full p-2 hover:bg-gray-300" onClick={onClose}>
                      <CloseIcon />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodModal;
