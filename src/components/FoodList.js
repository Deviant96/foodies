import React, { useState, useEffect } from 'react';
import PlaceholderFoodList from './PlaceholderFoodList';
import FoodCard from './FoodCard';
import FoodModal from './FoodModal';
import { fetchFoodItems } from '../services/api';
import { useFilters } from '../contexts/FiltersContext';

const FoodList = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFoodItem, setSelectedFoodItem] = useState(null);
  const { sortBy, selectedArea } = useFilters();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);

    const fetchData = async () => {
      setIsLoading(true);
      try {
        let area = 'Indian';
        if (selectedArea) {
          area = selectedArea;
        }
        const data = await fetchFoodItems(area);
        let sortedItems = data.meals;
        if (sortBy === 'asc') {
          sortedItems.sort((a, b) => a.strMeal.localeCompare(b.strMeal));
        } else if (sortBy === 'desc') {
          sortedItems.sort((a, b) => b.strMeal.localeCompare(a.strMeal));
        }
        setFoodItems(sortedItems);
      } catch (error) {
        setError('There is a trouble when getting food list');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [sortBy, selectedArea]);

  const handlePagination = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const handleFoodCardClick = foodItem => {
    setSelectedFoodItem(foodItem);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Calculate food items for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let poolItems = foodItems;
  let currentItems = poolItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="food-list">
      {error && (
        <div className="text-center text-red-500">
          <span className="font-bold">ERROR: </span>
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {isLoading ? (
          <PlaceholderFoodList />
        ) : (
          currentItems.map(item => <FoodCard key={item.idMeal} item={item} onClick={handleFoodCardClick} />)
        )}
      </div>

      <div className="pagination mt-8 text-left">
        {Array.from({ length: Math.ceil(foodItems.length / itemsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePagination(index + 1)}
            className={`mx-1 px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-[#f15700] text-white' : 'bg-gray-300 text-gray-700'}`}>
            {index + 1}
          </button>
        ))}
      </div>

      {modalOpen && selectedFoodItem && (
        <FoodModal id={selectedFoodItem.idMeal} isOpen={modalOpen} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default FoodList;
