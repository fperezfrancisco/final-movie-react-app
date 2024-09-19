import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SearchPage from "./Pages/SearchPage";
import MovieInfoPage from "./Pages/MovieInfoPage";
import { GlobalContext, GlobalContextProvider } from "./Context/GlobalContext";

export const Context = React.createContext();

function App() {
  //const [mainSearchText, setMainSearchText] = useState("");
  //const [movieList, setMovieList] = useState([]);

  return (
    <GlobalContextProvider>
      <>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/movie/:id" element={<MovieInfoPage />} />
          </Routes>
        </BrowserRouter>
      </>
    </GlobalContextProvider>
  );
}

export default App;
