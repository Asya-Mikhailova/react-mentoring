import React, { Fragment } from "react";
import "./Filter.css";

export const Filter = () => {
  return (
    <Fragment>
      <div className='container'>
        <ul className='filter'>
          <li>ALL</li>
          <li>DOCUMENTARY</li>
          <li>COMEDY</li>
          <li>HORROR</li>
          <li>CRIME</li>
        </ul>
        <div className='sort'>
          <p className='different'>SORT BY</p>
          <p className='release'>RELEASE DATE</p>
        </div>
      </div>
    </Fragment>
  );
};
