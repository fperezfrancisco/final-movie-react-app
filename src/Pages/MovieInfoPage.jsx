import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "../Services/GlobalApi";
import Header from "../Components/Header";

function MovieInfoPage() {
  const { id } = useParams();

  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    //set current movie
    GlobalApi.searchMovieId(id).then((resp) => {
      console.log(resp.data);
      setCurrentMovie(resp.data);
      //setMainMovieList(resp.data.Search);
    });
  }, []);
  return (
    <div className="flex flex-col w-full pt-8">
      <Header />
      <div className="flex flex-col w-full m-auto mt-12 p-8 max-w-[1280px] left-0 right-0 ">
        <section className="w-full pt-4 flex flex-col">
          <div className="movieHeaderContainer flex flex-col md:flex-row gap-16">
            <div className="artWork flex">
              {currentMovie && (
                <img
                  src={currentMovie.Poster}
                  alt="Movie Poster"
                  className="w-full"
                />
              )}
            </div>
            {currentMovie && (
              <div className="copyContainer flex flex-col text-left">
                <h2 className="text-[2.5rem] mb-4 font-bold">
                  {currentMovie ? currentMovie.Title : "Movie Title"}
                </h2>
                <p className="releasedText infoText max-w-[600px] w-full leading-6 font-medium mb-4">
                  {currentMovie.Plot}
                </p>
                <p className="releasedText infoText">
                  Movie Released: {currentMovie.Released}
                </p>
                <p className="releasedText infoText">
                  Rated: {currentMovie.Rated}
                </p>
                <p className="w-full font-medium mt-4">
                  Director: {currentMovie.Director}
                </p>
                <p className="actors w-full">Actors: {currentMovie.Actors}</p>
                <p className="boxOffice font-medium italic mt-4">
                  Box Office: {currentMovie.BoxOffice}
                </p>
              </div>
            )}
          </div>
          {currentMovie && (
            <div className="w-full flex flex-col md:flex-row gap-12 p-4 mt-8">
              {currentMovie.Ratings.map((rating) => (
                <div className="flex flex-row items-center gap-4 bg-[#303030] text-white border-gray-300 p-4 rounded w-fit">
                  <p className="font-medium text-[0.75rem]">{rating.Source}</p>
                  <p className="text-sm font-bold">{rating.Value}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default MovieInfoPage;
