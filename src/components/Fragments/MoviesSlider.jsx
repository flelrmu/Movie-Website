import React, { useEffect, useState } from "react";
import Button from "../Elements/Button/Button";
import GlobalApi from "../Services/GlobalApi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function MoviesSlider() {
  const [movieList, setMovieList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const elementRef = React.useRef(null);

  useEffect(() => {
    getTrendingVideos();
  }, []);

  const getTrendingVideos = () => {
    GlobalApi.getTrendingVideos()
      .then((resp) => {
        const limitedMovies = resp.data.results.slice(0, 4);
        setMovieList(limitedMovies);
        setActiveIndex(0); 
      })
      .catch((error) => {
        console.error("Error fetching trending videos:", error);
      });
  };

  const handleScroll = () => {
    if (!elementRef.current) return;

    const scrollLeft = elementRef.current.scrollLeft;
    const movieIndex = Math.round(scrollLeft / screenWidth); 
    if (movieIndex !== activeIndex && movieList[movieIndex]) {
      setActiveIndex(movieIndex);
    }
  };

  useEffect(() => {
    const sliderElement = elementRef.current;
    sliderElement.addEventListener("scroll", handleScroll);

    return () => sliderElement.removeEventListener("scroll", handleScroll);
  }, [movieList, activeIndex]);

  const sliderRight = () => {
    elementRef.current.scrollBy({
      left: screenWidth - 78,
      behavior: "smooth",
    });
  };

  const sliderLeft = () => {
    elementRef.current.scrollBy({
      left: -(screenWidth - 78),
      behavior: "smooth",
    });
  };

  return (
    <div className="absolute w-full h-[709px] top-[98px] px-10 pt-10 pb-4 flex-col justify-end items-center gap-10 inline-flex overflow-hidden">
      <div
        ref={elementRef}
        className="w-full h-full flex overflow-x-auto gap-5 rounded-xl border border-neutral-800 scrollbar-hide"
      >
        {movieList.map((item, index) => (
          <div
            key={item.id}
            className="relative min-w-full h-full flex-shrink-0"
          >
            <img
              src={
                item.backdrop_path
                  ? IMAGE_BASE_URL + item.backdrop_path
                  : IMAGE_BASE_URL + item.poster_path
              }
              alt={item.title || "Movie Image"}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-32 justify-center z-20 text-left text-white">
        <h1 className="text-4xl text-center font-bold">
          {movieList[activeIndex]
            ? movieList[activeIndex].title || movieList[activeIndex].name
            : "Loading..."}
        </h1>
        <p className="text-center mt-2 max-w-4xl font-medium leading-normal text-[#999999] text-base">
          {movieList[activeIndex]
            ? movieList[activeIndex].overview
            : "Loading..."}
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Button>Play Now</Button>
          <button className="p-3 bg-[#0f0f0f] rounded-lg border border-neutral-800">
            <img src="/images/plus.svg" alt="Add" />
          </button>
          <button className="p-3 bg-[#0f0f0f] rounded-lg border border-neutral-800">
            <img src="/images/thumb.svg" alt="Like" />
          </button>
          <button className="p-3 bg-[#0f0f0f] rounded-lg border border-neutral-800">
            <img src="/images/sound.svg" alt="Sound" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-between items-center px-20">
        <button
          onClick={sliderLeft}
          className="p-3 bg-[#0f0f0f] rounded-lg border border-neutral-800"
        >
          <img src="/images/left.svg" alt="Left" />
        </button>
        <div className="h-1 flex gap-[3px] items-center">
          {movieList.map((_, index) => (
            <div
              key={index}
              className={`${
                activeIndex === index ? "w-[25px] bg-[#e50000]" : "w-[18px] bg-[#333333]"
              } h-1 rounded-full`}
            ></div>
          ))}
        </div>
        <button
          onClick={sliderRight}
          className="p-3 bg-[#0f0f0f] rounded-lg border border-neutral-800"
        >
          <img src="/images/right.svg" alt="Right" />
        </button>
      </div>
    </div>
  );
}

export default MoviesSlider;
