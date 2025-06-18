import React, { useState, useEffect } from "react";
import "./MovieModal.css";
import ModalInfo from "../ModalInfo/ModalInfo";
import defaultImage from "../../assets/default_image.jpg";
import axios from "axios";

const MovieModal = ({
  selectedMovie,
  show,
  onClose,
  title,
  runtime,
  backdrop_poster,
  date,
  genres,
  overview,
}) => {
  let finalBackground = "";

  const API_KEY = import.meta.env.VITE_API_KEY;
  const [videos, setVideos] = useState({ results: [] });

  // default image else mine
  if (backdrop_poster === defaultImage) {
    finalBackground = backdrop_poster;
  } else if (backdrop_poster.startsWith("/")) {
    finalBackground = `https://image.tmdb.org/t/p/original${backdrop_poster}`;
  }

  //   when modal shows fetch video
  useEffect(() => {
    const showModalTrailer = async (movie_id) => {
      // only if there is a trailer
      if (show && selectedMovie?.id) {
        try {
          // pass in movie_id
          const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}`
          );
          console.log(data);
          setVideos(data);
        } catch (err) {
          console.error("error fetching movie", err);
        }
      }
    };

    showModalTrailer(selectedMovie?.id);
  }, [show, selectedMovie?.id]);

  const trailer = videos.results.find(
    (video) => video.site === "YouTube" && video.type === "Trailer"
  );;
  const trailerUrl = trailer
    ? `https://www.youtube.com/embed/${trailer.key}`
    : null;

    // don't show modal
  if (!show) return null;

  return (
    <div className="movie-modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div
          className="modal-top-container"
          style={{
            backgroundImage: `url(${finalBackground})`,
          }}
        >
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-bottom-container">
          <h1>{title}</h1>
          {/* <button className="modal-close-button" onClick={onClose}>
            X
          </button> */}
          <section className="modal-info-container">
            <ModalInfo info_name="Runtime" info={runtime}></ModalInfo>
            <ModalInfo info_name="Release Date" info={date}></ModalInfo>
            <ModalInfo info_name="Genres" info={genres}></ModalInfo>
          </section>
          <div className="modal-body">
            {!title ? <p>loading...</p> : <p>{overview}</p>}
            <div className="movie-trailer-container">
              <iframe className="trailer-iframe" src={trailerUrl}></iframe>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
