import React, { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Upcoming() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const response = await GlobalApi.getUpcomingMovies();
        setUpcomingMovies(response.data.results.slice(0, 5));
      } catch (error) {
        console.error("Error fetching upcoming movies:", error);
      }
    };

    fetchUpcomingMovies();
  }, []);
  return (
    <div className="self-stretch justify-start items-start gap-5 inline-flex">
      {upcomingMovies.map((movie) => (
        <div
          key={movie.id}
          className="h-[310px] p-4 bg-[#1a1a1a] rounded-[10px] border border-neutral-800 flex-col justify-start items-start gap-4 inline-flex"
        >
          <div className="self-stretch w-[171px] h-[232px] items-start">
            <img
              src={IMAGE_BASE_URL + movie.poster_path}
              alt={movie.title}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="px-3.5 py-[1px] m-auto bg-[#141414] rounded-[51px] border border-neutral-800 justify-center items-center gap-2.5 inline-flex">
            <div className="text-center mb-0.5">
              <span className="text-[#999999] text-xs font-medium font-['Manrope'] leading-[18px]">
                Released at{" "}
              </span>
              <span className="text-[#bfbfbf] text-xs font-medium font-['Manrope'] leading-[18px]">
                {movie.release_date}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Upcoming;
