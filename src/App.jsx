import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import NotFoundPage from "./components/NotFoundPage";
import Search from "./components/Search";
import logo from './img/logo_chobial.png'


function App() {
  return (
    <div id="Main" className="mx-auto max-w-[600px] my-10 relative">
      <Link to="/" className="w-full flex justify-center mb-5">
        <img className="max-w-[180px] max-h-[40px] text-center" src={logo} alt="" />
      </Link>

      <Routes>
        <Route path="/" element={<Search />}>
          <Route path="/movie/:title" element={<MovieDetails />}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </div>
  );
}

export default App;
