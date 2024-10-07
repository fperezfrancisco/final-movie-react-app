import React, { useContext, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import popcornBucket from "../assets/popcorn-imgs/popcornBucket-min.png";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";
import { GlobalContext } from "../Context/GlobalContext";

function HomeMain() {
  //const [mainSearchText, setMainSearchText] = useState("");
  const { newSearchText, setNewSearchText } = useContext(GlobalContext);
  console.log(
    "newsearch text: " +
      newSearchText +
      " & set new seach text" +
      setNewSearchText
  );
  const [homeLoadState, setHomeLoadState] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (newSearchText) {
      console.log("Searching in home page with text: " + newSearchText);
      //load state home
      setHomeLoadState(true);
      //switch to search page
      setTimeout(() => {
        switchToSearchPage();
      }, 2000);
    } else {
      setHomeLoadState(false);
    }
  }, [newSearchText]);

  function switchToSearchPage() {
    return navigate("/search");
  }

  return (
    <div className="w-full h-[100vh] min-h-[400px] pt-[8rem] max-w-[1280px] m-auto mt-0 mb-0 relative overflow-y-hidden">
      <section className="heroSection w-full p-4 pt-[4rem] flex flex-col items-center text-center md:p-8">
        <h1
          className={`pageTitle font-bold text-[2rem] md:text-[4rem] max-w-[850px] ${
            homeLoadState ? "hidden" : ""
          }`}
        >
          We never fail to help you find the most popular,{" "}
          <span className="text-red-600">poppin</span> films here!
        </h1>
        <h1
          className={`pageTitle font-bold text-[2rem] animate-home md:text-[4rem] max-w-[850px] ${
            homeLoadState ? "" : "hidden"
          }`}
        >
          Searching for your movie now...
        </h1>

        <SearchBar setSearchText={setNewSearchText} />
        <img
          className="popcornBig w-[400px] absolute bottom-[-4rem] md:bottom-[-8rem]"
          src={popcornBucket}
        />
      </section>
    </div>
  );
}

export default HomeMain;
