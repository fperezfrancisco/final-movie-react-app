import React from "react";
import { useNavigate } from "react-router-dom";

function MovieBox({ movie, clickMovie }) {
  const navigate = useNavigate();

  function switchToInfo() {
    return navigate(`/movie/${movie.imdbID}`);
  }

  const handleClick = () => {
    clickMovie(movie);
    switchToInfo();
  };

  return (
    <div
      className="movieBox flex flex-col cursor-pointer"
      onClick={handleClick}
    >
      <div className="moviePosterContainer">
        <img src={movie.Poster} alt="movie poster" />
      </div>
      <p className="movieTitle">{movie.Title}</p>
      <p className="popularity">{movie.Year}</p>
    </div>
  );
}

export default MovieBox;
