import React, { useEffect, useState } from "react";
import Button2 from "../Elements/Button/Button2";
import GlobalApi from "../Services/GlobalApi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function TrialSection() {
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

      setMovieList(allMovies.slice(0, 36));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  return (
    <div className="w-full absolute top-[3592px] px-10 h-[236px] py-20 flex justify-center items-center">
      <div className="w-full rounded-xl border border-neutral-800 relative overflow-hidden bg-[#0f0f0f]">
        <div className="absolute h-[285px] inset-0 z-0 flex overflow-hidden">
          <div
            ref={elementRef}
            className="w-full grid grid-cols-9 grid-rows-4 gap-5"
            style={{
              marginTop: '-50px',
            }}
          >
            {movieList.map((item, index) => (
              <img
                key={item.id}
                src={IMAGE_BASE_URL + item.poster_path}
                alt={item.title || "Movie Poster"}
                className="w-full h-full object-cover"
              />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 z-10 bg-[#e50000] opacity-50 rounded-xl"/>
        
        <div className="absolute inset-0 z-30 bg-gradient-to-r from-[#0f0f0f] from-[15%] via-transparent to-transparent rounded-xl"/>

        <div className="relative z-40 px-[60px] py-[80px] flex justify-between items-center">
          <div>
            <div className="text-white text-[28px] font-bold font-['Manrope'] leading-[42px]">
              Start your free trial today!
            </div>
            <div className="text-[#999999] text-base font-normal font-['Manrope'] leading-normal mt-2">
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </div>
          </div>
          <Button2 variant="bg-[#e50000] inline-flex">
            Start a Free Trial
          </Button2>
        </div>
      </div>
    </div>
  );
}

export default TrialSection;
