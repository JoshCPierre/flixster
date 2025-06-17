import React, { useEffect } from "react";
import "./AppMainContent.css";
import MovieList from "../MovieList/MovieList";
import MovieGrid from "../MovieGrid/MovieGrid";

const AppMainContent = ({
  sortOption,
  submittedQuery,
  gridApiPage,
  setGridApiPage,
  setShowFavoriteModal,
  setShowWatchedModal,
  setFavoriteMovies,
  setWatchedMovies,
  displayLikedWatchedContainer
}) => {
  return (
    <div className="app-movie-list">
      <MovieGrid
        id="now-playing"
        section_title="Now Playing"
        sortOption={sortOption}
        submittedQuery={submittedQuery}
        gridApiPage={gridApiPage}
        setGridApiPage={setGridApiPage}
        setShowFavoriteModal={setShowFavoriteModal}
        setShowWatchedModal={setShowWatchedModal}
        setFavoriteMovies={setFavoriteMovies}
        setWatchedMovies={setWatchedMovies}
          displayLikedWatchedContainer={true}

      ></MovieGrid>
      <MovieList
        section_title="Popular"
        id="popular"
        section_link="popular"
        setShowFavoriteModal={setShowFavoriteModal}
        setShowWatchedModal={setShowWatchedModal}
        setFavoriteMovies={setFavoriteMovies}
        setWatchedMovies={setWatchedMovies}
          displayLikedWatchedContainer={true}

      ></MovieList>
      <MovieList
        section_title="Top Rated"
        id="top-rated"
        section_link="top_rated"
        setShowFavoriteModal={setShowFavoriteModal}
        setShowWatchedModal={setShowWatchedModal}
        setFavoriteMovies={setFavoriteMovies}
        setWatchedMovies={setWatchedMovies}
          displayLikedWatchedContainer={true}

      ></MovieList>
      <MovieList
        section_title="Upcoming"
        id="upcoming"
        section_link="upcoming"
        setShowFavoriteModal={setShowFavoriteModal}
        setShowWatchedModal={setShowWatchedModal}
        setFavoriteMovies={setFavoriteMovies}
        setWatchedMovies={setWatchedMovies}
          displayLikedWatchedContainer={true}

      ></MovieList>
    </div>
  );
};

export default AppMainContent;
