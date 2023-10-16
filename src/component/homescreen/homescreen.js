import React from "react";
import Navigation from "../navigation/nav";
import Banner from "../banner/banner.js";
import requests from "../../axios/requests";
import Row from "../rows/row";

function Homescreen() {
  return (
    <div className="home">
      <Navigation />
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        fatchURL={requests.fetchMovies}
        isLargeRow
      />
      <Row title="Action Movies" fatchURL={requests.fetchActionMovies} />
      <Row title="Adventure Movies" fatchURL={requests.fetchAdventureMovies} />
      <Row title="Animation Movies" fatchURL={requests.fetchAnimationMovies} />
      <Row title="Comedy Movies" fatchURL={requests.fetchComedyMovies} />
      <Row title="Crime Movies" fatchURL={requests.fetchCrimeMovies} />
      <Row
        title="Documentary Movies"
        fatchURL={requests.fetchDocumentaryMovies}
      />
      <Row title="Drama Movies" fatchURL={requests.fetchDramaMovies} />
      <Row title="fantasy Movies" fatchURL={requests.fetchfantasyMovies} />
      <Row title="Horror Movies" fatchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fatchURL={requests.fetchRomanceMovies} />
      <Row title="Mystirous Movies" fatchURL={requests.fetchMystirousMovies} />
    </div>
  );
}

export default Homescreen;
