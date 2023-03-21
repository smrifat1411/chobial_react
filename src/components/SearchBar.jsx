import React, { useEffect, useState } from "react";

const SearchBar = ({setDebouncedText}) => {
  const [searchTerm, setSearchTerm] = useState("");


// Debounce function  

  useEffect(() => {
    const timeId = setTimeout(() => {
      setDebouncedText(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timeId);
    };
  }, [searchTerm,setDebouncedText]);

  

  return (
    <div>
      <input
      onSubmit={e=>e.preventDefault()}
        type="text"
        className="border-2 border-green-600"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
