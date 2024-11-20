import React from "react";
import Navbar from "../components/Fragments/Navbar";
import MoviesSlider from "../components/Fragments/MoviesSlider";

function MoviesPage() {
  return (
    <>
      <Navbar type="movies" />
      <MoviesSlider />
    </>
  );
}

export default MoviesPage;
