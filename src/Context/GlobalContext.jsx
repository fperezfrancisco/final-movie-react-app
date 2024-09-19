import { createContext, useState } from "react";

export const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [newSearchText, setNewSearchText] = useState("");
  const [mainMovieList, setMainMovieList] = useState([]);

  const value = {
    newSearchText,
    setNewSearchText,
    mainMovieList,
    setMainMovieList,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
