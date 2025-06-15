import React from "react";
import "./HeaderDropdown.css";

const HeaderDropdown = () => {
  return (
    <>
      {" "}
      <select className="dropdown-menu">
        <option value="">Filter By</option>
        <option value="">Vote Average</option>
        <option value="">Title A-Z</option>
        <option value="">Release Date</option>
      </select>
    </>
  );
};

export default HeaderDropdown;
