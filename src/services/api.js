const fetchFoodItem = async id => {
  const apiUrl = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch food item');
  }
  return response.json();
};

const fetchFoodItems = async () => {
  const apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian';
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch food items');
  }
  return response.json();
};

export { fetchFoodItem, fetchFoodItems };
