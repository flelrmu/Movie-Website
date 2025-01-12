import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import Button from "../Elements/Button/Button";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function ImageContainer() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = React.useRef(null);

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    try {
      const responsePage1 = await GlobalApi.getPopularMovies(1);
      const responsePage2 = await GlobalApi.getPopularMovies(2);

      const allMovies = [
        ...responsePage1.data.results,
        ...responsePage2.data.results,
      ];

      const displayMovies =
        window.innerWidth < 768
          ? allMovies.slice(0, 12)
          : allMovies.slice(0, 36);
      setMovieList(displayMovies);
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  return (
    <div className="relative w-full mb-[273px] min-h-screen">
      {/* Background Container - Fixed position */}
      <div className="top-0 left-0 w-full h-screen overflow-hidden">
        <div
          ref={elementRef}
          className="self-stretch grid md:grid-cols-9 grid-cols-3 grid-rows-4  gap-4"
        >
          {movieList.map((item) => (
            <img
              key={item.id}
              src={IMAGE_BASE_URL + item.poster_path}
              alt={item.title || "Movie Poster"}
              className="w-full md:aspect-[2/3] aspect-[3/3] object-cover rounded-xl"
            />
          ))}
        </div>
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#141414] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#141414] to-[100%] pointer-events-none" />
      </div>

      {/* Content Container - Relative position */}
      <div className="absolute top-0 left-0 z-10 w-full min-h-screen flex flex-col">
        {/* Abstract Design */}
        <div className="flex justify-center md:mt-[192px] mt-[160px]">
          <img
            className="md:w-[280px] md:h-[280px] w-[200px] h-[200px] max-w-full max-h-full"
            src="images/AbstractDesign.png"
            alt="Abstract Design" 
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 left-0 right-0 bottom-0 flex flex-col items-center justify-center md:px-[150px] pb-8 mt-[100px]"> {/* Adjusted mt value */}
          <div className="w-full max-w-4xl">
            <div className="text-center text-white md:text-5xl text-[28px] font-bold md:leading-[72px] leading-[42px] mb-6">
              The Best Streaming Experience
            </div>
            <div className="text-center text-[#999999] text-sm font-normal leading-[21px] mb-10">
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              StreamVibe, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more. You
              can also create your own watchlists, so you can easily find the
              content you want to watch.
            </div>
          </div>
          <Button variant="bg-[#e50000]">Start Watching Now</Button>
        </div>
      </div>
    </div>
  );
}

export default ImageContainer;