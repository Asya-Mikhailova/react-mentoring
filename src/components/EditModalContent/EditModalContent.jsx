import React from "react";
import { genreNames } from "../../common/constants";

export const EditModalContent = ({ movie, children }) => {
  return (
    <>
      {children}
      <h2>EDIT MOVIE</h2>
      <p className='movieIdTitle'>MOVIE ID</p>
      <p className='movieId'>{movie.id}</p>
      <br />
      <form>
        <label>
          TITLE
          <br />
          <input type='text' name='title' defaultValue={movie.title}></input>
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
          <input type='text' name='url' placeholder='Movie URL here'></input>
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
    </>
  );
};
