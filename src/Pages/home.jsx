import React from "react";
import Navbar from "../components/Fragments/Navbar";
import ImageContainer from "../components/Fragments/ImageContainer";
import Categories from "../components/Fragments/Categories";
import DeviceContainer from "../components/Fragments/DeviceContainer";
import FaqSection from "../components/Fragments/FaqSection";

function HomePage() {
  return (
    <>
      <Navbar type="home" />
      <ImageContainer />
      <Categories />
      <DeviceContainer />
      <FaqSection />
    </>
  );
}

export default HomePage;
