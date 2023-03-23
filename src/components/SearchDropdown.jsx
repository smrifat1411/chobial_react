import React, { useEffect, useState } from "react";
import ListMovieCard from "./ListMovieCard";

const SearchDropdown = ({ data, openStat, setOpen }) => {
  // console.log("dropdown I am");

  // console.log("dropdown");

  const newData = data.slice(0, 5);
  return (
    <>
      {openStat ? (
        <div
          className=" flex flex-col gap-6 justify-center mt-2"
          onClick={(e) => {
            setOpen(false);
          }}
        >
          {newData.map((movie) => {
            return (
              <div key={movie.imdbID} onClick={()=>(console.log("I am clicked"))}>
                <ListMovieCard  movieData={movie} />
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default SearchDropdown;
