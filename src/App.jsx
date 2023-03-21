import React from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <div className="mx-auto max-w-[600px] my-10">
      <Routes>
        <Route path="/" element={<Search />}></Route>
      </Routes>
    </div>
  );
}

export default App;
