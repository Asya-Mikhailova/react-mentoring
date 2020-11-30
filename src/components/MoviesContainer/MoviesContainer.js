import React from "react";
import { Filter } from "../Filter/Filter";
import { MovieItem } from "../MovieItem/MovieItem";

import "./MoviesContainer.css";

export const MoviesContainer = () => {
  const movies = require("../../mock/movies.json");
  const data = movies[0].data;

  return (
    <div className='wrapper'>
      <Filter />
      <div className='line'> </div>
      <div className='movies-count'>
        <span>{data.length}</span> movies found
      </div>
      <div className='movies-container'>
        {data.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
