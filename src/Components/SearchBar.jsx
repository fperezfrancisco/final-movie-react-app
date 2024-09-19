import React, { useEffect, useRef, useState } from "react";

function SearchBar({ setSearchText }) {
  const [inputText, setInputText] = useState("");
  function handleClick() {
    console.log(inputText);
    if (!inputText) {
      alert("Please enter a valid search item!");
    } else {
      console.log("returned a valid search item");
      setSearchText(inputText);
    }
  }

  return (
    <div className="searchBarContainer w-full max-w-[800px] m-auto pt-8 pb-8 mt-2 mb-2 flex items-center relative">
      <input
        id="searchInput"
        type="text"
        className="w-full rounded-full p-4 h-[80px] border-[2px] border-black bg-white "
        placeholder="Search your movie here..."
        onChange={(e) => {
          console.log(e.target.value);
          setInputText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setInputText(e.target.value);
            handleClick();
          }
        }}
      />
      <button
        className="absolute h-[80px] bg-black text-white right-0 rounded-r-full pr-8 pl-8"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
