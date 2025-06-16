import React from "react";
import "./Header.css";
import BottomHeader from "./BottomHeader";
import TopHeader from "./TopHeader";

const Header = ({handleSearchChange, clearSearch, searchForMovies, searchQuery, handleSortOption, sortOption}) => {
  return (
    <div className="header-container">
      <TopHeader />
      <BottomHeader handleSearchChange={handleSearchChange} clearSearch={clearSearch} searchForMovies={searchForMovies} searchQuery={searchQuery} handleSortOption={handleSortOption} sortOption={sortOption}/>
    </div>
  );
};

export default Header;
