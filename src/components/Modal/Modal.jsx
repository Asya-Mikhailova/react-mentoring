import React from "react";
import "./Modal.css";

export const Modal = ({ show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className='modal-main'>{children}</div>
    </div>
  );
};
