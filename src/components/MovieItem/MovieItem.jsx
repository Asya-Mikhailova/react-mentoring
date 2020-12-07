import React, { Fragment } from "react";
import "./MovieItem.css";
import PropTypes from "prop-types";

export const MovieItem = ({ movie }) => {
  const date = new Date(movie.release_date);
  const year = date.getFullYear();

  return (
    <Fragment>
      <div className='movieItem-container'>
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
