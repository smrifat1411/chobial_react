import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    const dataFetch = async () => {
      const { data } = await axios.get("https://www.omdbapi.com/", {
        params: {
          apikey: "f82024a5",
          t: title,
        },
      });

      setMovie(data);
    };

    dataFetch();
  }, [title]);
  // console.log(movie);

  return (
    <div className="flex items-center gap-4 mt-4 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={movie.Poster}
        alt=""
      />

      <div className="flex flex-col justify-between p-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {movie.Title}
        </h5>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {movie.Year}
        </h5>
        <p
          className="mb-3 font-normal text-gray-700 
        dark:text-gray-400"
        >
          {movie.Plot}
        </p>
        <p
          className="mb-3 font-normal text-gray-700 
        dark:text-gray-400"
        >
          Actors: {movie.Actors}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
