import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { genreNames } from "../../common/constants";

import { Modal } from "../Modal/Modal";
import "./Header.css";

export const Header = () => {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };

  const closeModal = () => {
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
        <Modal show={show}>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={closeModal}
            className='closeModal'
          />
          <h2>ADD MOVIE</h2>
          <form>
            <label>
              TITLE
              <br />
              <input
                type='text'
                name='title'
                placeholder='Movie title here'
              ></input>
            </label>
            <br />
            <label>
              RELEASE DATE
              <br />
              <input type='date' name='date' placeholder='Select Date'></input>
            </label>
            <br />
            <label>
              MOVIE URL
              <br />
              <input
                type='text'
                name='url'
                placeholder='Movie URL here'
              ></input>
            </label>
            <br />
            <label>
              GENRE
              <br />
              <select defaultValue=''>
                <option hidden value=''>
                  Select Genre
                </option>
                <option value={genreNames.COMEDY}>Comedy</option>
                <option value={genreNames.CRIME}>Crime</option>
                <option value={genreNames.DOCUMENTARY}>Documentary</option>
                <option value={genreNames.HORROR}>Horror</option>
              </select>
            </label>
            <br />
            <label>
              OVERVIEW
              <br />
              <input type='text' name='url' placeholder='Overview here'></input>
            </label>
            <br />
            <label>
              RUNTIME
              <br />
              <input type='text' name='url' placeholder='Runtime here'></input>
            </label>
            <br />
            <div className='form-button-container'>
              <button className='reset'>RESET</button>
              <button className='submit'>SUBMIT</button>
            </div>
          </form>
        </Modal>
      </div>
      <h1>FIND YOUR MOVIE</h1>
      <div className='header-bottom'>
        <input type='text' placeholder='What do you want to watch?' />
        <button className='search-button'>SEARCH</button>
      </div>
    </div>
  );
};
