import {useEffect, useState} from 'react';
import React from "react";
import "./Homestyles.css";
import Textcarousel from "./Textcarousel.js";



function Home() {
  const news = ["Saab", "Volvo", "BMW"];
  console.log(news);
  // const [newsact, setNewsact] = useState(0);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setNewsact((newsact+1)%3);
  //     console.log(newsact);
  //   }, 1000);
  //   return timer;
  // }, []);
  return (
      <div className="home">
        <span className="trending-now">Trending Now </span>
        {/* {news[newsact]}; */}
      </div>
  );
}

export default Home;
