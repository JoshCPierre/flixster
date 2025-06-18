import React from "react";
import "./HeaderDropdown.css";

const HeaderDropdown = ({handleSortOption, sortOption}) => {
  return (
    <>
      <select className="dropdown-menu" onChange={handleSortOption} value={sortOption}>
        <option value="normal">Filter By</option>
        <option value="vote_average.desc">Vote Average</option>
        <option value="original_title.asc">Title A-Z</option>
        <option value="primary_release_date.desc">Release Date</option>
      </select>
    </>
  );
};

export default HeaderDropdown;
