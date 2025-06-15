import React from "react";
import "./MovieCard.css";
import heartIcon from "../../assets/heart-regular.svg";

// url(&quot;https://image.tmdb.org/t/p/original//7HqLLVjdjhXS0Qoz1SgZofhkIpE.jpg

const MovieCard = ({ title, img, rating }) => {
  return (
    <div className="movie-card-container">
      <img className="movie-image" src={img} />
      <h4 className="movie-title">{title}</h4>
      <p className="movie-rating">Rating: {rating}</p>
      <div className="liked-watched-container">
        <img src={heartIcon} className="movie-favorite" alt={title}/>
        <button className="movie-watched">Watched</button>
      </div>
    </div>
  );
};

export default MovieCard;
