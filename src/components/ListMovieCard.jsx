import React, { useState } from "react";
import { Link } from "react-router-dom";

const ListMovieCard = ({ movieData }) => {
  // console.log(movieData);
  return (
    <>
      <Link to={`movie/${movieData.Title}`}>
        <li className="flex items-center gap-3">
          <img className="max-h-[75px]" src={movieData.Poster} alt="" />
          <h1>{movieData.Title}</h1>
      
        </li>
      </Link>
    </>
  );
};

export default ListMovieCard;
