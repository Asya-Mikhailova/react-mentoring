import React, { useState } from "react";
import { MovieItem } from "../MovieItem/MovieItem";
import { genreNames } from "../../common/constants";

import "./MoviesContainer.css";

export const MoviesContainer = () => {
  const data = require("../../mock/movies.json")[0].data;
  const [movies, setMovies] = useState(data);

  const sortByDate = () =>
    setMovies(
      movies
        .slice()
        .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
    );

  return (
    <div className="wrapper">
      <div className="container">
        <ul className="filter">
          <li>{genreNames.ALL}</li>
          <li>{genreNames.DOCUMENTARY}</li>
          <li>{genreNames.COMEDY}</li>
          <li>{genreNames.HORROR}</li>
          <li>{genreNames.CRIME}</li>
        </ul>
        <div className="sort">
          <p className="different">SORT BY</p>
          <p className="release" onClick={sortByDate}>
            RELEASE DATE
          </p>
        </div>
      </div>
      <div className="line"> </div>
      <div className="movies-count">
        <span>{movies.length}</span> movies found
      </div>
      <div className="movies-container">
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
