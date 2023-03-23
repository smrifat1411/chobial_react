import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Search from "./components/Search";


function App() {
  return (
    <div className="mx-auto max-w-[600px] my-10">
      <Link to="/">Home</Link>

      
      <Routes>
        <Route path="/" element={<Search />}>
   
          <Route path="/movie/:title" element={<MovieDetails />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
