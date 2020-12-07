import React, { Fragment } from "react";
import "./Filter.css";

import { genreNames } from "../../common/constants";

export const Filter = () => {
  return (
    <Fragment>
      <div className='container'>
        <ul className='filter'>
          <li>{genreNames.ALL}</li>
          <li>{genreNames.DOCUMENTARY}</li>
          <li>{genreNames.COMEDY}</li>
          <li>{genreNames.HORROR}</li>
          <li>{genreNames.CRIME}</li>
        </ul>
        <div className='sort'>
          <p className='different'>SORT BY</p>
          <p className='release'>RELEASE DATE</p>
        </div>
      </div>
    </Fragment>
  );
};
