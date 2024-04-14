import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils'; 
import FilterBar from '../FilterBar';
import { FiltersProvider, useFilters } from '../../contexts/FiltersContext';
import FoodList from '../FoodList';

const mockData = {
  meals: [
    { idMeal: '1', strMeal: 'Meal 1', strInstructions: 'Instructions for Meal 1' },
    { idMeal: '2', strMeal: 'Meal 2', strInstructions: 'Instructions for Meal 2' },
  ],
};

const renderFilterBar = () => {
  return render (
      <FiltersProvider>
        <FilterBar />
      </FiltersProvider>
  )
}

// Custom component to consume FiltersContext
const MockApp = () => {
  const { selectedArea } = useFilters();
  return (
    <div>
      <FilterBar />
      <div data-testid="selected-area">{selectedArea}</div>
    </div>
  );
};

describe('Filters Component', () => {
  test('render mandatory filter and sort buttons', () => {
    const { getByText } = renderFilterBar();

    const filterButton = getByText('Filter');
    const sortButton = getByText('Sort', { exact:false });

    expect(filterButton).toBeInTheDocument();
    expect(sortButton).toBeInTheDocument();
  });
  
  test('clicking on filter button toggles dropdown', () => {
    const { getByRole, getByText, queryByText } = renderFilterBar();

    const filterButton = getByText('Filter');
    fireEvent.click(filterButton);
    const dropdownItem = queryByText('Filter By Area');
    expect(dropdownItem).toBeInTheDocument();

    const italianLabel = getByRole('radio', { name: 'Italian' } );
    expect(italianLabel).toBeInTheDocument();
  }); 

  test('applies area filter', async () => {
    const { getByTestId, getByText, getByRole } = render(
      <FiltersProvider>
        <MockApp />
      </FiltersProvider>
    );

    fireEvent.click(getByText('Filter'));

    await waitFor(() => expect(getByText('Filter By Area')).toBeInTheDocument());

    const italianLabel = getByRole('radio', { name: 'Italian' } );
    fireEvent.click(italianLabel);

    await waitFor(() => expect(getByText('Italian')).toBeInTheDocument());

    fireEvent.click(getByText('Apply'));

    const selectedAreaElement = getByTestId('selected-area');
    expect(selectedAreaElement.textContent).toBe('Italian');

    fireEvent.click(getByText('Clear'));
    expect(selectedAreaElement.textContent).toBe('');
  }); 

  test('sort button will sort food list', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
      ok: true
    });

    await act(async () => {
      render (
        <FiltersProvider>
          <FilterBar />
          <FoodList />
        </FiltersProvider>
      )
    });
  
    const sortButton = screen.getByText('Sort', { exact: false });
    expect(sortButton).toBeInTheDocument();
  
    await act(async () => {
      fireEvent.click(sortButton);
    })
  
    const foodItems = screen.queryAllByText(/Meal \d/);
    const foodNames = foodItems.map(item => item.textContent);
  
    const sortedFoodNames = mockData.meals.map(meal => meal.strMeal).sort((a, b) => b.localeCompare(a));
    expect(foodNames).toEqual(sortedFoodNames);

    global.fetch.mockRestore();
  });
});