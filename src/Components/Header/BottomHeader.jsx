import React from "react";
import "./BottomHeader.css";
import SearchBar from "../SearchBar/SearchBar";
import HeaderDropdown from "../HeaderDropdown/HeaderDropdown";

const BottomHeader = () => {
  return (
    <div className="bottom-header-container">
      <SearchBar></SearchBar>
      <HeaderDropdown></HeaderDropdown>
    </div>
  );
};

export default BottomHeader;
