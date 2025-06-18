import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({handleSearchChange, clearSearch, searchForMovies, searchQuery}) => {


  return (
    <>
      <div className="search-bar-container">
        <form className="search-bar">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" onClick={searchForMovies}>Search</button>
        </form>
        <button className="clear-button" onClick={clearSearch}>x</button>
      </div>
    </>
  );
};

export default SearchBar;
