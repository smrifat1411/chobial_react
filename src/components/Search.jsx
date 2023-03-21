import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SearchDropdown from "./SearchDropdown";

const Search = () => {
  // const [searchTerm, setSearchTerm] = useState("")

  const [searchResult, setSearchResult] = useState([]);
  const [debouncedText, setDebouncedText] = useState("");
  //   const [hasresult, setHasresult] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://www.omdbapi.com/", {
        params: {
          apikey: "f82024a5",
          s: debouncedText,
        },
      });
      setSearchResult(data);
    };

    if (debouncedText) {
      fetchData();
    }
  }, [debouncedText]);

  console.log("rendered search component");

  return (
    <div>
      <SearchBar setDebouncedText={setDebouncedText} />
      <SearchDropdown />
    </div>
  );
};

export default Search;
