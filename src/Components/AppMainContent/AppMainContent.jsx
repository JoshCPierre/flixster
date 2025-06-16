import React from "react";
import "./AppMainContent.css";
import MovieList from "../MovieList/MovieList";
import MovieGrid from "../MovieGrid/MovieGrid";

const AppMainContent = ({
        sortOption,
        submittedQuery,
        gridApiPage,
        setGridApiPage,}) => {
  return (
    <div className="app-movie-list">
      <MovieGrid
        id="now-playing"
        section_title="Now Playing"
        sortOption={sortOption}
        submittedQuery={submittedQuery}
        gridApiPage={gridApiPage}
        setGridApiPage={setGridApiPage}
      ></MovieGrid>
      <MovieList
        section_title="Popular"
        id="popular"
        section_link="popular"
      ></MovieList>
      <MovieList
        section_title="Top Rated"
        id="top-rated"
        section_link="top_rated"
      ></MovieList>
      <MovieList
        section_title="Upcoming"
        id="upcoming"
        section_link="upcoming"
      ></MovieList>
    </div>
  );
};

export default AppMainContent;
