import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import MovieModal from "../MovieModal/MovieModal";
import "./MovieGrid.css";
import axios from "axios";
import defaultPoster from "../../assets/default_poster.jpg";
import defaultImage from "../../assets/default_image.jpg";

// Fetching movie data from the TMDb API
// Looping through the fetched data and creating a MovieCard component for each individual movie
// Arranging all the MovieCard components nicely on the screen

const API_KEY = import.meta.env.VITE_API_KEY;

const MovieGrid = ({
  section_title,
  sortOption,
  submittedQuery,
  gridApiPage,
  setGridApiPage
}) => {
  const [movies, setMovies] = useState([]);
  const [noMoreMovies, setNoMoreMovies] = useState(false); // if no more movies able to fetch
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const loadMoreMovies = () => {
    setGridApiPage((prev) => prev + 1);
    console.log(gridApiPage);
  };

  //. fetch details when card clicked
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

  // close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  // stop body scrolling modal
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

  // when grid api changes this is called
  useEffect(() => {
    const fetchList = async (gridApiPage) => {
      // normal fetch
      let url = "";
      if (submittedQuery) {
        const formattedQuery = submittedQuery.replace(/ /g, '+');
        url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${formattedQuery}}&page=${gridApiPage}`;
      } else if (sortOption === "normal") {
        url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${gridApiPage}`;
      } else {
        // sort fetch,
        url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${gridApiPage}&sort_by=${sortOption}`;
      }
      try {
        console.log(url);
        const { data } = await axios.get(url);
        if (data.results.length === 0) {
          setNoMoreMovies(true);
        }

        if (gridApiPage === 1) {
          setMovies(data.results); // movies now gets set to data.results
        } else {
          setMovies((prevMovies) => [...prevMovies, ...data.results]);
        }

        console.log(data.results);
      } catch (err) {
        console.log("error fetching list:", err);
      }
    };

    fetchList(gridApiPage);
  }, [gridApiPage, sortOption, submittedQuery]);


  // clear movies when sortOption changes
  useEffect(() => {
    setGridApiPage(1);
    setMovies([]);
    setNoMoreMovies(false);
  }, [sortOption, submittedQuery]);

  return (
    <>
      {movies.length > 0 && (
        <section id="now-playing" className="grid-container">
          <h1 className="grid-title">{section_title}</h1>
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                img={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : defaultPoster
                }
                rating={movie.vote_average}
                onClick={() => handleCardClick(movie.id)}
              />
            ))}
          </div>
        </section>
      )}
      {noMoreMovies && (
        <div style={{ textAlign: "center", fontWeight: "bold", fontSize: "60px", margin: "50px" }}>
          No more movies
        </div>
      )}

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
      <button className="load-more" onClick={loadMoreMovies}>
        Load More
      </button>
    </>
  );
};

export default MovieGrid;
