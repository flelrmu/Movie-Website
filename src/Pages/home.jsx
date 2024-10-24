import React from "react";
import Navbar from "../components/Fragments/Navbar";
import ImageContainer from "../components/Fragments/ImageContainer";
import Categories from "../components/Fragments/Categories";
import DeviceContainer from "../components/Fragments/DeviceContainer";

function HomePage() {
  return (
    <>
      <Navbar type="home" />
      <ImageContainer />
      <Categories />
      <DeviceContainer />
    </>
  );
}

export default HomePage;
