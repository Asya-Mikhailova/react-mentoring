import React, { Fragment, useState } from "react";
import "./MovieItem.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../Modal/Modal";
import { genreNames } from "../../common/constants";

export const MovieItem = ({ movie }) => {
  const date = new Date(movie.release_date);
  const year = date.getFullYear();
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const showEditModal = () => {
    setShowEdit(true);
  };

  const closeEditModal = () => {
    setShowEdit(false);
  };

  const showDeleteModal = () => {
    setShowDelete(true);
  };

  const closeDeleteModal = () => {
    setShowDelete(false);
  };

  const openDropdown = () => {
    setDropdown(true);
  };

  const closeDropdown = () => {
    setDropdown(false);
  };

  const dropdownClass = dropdown ? "show" : "";

  return (
    <Fragment>
      <div className='movieItem-container'>
        <div className={`${dropdownClass} dropdown`}>
          <FontAwesomeIcon icon={faEllipsisV} onClick={openDropdown} />
          <div className={`${dropdownClass} dropdown-content`}>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={closeDropdown}
              className='dropdownClose'
            />
            <p className='dropdownItem' onClick={showEditModal}>
              Edit
            </p>
            <Modal show={showEdit}>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={closeEditModal}
                className='closeModal'
              />
              <h2>EDIT MOVIE</h2>
              <p className='movieIdTitle'>MOVIE ID</p>
              <p className='movieId'>{movie.id}</p>
              <br />
              <form>
                <label>
                  TITLE
                  <br />
                  <input
                    type='text'
                    name='title'
                    defaultValue={movie.title}
                  ></input>
                </label>
                <br />
                <label>
                  RELEASE DATE
                  <br />
                  <input
                    type='date'
                    name='date'
                    defaultValue={movie.release_date}
                  ></input>
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
                  <select defaultValue={movie.genres[0]}>
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
                  <input
                    type='text'
                    name='url'
                    placeholder='Overview text goes here'
                  ></input>
                </label>
                <br />
                <label>
                  RUNTIME
                  <br />
                  <input
                    type='text'
                    name='url'
                    placeholder='Runtime text goes here'
                  ></input>
                </label>
                <br />
                <div className='form-button-container'>
                  <button className='reset'>RESET</button>
                  <button className='submit'>SAVE</button>
                </div>
              </form>
            </Modal>

            <p className='dropdownItem' onClick={showDeleteModal}>
              Delete
            </p>
            <Modal show={showDelete}>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={closeDeleteModal}
                className='closeModal'
              />
              <h2 className='delete'>DELETE MOVIE</h2>
              <p className='message'>
                Are you sure you want to delete this movie?
              </p>
              <button className='confirm'>CONFIRM</button>
            </Modal>
          </div>
        </div>

        <img src={movie.poster_path} />
        <div className='description'>
          <div>
            <p className='title'>{movie.title}</p>
            <p className='genres'>{movie.genres.join(", ")}</p>
          </div>
          <div>
            <button className='year'>{year}</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object,
};
