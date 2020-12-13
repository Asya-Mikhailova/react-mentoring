import React, { useState } from "react";
import { AddMovie } from "../AddMovie/AddMovie";
import { DeleteMovie } from "../DeleteMovie/DeleteMovie";

import "./Header.css";

export const Header = () => {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <div className='wrapper-header'>
      <div className='header-top'>
        <p className='logo'>
          <span className='accent'>netflix</span>roulette
        </p>
        <button className='header-top-button' onClick={showModal}>
          + ADD MOVIE
        </button>
        <AddMovie show={show} handleClose={hideModal} />
      </div>
      <h1>FIND YOUR MOVIE</h1>
      <div className='header-bottom'>
        <input type='text' placeholder='What do you want to watch?' />
        <button className='search-button'>SEARCH</button>
      </div>
    </div>
  );
};
