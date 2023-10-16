import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "../../axios/axios";
import requests from "../../axios/requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fatchData() {
      const request = await axios.get(requests.fetchActionMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request; 
    }
    fatchData();
  }, []);

  console.log(movie);

  function trancate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        justifyContent: "space-between",
      }}
    >
      <div className="banner_container">
        <h1 className="banner_title">{movie?.title}</h1>
        <div className="banner_buttons">
          <button className="banner_button">play</button>
          <button className="banner_button">my list</button>
        </div>
        <h1 className="banner_discription">
          {trancate(
            `${movie?.overview}`,
            100
          )}
        </h1>
      </div>
      <div className="banner_fade" />
    </header>
  );
}

export default Banner;
