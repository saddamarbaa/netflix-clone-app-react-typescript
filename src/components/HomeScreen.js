import React from "react";
import "./HomeScreen.css";
import Banner from "./Banner";
import NAV from "./NAV";
import request from "./Requests";
import Row from "./Row";

// HomeScreen component

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <NAV />
      <Banner />
      <Row
        title="NETFILX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLageRow
      />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />

      <Row title="Comedy Movies" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Crime Movies" fetchUrl={request.fetchCrimeMovies} />

      <Row
        title="Documentaries Movies"
        fetchUrl={request.fetchDocumentariesMovies}
      />
      <Row title="Adventure Movies" fetchUrl={request.fetchAdventureMovies} />
      <Row title="Drama Movies" fetchUrl={request.fetchDramaMovies} />

      <Row title="Animation Movies" fetchUrl={request.fetchAnimationMovies} />
      <Row title="War Movies" fetchUrl={request.fetchWarMovies} />
    </div>
  );
};

export default HomeScreen;
