import React, { useState, useMemo } from "react";
import "./MovieItem.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../Modal/Modal";
import { EditModalContent } from "../EditModalContent/EditModalContent";
import { DeleteModalContent } from "../DeleteModalContent/DeleteModalContent";

export const MovieItem = ({ movie }) => {
  const date = new Date(movie.release_date);
  const year = date.getFullYear();
  const [dropdown, setDropdown] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const dropdownClass = useMemo(() => (dropdown ? "show" : ""), [dropdown]);

  return (
    <>
      <div className="movieItem-container">
        <div className={`${dropdownClass} dropdown`}>
          <FontAwesomeIcon
            icon={faEllipsisV}
            onClick={() => setDropdown(true)}
          />
          <div className={`${dropdownClass} dropdown-content`}>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => setDropdown(false)}
              className="dropdownClose"
            />
            <p className="dropdownItem" onClick={() => setModalContent("edit")}>
              Edit
            </p>
            <p
              className="dropdownItem"
              onClick={() => setModalContent("delete")}
            >
              Delete
            </p>
            <Modal show={!!modalContent} onClose={() => setModalContent("")}>
              {modalContent === "edit" && (
                <EditModalContent movie={movie}></EditModalContent>
              )}
              {modalContent === "delete" && <DeleteModalContent />}
            </Modal>
          </div>
        </div>

        <img src={movie.poster_path} alt="moviePoster" />
        <div className="description">
          <div>
            <p className="title">{movie.title}</p>
            <p className="genres">{movie.genres.join(", ")}</p>
          </div>
          <div>
            <button className="year">{year}</button>
          </div>
        </div>
      </div>
    </>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object
};
