import React from "react";

const SearcItem = ({id,movie}) => {
  return (
    <li key={id} className="flex items-center gap-3">
      <img className="max-h-[75px]" src={movie.Poster} alt="" />
      <h1>{movie.Title}</h1>
    </li>
  );
};

export default SearcItem;
