import React, { useState } from "react";
import "./MovieCard.css";
import heartIcon from "../../assets/heart-white.svg";
import heartFull from "../../assets/heart-solid.svg"

const MovieCard = ({ title, img, rating, onClick }) => {

  const [favorite,setFavorite] = useState(false);
  const [watched, setWatched] = useState(false);

  const handleFavorite = (event) => {
    event.stopPropagation();  // movie card does not happen
    setFavorite(prevFavorite => !prevFavorite);
  }

  const handleWatched = (event) => {
    event.stopPropagation();  
    setWatched(prevWatched => !prevWatched);
  }

  return (
    <div className="movie-card-container" onClick={onClick}>
      <img className="movie-image" src={img} alt={`Image for ${title}`}/>
      <h4 className="movie-title">{title}</h4>
      <p className="movie-rating">Rating: {rating}</p>
      <div className="liked-watched-container">
        <img src={favorite === false ? heartIcon : heartFull} className="movie-favorite" alt={title} onClick={handleFavorite}/>
        <button className="movie-watched" style={{
            backgroundColor: watched ? "#555" : "",
            color: watched ? "#fff" : "", 
          }} onClick={handleWatched}>Watched</button>
      </div>
    </div>
  );
};

export default MovieCard;
