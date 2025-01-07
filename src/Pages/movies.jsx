import React from "react";
import Navbar from "../components/Fragments/Navbar";
import MoviesSlider from "../components/Fragments/MoviesSlider";
import MoviesList from "../components/Fragments/MoviesList";
import ShowsList from "../components/Fragments/ShowsList";
import TrialSection from "../components/Fragments/TrialSection";

function MoviesPage() {
  return (
    <>
      <Navbar type="movies" />
      <MoviesSlider />
      <MoviesList />
      <ShowsList />
    </>
  );
}

export default MoviesPage;
