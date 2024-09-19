import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import HomeMain from "../Components/HomeMain";

function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <HomeMain />
    </div>
  );
}

export default Home;
