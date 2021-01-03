import React, { useState } from "react";
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
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [modalContent, setModalContent] = useState("");

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
    <>
      <div className='movieItem-container'>
        <div className={`${dropdownClass} dropdown`}>
          <FontAwesomeIcon icon={faEllipsisV} onClick={openDropdown} />
          <div className={`${dropdownClass} dropdown-content`}>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={closeDropdown}
              className='dropdownClose'
            />
            <p className='dropdownItem' onClick={setModalContent("edit")}>
              Edit
            </p>
            <p className='dropdownItem' onClick={setModalContent("delete")}>
              Delete
            </p>
            <Modal>
              {modalContent === "edit" && (
                <EditModalContent movie={movie}>
                  <FontAwesomeIcon
                    icon={faTimes}
                    onClick={setModalContent("")}
                    className='closeModal'
                  />
                </EditModalContent>
              )}
              {modalContent === "delete" && (
                <DeleteModalContent>
                  <FontAwesomeIcon
                    icon={faTimes}
                    onClick={setModalContent("")}
                    className='closeModal'
                  />
                </DeleteModalContent>
              )}
            </Modal>
            {/* <p className='dropdownItem' onClick={showEditModal}>
              Edit
            </p>
            <Modal show={showEdit}>
              <EditModalContent movie={movie}>
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={closeEditModal}
                  className='closeModal'
                />
              </EditModalContent>
            </Modal>

            <p className='dropdownItem' onClick={showDeleteModal}>
              Delete
            </p>
            <Modal show={showDelete}>
              <DeleteModalContent>
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={closeDeleteModal}
                  className='closeModal'
                />
              </DeleteModalContent>
            </Modal>*/}
          </div>
        </div>

        <img src={movie.poster_path} alt='moviePoster' />
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
    </>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object,
};
