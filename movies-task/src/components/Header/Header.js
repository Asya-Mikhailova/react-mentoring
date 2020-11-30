import React from "react";

import "./Header.css";

export const Header = () => {
  return (
    <div className='wrapper-header'>
      <div className='header-top'>
        <p className='logo'>
          <span className='accent'>netflix</span>roulette
        </p>
        <button className='header-top-button'>+ ADD MOVIE</button>
      </div>
      <h1>FIND YOUR MOVIE</h1>
      <div className='header-bottom'>
        <input type='text' placeholder='What do you want to watch?' />
        <button className='search-button'>SEARCH</button>
      </div>
    </div>
  );
};
