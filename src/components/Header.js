import React from 'react';
import { MagnifierIcon } from './Icons';
import { LogoColored } from './Logo';

const Header = () => {
  return (
    <header className="bg-white shadow-md shadow-slate-200/50 text-white">
      <div className="container flex justify-between items-center py-2 px-4 sm:mx-auto md:py-3 md:px-4">
        <div className="logo flex flex-row gap-2 items-center flex-nowrap whitespace-nowrap text-[#f15700] font-bold uppercase tracking-wider text-md md:text-xl">
          <LogoColored />
          <h1>Swiggy</h1>
        </div>
        <div className="max-w-48 sm:max-w-full">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

const SearchBar = () => {
  return (
    <div className="search-bar relative text-gray-500">
      <input
        type="text"
        placeholder="Search for restaurant and food"
        className="p-2 pe-10 w-full rounded-lg bg-gray-200 placeholder:text-gray-500  sm:pe-12 md:w-80"
      />
      <span className="absolute right-1 top-2/4 -translate-y-2/4 px-1 text-gray-600 sm:right-0 sm:-translate-x-2/4">
        <MagnifierIcon />
      </span>
    </div>
  );
};

export default Header;
export { SearchBar };
