import React from "react";

function LoadStateMovieBox() {
  return (
    <div className="movieBox flex flex-col loadBox cursor-pointer">
      <div className="moviePosterContainer posterLoad"></div>
      <p className="movieTitleLoad"></p>
      <p className="popularityLoad"></p>
    </div>
  );
}

export default LoadStateMovieBox;
