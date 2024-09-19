import React from "react";
import Header from "../Components/Header";
import SearchMain from "../Components/SearchMain";

function SearchPage() {
  return (
    <div className="searchPage flex flex-col w-full">
      <Header />
      <SearchMain />
    </div>
  );
}

export default SearchPage;
