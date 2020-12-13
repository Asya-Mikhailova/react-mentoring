import React, { Fragment, useState } from "react";
import "./MovieItem.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { EditMovie } from "../EditMovie/EditMovie";

export const MovieItem = ({ movie }) => {
  const date = new Date(movie.release_date);
  const year = date.getFullYear();
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <Fragment>
      <div className='movieItem-container'>
        <FontAwesomeIcon icon={faEllipsisV} onClick={showModal} />
        <EditMovie show={show} handleClose={closeModal} movie={movie} />
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
