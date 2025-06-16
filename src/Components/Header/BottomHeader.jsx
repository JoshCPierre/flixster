import React from "react";
import "./BottomHeader.css";
import SearchBar from "../SearchBar/SearchBar";
import HeaderDropdown from "../HeaderDropdown/HeaderDropdown";

const BottomHeader = ({handleSearchChange, clearSearch, searchForMovies, searchQuery, handleSortOption, sortOption}) => {
  return (
    <div className="bottom-header-container">
      <SearchBar handleSearchChange={handleSearchChange} clearSearch={clearSearch} searchForMovies={searchForMovies} searchQuery={searchQuery}></SearchBar>
      <HeaderDropdown handleSortOption={handleSortOption} sortOption={sortOption}></HeaderDropdown>
    </div>
  );
};

export default BottomHeader;
