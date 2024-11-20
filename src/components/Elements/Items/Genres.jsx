import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi'


const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const categories = [
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
  {
    id: 27,
    name: "Horror",
  },
];


function Genres() {
    const [categoryMovies, setCategoryMovies] = useState({});

    useEffect(() => {
      categories.forEach((category) => {
        GlobalApi.getMoviesByGenre(category.id, 1)
          .then((response) => {
            setCategoryMovies((prevMovies) => ({
              ...prevMovies,
              [category.id]: response.data.results.slice(0, 4),
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
    <div className="w-full self-stretch justify-start items-start gap-5 inline-flex">
        {categories.map((category) => (
          <div
            key={category.id}
            className="p-6 bg-[#1a1a1a] rounded-[10px] border border-neutral-800 flex-col justify-start items-start inline-flex"
          >
            <div className="self-stretch h-[180px] w-[171px] flex-col justify-start items-start gap-[5px] flex">
              <div className="self-stretch h-44 grid grid-cols-2 grid-rows-2 gap-[5px]">
                {categoryMovies[category.id]?.map((movie) => (
                  <img
                    key={movie.id}
                    src={IMAGE_BASE_URL + movie.poster_path}
                    alt={movie.title}
                    className="w-full h-full object-cover  rounded-md"
                  />
                ))}
              </div>
              <div className="h-[180px] w-[171px] absolute bg-gradient-to-b from-transparent  to-[#1a1a1a] z-10" />
            </div>
            <div className="self-stretch justify-start items-center inline-flex">
              <div className="grow shrink basis-0 text-white text-base font-semibold leading-normal">
                {category.name}
              </div>
              <div className="w-6 h-6 relative">
                <img src="/images/right-arrow.svg" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default Genres