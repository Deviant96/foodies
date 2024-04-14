import React from 'react';
import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils'; 
import FoodList from '../FoodList';
import { FiltersProvider } from '../../contexts/FiltersContext';

const mockData = {
  meals: [
    { idMeal: '1', strMeal: 'Meal 1', strInstructions: 'Instructions for Meal 1' },
    { idMeal: '2', strMeal: 'Meal 2', strInstructions: 'Instructions for Meal 2' },
  ],
};

const renderFoodList = () => {
  return render (
      <FiltersProvider>
        <FoodList />
      </FiltersProvider>
  )
}

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockData),
    ok: true
  });
});

afterEach(() => {
  global.fetch.mockRestore();
});

test('fetches and displays food items', async () => {
    await act(async () => {
        renderFoodList();
    });
  
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian');
  
    expect(screen.getByText('Meal 1')).toBeInTheDocument();
    expect(screen.getByText('Meal 2')).toBeInTheDocument();
});

test('opens modal with additional details when food item is clicked', async () => {  
    await act(async () => {
      renderFoodList()
    });
  
    const foodItem = screen.getByText('Meal 1');
    await act(async () => {
      fireEvent.click(foodItem);
    });

    expect(screen.queryByText('Instructions for Meal 1')).toBeInTheDocument();

});