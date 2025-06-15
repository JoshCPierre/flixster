import React from "react";
import "./Header.css";
import BottomHeader from "./BottomHeader";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <div className="header-container">
      <TopHeader />
      <BottomHeader />
    </div>
  );
};

export default Header;
