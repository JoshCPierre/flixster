import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";
import axios from "axios";

// Fetching movie data from the TMDb API
// Looping through the fetched data and creating a MovieCard component for each individual movie
// Arranging all the MovieCard components nicely on the screen

const API_KEY = import.meta.env.VITE_API_KEY;

const MovieList = ({ section_title, api_link }) => {
  const [movies, setMovies] = useState([]);

  // fetch list on mount - fetches movie on load
  useEffect(() => {
    const fetchList = async () => {
      try {
        const { data } = await axios.get(api_link);
        setMovies(data.results); // movies now gets set to data.results
        console.log(data.results);
      } catch (err) {
        console.log("error fetching list:", err);
      }
    };

    fetchList();
  }, []);

  return (
    <section className="section-container">
    <h1 className="section-title">{section_title}</h1>
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            img={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            rating={movie.vote_average}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
