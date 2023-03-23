import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import SearchBar from "./SearchBar";

import SearchDropdown from "./SearchDropdown";


const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [debouncedText, setDebouncedText] = useState("");
  const [open, setOpen] = useState(true);
 
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://www.omdbapi.com/", {
        params: {
          apikey: "f82024a5",
          s: debouncedText,
        },
      });
      // console.log("I am for state");
     
        
        
        if ( data.Response === "True") {
           setSearchResult(data.Search)
           setOpen(true)
        }
    };

    if (debouncedText) {
      fetchData()
    }
      // fetchData();
      
      // console.log("I am redered useEffect--)");
  
  }, [debouncedText]);
  // console.log("I am redered search");
  // console.log(searchResult);

  // console.log(searchResult);
  // console.log(open);

  return (
    <div>
      <SearchBar setDebouncedText={setDebouncedText} />

      {searchResult.length ? <SearchDropdown openStat={open} setOpen={setOpen} data={searchResult} /> : null}

      <Outlet></Outlet>
    </div>
  );
};

export default Search;
