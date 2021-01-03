import React from "react";

export const DeleteModalContent = ({ children }) => {
  return (
    <>
      {children}
      <h2 className='delete'>DELETE MOVIE</h2>
      <p className='message'>Are you sure you want to delete this movie?</p>
      <button className='confirm'>CONFIRM</button>
    </>
  );
};
