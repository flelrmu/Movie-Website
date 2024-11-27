import React from "react";
import Navbar from "../components/Fragments/Navbar";
import MoviesSlider from "../components/Fragments/MoviesSlider";
import MoviesList from "../components/Fragments/MoviesList";

function MoviesPage() {
  return (
    <>
      <Navbar type="movies" />
      <MoviesSlider />
      <MoviesList />
    </>
  );
}

export default MoviesPage;
