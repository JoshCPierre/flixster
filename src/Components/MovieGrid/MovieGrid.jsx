import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieGrid.css";
import axios from "axios";

// Fetching movie data from the TMDb API
// Looping through the fetched data and creating a MovieCard component for each individual movie
// Arranging all the MovieCard components nicely on the screen

const API_KEY = import.meta.env.VITE_API_KEY;

const MovieGrid = ({ section_title, movie_category }) => {
  const [movies, setMovies] = useState([]);
  const [gridApiPage, setGridApiPage] = useState(1);

  const [noMoreMovies, setNoMoreMovies] = useState(false); // if no more movies able to fetch

  const loadMoreMovies = () => {
    setGridApiPage((prev) => prev + 1);
    console.log(gridApiPage);
  };

  // fetch list on mount - fetches movie on load
  useEffect(() => {
    const fetchList = async (gridApiPage) => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie_category}?api_key=${API_KEY}&page=${gridApiPage}`
        );

        if (data.results.length === 0) {
          setNoMoreMovies(true);
        }


        if (gridApiPage === 1) {
            setMovies(data.results); // movies now gets set to data.results
        }  else {
            setMovies((prevMovies) => [...prevMovies, ...data.results]);
        }

        console.log(data.results);
      } catch (err) {
        console.log("error fetching list:", err);
      }
    };

    fetchList(gridApiPage);
  }, [gridApiPage]);

  return (
    <>
     {movies.length > 0 &&
      <section className="section-container">
        <h1 className="section-title">{section_title}</h1>
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              rating={movie.vote_average}
            />
          ))}
        </div>
      </section>
      }
      {noMoreMovies && (
      <div style={{ textAlign: 'center',fontWeight: 'bold' }}>
        No more movies
      </div>
    )}
      
      <button className="load-more" onClick={loadMoreMovies}>
        Load More
      </button>
    </>
  );
};

export default MovieGrid;
