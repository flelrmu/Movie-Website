import React, { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const StarRating = ({ rating, totalStars = 5 }) => {
  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={index < rating ? "red" : "gray"}
          className="w-4 h-4"
        >
          <path d="M12 2.25l3.09 6.26 6.91 1-5 4.87 1.18 6.87L12 17.77l-6.18 3.25L7 14.38 2 9.51l6.91-1L12 2.25z" />
        </svg>
      ))}
    </div>
  );
};


function MustWatch() {
    const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const fetchMovieRecommendations = async () => {
      try {
        const baseMovieId = 550;
        const response = await GlobalApi.getMovieRecommendations(baseMovieId);

        const moviesWithDetails = await Promise.all(
          response.data.results.slice(0, 4).map(async (movie) => {
            const movieDetails = await GlobalApi.getMovieDetails(movie.id); 
            return {
              ...movie,
              runtime: movieDetails.data.runtime, 
              voteCount: movieDetails.data.vote_count,
              rating: Math.floor(movieDetails.data.vote_average / 2), 
            };
          })
        );

        setRecommendedMovies(moviesWithDetails);
      } catch (error) {
        console.error("Error fetching movie recommendations:", error);
      }
    };

    fetchMovieRecommendations();
  }, []);

  return (
    <div className="self-stretch justify-start items-start gap-5 inline-flex">
      {recommendedMovies.map((movie) => (
        <div
          key={movie.id}
          className="h-[404px] p-4 bg-[#1a1a1a] rounded-[10px] border border-neutral-800 flex-col justify-start items-start gap-4 inline-flex"
        >
          <div className="self-stretch w-[227px] h-[324px] items-start">
            <img
              src={IMAGE_BASE_URL + movie.poster_path}
              alt={movie.title}
              className="w-full h-full object-cover rounded-md"
            />
            <div className="justify-between flex mt-[16px]">
              <div className="pl-1 pr-2 bg-[#141414] rounded-[51px] border border-neutral-800 justify-center items-center gap-0.5 flex">
                <div className="w-5 h-5 mt-[px] relative">
                  <img src="images/time.svg" alt="" />
                </div>
                <div className="text-[#999999] text-xs font-medium font-['Manrope'] leading-[18px]">
                  {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}
                  min
                </div>
              </div>
              <div className="pl-1 pr-2 py-1 bg-[#141414] rounded-[51px] border border-neutral-800 justify-start items-center gap-1 flex">
                <StarRating rating={movie.rating} />
                <div className="text-[#999999] text-xs font-medium font-['Manrope'] leading-[18px]">
                  {movie.voteCount >= 1000
                    ? `${(movie.voteCount / 1000).toFixed(0)}K`
                    : movie.voteCount}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MustWatch;
