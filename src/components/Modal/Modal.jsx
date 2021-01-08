import React from "react";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const Modal = ({ show, onClose, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <>
      <div className={showHideClassName}>
        <div className="modal-main">
          <FontAwesomeIcon
            icon={faTimes}
            onClick={onClose}
            className="closeModal"
          />
          {children}
        </div>
      </div>
    </>
  );
};
