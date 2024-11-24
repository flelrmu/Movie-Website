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
    <div className="absolute left-0 w-full h-auto flex-col justify-start items-center inline-flex">
      <div className="self-stretch h-auto flex-col justify-start items-start gap-2.5 flex">
        <img
          className="w-full object-cover h-[810px] mix-blend-overlay rounded-xl"
          src="images/Image.png"
        />
        <div
          ref={elementRef}
          className="absolute self-stretch grid md:grid-cols-9 grid-cols-3 grid-rows-4  gap-4"
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#141414] to-transparent pointer-events-none z-5" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#141414] to-[85%] pointer-events-none z-5" />
        <div className="md:w-[300px] w-[200px] h-[200px] md:h-[300px] absolute">
          <div className="md:w-[280px] md:h-[280px] w-[200px] h-[200px] md:top-[192px] top-[160px] md:left-[492px] left-[141px] absolute">
            <img
              className="md:w-[280px] md:h-[280px] w-[200px] h-[200px]"
              src="images/AbstractDesign.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 self-stretch h-[237px] md:px-[150px] flex-col justify-start items-center md:gap-10 gap-[120px] flex">
        <div className="self-stretch md:h-[145px] h-[157px] flex-col justify-start items-start gap-2.5 flex">
          <div className="self-stretch text-center text-white md:text-5xl text-[28px] font-bold md:leading-[72px] leading-[42px]">
            The Best Streaming Experience
          </div>
          <div className="self-stretch text-center text-[#999999] text-sm font-normal leading-[21px]">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </div>
        </div>
        <Button variant="bg-[#e50000] ">Start Watching Now</Button>
      </div>
    </div>
  );
}

export default ImageContainer;
