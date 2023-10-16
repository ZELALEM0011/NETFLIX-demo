import React, { useEffect, useState } from "react";
import axios from "../../axios/axios.js";
import "../../component/rows/row.css";

function Row({ title, fatchURL, isLargeRow = false }) {
  const [movie, setMovie] = useState([]);

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fatchData() {
      const request = await axios.get(fatchURL);
      setMovie(request.data.results);
      return request;
    }
    fatchData();
  }, [fatchURL]);
  console.log("movie", movie);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_postures">
        {movie.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row_posture ${isLargeRow && "row_large_posture"} `}
                key={movie.id}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
