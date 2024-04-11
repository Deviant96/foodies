import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainWrapper from './components/MainWrapper';
import FilterBar from './components/FilterBar';
import FoodList from './components/FoodList';
import { FiltersProvider } from './contexts/FiltersContext';

function App() {
  return (
    <div className="App">
      <FiltersProvider>
        <Header />
        <MainWrapper className="container mx-auto mt-2 mb-4 py-2 px-4 md:py-3">
          <FilterBar />
          <FoodList />
        </MainWrapper>
        <Footer />
      </FiltersProvider>
    </div>
  );
}

export default App;
