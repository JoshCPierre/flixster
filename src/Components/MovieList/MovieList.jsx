import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import MovieModal from "../MovieModal/MovieModal";
import "./MovieList.css";
import axios from "axios";
import defaultPoster from "../../assets/default_poster.jpg";
import defaultImage from "../../assets/default_image.jpg";

// Fetching movie data from the TMDb API
// Looping through the fetched data and creating a MovieCard component for each individual movie
// Arranging all the MovieCard components nicely on the screen

const API_KEY = import.meta.env.VITE_API_KEY;

const MovieList = ({
  section_title,
  section_link,
  id,
  setShowFavoriteModal,
  setShowWatchedModal,
  setFavoriteMovies,
  setWatchedMovies
}) => {
  const [movies, setMovies] = useState([]);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [noMoreMovies, setNoMoreMovies] = useState(false); // if no more movies able to fetch
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [listApiPage, setListApiPage] = useState(1);

  const [currentChunkIndex, setCurrentChunkIndex] = useState(0);

  // modal pop up
  const handleCardClick = async (movie_id) => {
    setShowModal(true);
    setSelectedMovie(null); // trigger a loading state
    try {
      // pass in movie_id
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`
      );
      console.log(data);
      setSelectedMovie(data);
    } catch (err) {
      console.error("error fetching movie", err);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  // modal disallow scrolling
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      // when modal closed allow it to scroll
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  // fetch list on mount - fetches movie on load
  useEffect(() => {
    const fetchList = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${section_link}?api_key=${API_KEY}&page=${listApiPage}`
        );
        setMovies(data.results); // movies now gets set to data.results
        setCurrentChunkIndex(0);
        console.log(data.results);
      } catch (err) {
        console.log("error fetching list:", err);
      }
    };

    fetchList();
  }, [listApiPage]);

  // right arrow
  const loadMoreListMovies = () => {
    if (currentChunkIndex < 3) {
      setCurrentChunkIndex((prevIndex) => prevIndex + 1);
    } else {
      // chunk is 4 so must set new page
      setListApiPage((prevPage) => prevPage + 1);
    }
  };

  // left arrow
  const loadLessListMovies = () => {
    if (currentChunkIndex > 0) {
      setCurrentChunkIndex((prevIndex) => prevIndex - 1);
    } else if (listApiPage > 1) {
      // chunk is 0, go back a page
      setListApiPage((prevPage) => prevPage - 1);
      setCurrentChunkIndex(3);
    }
  };

  // set current 5 movies
  useEffect(() => {
    const start = currentChunkIndex * 5;
    const end = start + 5;
    setCurrentMovies(movies.slice(start, end));
  }, [movies, currentChunkIndex]);

  return (
    <section id={id} className="section-container">
      <div className="section-header">
        <span className="arrows left" onClick={loadLessListMovies}>
          {"<"}
        </span>
        <h1 className="section-title">{section_title}</h1>
        <span className="arrows right" onClick={loadMoreListMovies}>
          {">"}
        </span>
      </div>
      <div className="movies-list">
        {currentMovies.map((movie) => (
          <MovieCard
            movie={movie}
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
      <MovieModal
        selectedMovie={selectedMovie}
        show={showModal}
        onClose={handleCloseModal}
        title={selectedMovie?.title || ""}
        runtime={selectedMovie?.runtime || ""}
        backdrop_poster={
          selectedMovie?.backdrop_path
            ? selectedMovie.backdrop_path
            : defaultImage
        }
        date={selectedMovie?.release_date || ""}
        genres={
          selectedMovie?.genres?.map((genre) => genre.name).join(", ") || ""
        }
        overview={selectedMovie?.overview || ""}
      ></MovieModal>
    </section>
  );
};

export default MovieList;
