import React from "react";
import ListMovieCard from "./ListMovieCard";

const SearchDropdown = ({ data, openStat, setOpen }) => {
  // console.log("dropdown I am");

  // console.log("dropdown");

  const newData = data.slice(0, 5);
  return (
    <div id="dropdown" className="absolute z-10">
      {openStat ? (
        <div
          className=" flex flex-col gap-6 justify-center mt-2 bg-white"
          onClick={(e) => {
            setOpen(false);
          }}
        >
          {newData.map((movie) => {
            return (
              <div key={movie.imdbID} className="shadow-lg">
                <ListMovieCard  movieData={movie} />
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default SearchDropdown;
