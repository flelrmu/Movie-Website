import React, { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";
import Button2 from "../Button/Button2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 18,
    name: "Drama",
  },
];

function Popular() {
  const [genreMovies, setGenreMovies] = useState({});

  useEffect(() => {
    genres.forEach((genre) => {
      GlobalApi.getMoviesByGenre(genre.id, 1)
        .then((response) => {
          setGenreMovies((prevMovies) => ({
            ...prevMovies,
            [genre.id]: response.data.results.slice(0, 4),
          }));
        })
        .catch((error) =>
          console.error(`Error fetching movies for genre ${genre.name}:`, error)
        );
    });
  }, []);
  return (
    <div className="self-stretch justify-start items-start gap-5 inline-flex">
      {genres.map((genre) => (
        <div
          key={genre.id}
          className="p-6 h-[317px] bg-[#1a1a1a] rounded-xl border border-neutral-800 flex-col justify-start items-end inline-flex"
        >
          <div className="self-stretch w-[211px] h-[206px] flex-col justify-start items-start gap-2.5 flex">
            <div className="self-stretch h-full grid grid-cols-2 grid-rows-2 basis-0 justify-start items-start gap-2.5">
              {genreMovies[genre.id]?.map((movie) => (
                <img
                  key={movie.id}
                  src={IMAGE_BASE_URL + movie.poster_path}
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-md"
                />
              ))}
            </div>
            <div className="absolute z-10 w-[225px] h-[206px] bg-gradient-to-b from-transparent to-[#1a1a1a]" />
          </div>
          <div className="self-stretch justify-between items-center gap-5 inline-flex">
            <div className="flex-col justify-start items-start gap-0.5 inline-flex">
              <Button2 variant="bg-[#e50000] leading-[18px] text-xs px-[8px] py-[4px]">
                Top in 10
              </Button2>
              <div className="self-stretch text-white text-base font-semibold font-['Manrope'] leading-normal">
                {genre.name}
              </div>
            </div>
            <div className="w-6 h-6 relative justify-end">
              <img src="images/right.svg" alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Popular;
