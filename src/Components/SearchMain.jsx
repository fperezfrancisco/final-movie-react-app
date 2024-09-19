import React, { useContext, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import LoadStateMovieBox from "./LoadStateMovieBox";
import GlobalApi from "../Services/GlobalApi";
import MovieBox from "./MovieBox";
import { Context } from "../App";
import { GlobalContext } from "../Context/GlobalContext";

function SearchMain() {
  const { newSearchText, setNewSearchText, mainMovieList, setMainMovieList } =
    useContext(GlobalContext);
  //const [movieList, setMovieList] = useState([]);
  const [loadState, setLoadState] = useState(false);
  const [currMovie, setCurrMovie] = useState({});
  //const [mainSearchText, setMainSearchText] = useState("");
  //const { mainMovieList, setMainMovieList, mainSearchText, setMainSearchText } = useContext(GlobalContext);

  let searchWord = "";

  useEffect(() => {
    if (newSearchText) {
      searchWord = newSearchText;
      //setMovieList([]);
      setMainMovieList([]);
      console.log("there is a search text: " + newSearchText);
      console.log(mainMovieList);
      setLoadState(true);
      setTimeout(() => {
        setLoadState(false);
        getMovieSearch(newSearchText);
        setNewSearchText("");
      }, 3000);
    }
  }, [newSearchText]);

  const getMovieSearch = (movieTitle) => {
    const movieSplit = movieTitle.split(" ");
    console.log(movieSplit);
    let newMovieTitle = "";
    if (movieSplit.length > 1) {
      movieSplit.map((word, index) =>
        index < movieSplit.length - 1
          ? (newMovieTitle += word + "+")
          : (newMovieTitle += word)
      );
    } else {
      newMovieTitle = movieSplit[0];
    }
    console.log(newMovieTitle);
    GlobalApi.searchMovieTitle(newMovieTitle).then((resp) => {
      setMainMovieList(resp.data.Search);
    });
  };

  return (
    <div className="searchMain w-full max-w-[2000px] h-full m-auto mt-0 mb-0">
      <section className="w-full h-full min-h-[300px] p-4 md:p-8 bg-slate-500 flex flex-col items-center searchHero relative">
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-50 z-[0]"></div>
        <h2 className="mt-[6rem] font-bold text-[1.25rem] md:text-[2rem] text-white z-10">
          Browse our Movies
        </h2>
        <SearchBar setSearchText={setNewSearchText} />
      </section>
      <section className="searchResultsContainer w-full h-full min-h-[600px] relative overflow-x-hidden">
        <div
          className={`searchBarLoading absolute top-0 w-[100%] h-[8px] bg-red-300 ${
            loadState ? "block" : "hidden"
          }`}
        ></div>
        <div
          className={`searchBarLoadingBar absolute top-0 w-[40%] h-[8px] bg-red-700 z-[10] ${
            loadState ? "block" : "hidden"
          }`}
          id="searchBarLoadingBar"
        ></div>
        <div className="searchInner w-full max-w-[1440px] m-auto mt-8 mb-0 h-full gap-6">
          <h2 className="sectionTitle font-semibold text-[1.75rem] mb-0 pl-4 md:pl-8">
            Search Results{searchWord ? " for " + searchWord : ": "}
          </h2>
          {loadState ? (
            <div className="resultsBox w-full h-full flex flex-wrap gap-10 items-start pr-8 justify-start">
              <LoadStateMovieBox />
              <LoadStateMovieBox />
              <LoadStateMovieBox />
              <LoadStateMovieBox />
              <LoadStateMovieBox />
              <LoadStateMovieBox />
              <LoadStateMovieBox />
              <LoadStateMovieBox />
            </div>
          ) : (
            <div className="resultsBox w-full h-full flex flex-wrap gap-10 items-start pr-8 justify-start">
              {mainMovieList ? (
                mainMovieList.map(
                  (movie, index) =>
                    index < 8 && (
                      <MovieBox clickMovie={setCurrMovie} movie={movie} />
                    )
                )
              ) : (
                <div className="font-bold text-[1.5rem] text-red-800">
                  No movie results with that search
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default SearchMain;
