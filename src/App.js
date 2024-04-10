import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainWrapper from './components/MainWrapper';

function App() {
  return (
    <div className="App">
      <Header />
      <MainWrapper className="container mx-auto mt-2 mb-4 py-2 px-4 md:py-3">
        Halo
      </MainWrapper>
      <Footer />
    </div>
  );
}

export default App;
