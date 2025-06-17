import React, { useEffect } from "react";
import "./FavoriteWatchedModal.css";
import MovieCard from "../MovieCard/MovieCard";

const FavoriteWatchedModal = ({
  watchedMovies,
  favoriteMovies,
  showFavoriteModal,
  showWatchedModal,
  setShowFavoriteModal,
  setShowWatchedModal,
  setWatchedMovies,
  setFavoriteMovies
}) => {

  if (!showFavoriteModal && !showWatchedModal) return null;

  return (
    <div className="favorite-watched-movie-modal">
      <div className="favorite-watched-modal-content">
        <h2>{showFavoriteModal ? "Favorite Movies" : "Watched Movies"}</h2>
        <div className="favorite-watched-modal-grid">
            
          {showFavoriteModal
            ? favoriteMovies.map((movie) => (
                <MovieCard
                  movie_data={movie}
                  key={movie.id}
                  title={movie.title}
                  img={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : defaultPoster
                  }
                  rating={movie.vote_average}
                  onClick={() => handleCardClick(movie.id)}
                  setShowFavoriteModal={setShowFavoriteModal}
                  setShowWatchedModal={setShowWatchedModal}
                  setWatchedMovies={setWatchedMovies}
                  setFavoriteMovies={setFavoriteMovies}
                />
              ))
            : watchedMovies.map((movie) => (
                <MovieCard
                  movie_data={movie}
                  key={movie.id}
                  title={movie.title}
                  img={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : defaultPoster
                  }
                  rating={movie.vote_average}
                  onClick={() => handleCardClick(movie.id)}
                  setShowFavoriteModal={setShowFavoriteModal}
                  setShowWatchedModal={setShowWatchedModal}
                  setWatchedMovies={setWatchedMovies}
                  setFavoriteMovies={setFavoriteMovies}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteWatchedModal;
