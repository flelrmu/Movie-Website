import React, { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const categories = [
  {
    id: 14,
    hours: "1h 30min",
    views: "2K",
  },
  {
    id: 80,
    hours: "1h 57min",
    views: "1.5K",
  },
  {
    id: 99,
    hours: "2h 10min",
    views: "1.8K",
  },
  {
    id: 10752,
    hours: "2h 20min",
    views: "3K",
  },
  {
    id: 36,
    hours: "1h 42min",
    views: "5K",
  },
];

function Trending() {
  const [categoryMovies, setCategoryMovies] = useState({});

  useEffect(() => {
    categories.forEach((category) => {
      GlobalApi.getMoviesByGenre(category.id, 1)
        .then((response) => {
          setCategoryMovies((prevMovies) => ({
            ...prevMovies,
            [category.id]: response.data.results.slice(0, 1),
          }));
        })
        .catch((error) =>
          console.error(
            `Error fetching movies for genre ${category.name}:`,
            error
          )
        );
    });
  }, []);
  return (
    <div className="self-stretch justify-start items-start gap-5 inline-flex">
      {categories.map((category) => (
        <div
          key={category.id}
          className="h-[310px] p-4 bg-[#1a1a1a] rounded-[10px] border border-neutral-800 flex-col justify-start items-start gap-4 inline-flex"
        >
          <div className="self-stretch w-[171px] h-[232px] items-start">
            {categoryMovies[category.id]?.map((movie) => (
              <img
                key={movie.id}
                src={IMAGE_BASE_URL + movie.poster_path}
                alt={movie.title}
                className="w-full h-full object-cover rounded-md"
              />
            ))}
            <div className="justify-between flex mt-[16px]">
              <div className="pl-1 pr-2 bg-[#141414] rounded-[51px] border border-neutral-800 justify-center items-center gap-0.5 flex">
                <div className="w-5 h-5 mt-[px] relative">
                  <img src="images/time.svg" alt="" />
                </div>
                <div className="text-[#999999] text-xs font-medium font-['Manrope'] leading-[18px]">
                  {category.hours}
                </div>
              </div>
              <div className="pl-1 pr-2 py-1 bg-[#141414] rounded-[51px] border border-neutral-800 justify-start items-center gap-1 flex">
                <div className="w-5 h-5 relative">
                    <img src="images/eye.svg" alt="" />
                </div>
                <div className="text-[#999999] text-xs font-medium font-['Manrope'] leading-[18px]">
                  {category.views}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Trending;
