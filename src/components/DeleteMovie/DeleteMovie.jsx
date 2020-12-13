import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { genreNames } from "../../common/constants";

import "./DeleteMovie.css";

export const DeleteMovie = ({ show, handleClose, movie }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className='modal-main'>
        <FontAwesomeIcon icon={faTimes} onClick={handleClose} />
        <h2 className='delete'>DELETE MOVIE</h2>
        <p className='message'>Are you sure you want to delete this movie?</p>
        <button className='confirm'>CONFIRM</button>
      </div>
    </div>
  );
};
