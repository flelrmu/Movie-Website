import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi'


const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const categories = [
  {
    "id": 10759,
    "name": "Adventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 80,
    "name": "Crime"
  },
  {
    "id": 99,
    "name": "Documentary"
  },
];


function ShowGenres({ variant = "default" }) {
  const [categoryShows, setCategoryShows] = useState({});

  useEffect(() => {
    categories.forEach((category) => {
      GlobalApi.getShowsByGenre(category.id, 1)
        .then((response) => {
          setCategoryShows((prevShows) => ({
            ...prevShows,
            [category.id]: response.data.results.slice(0, 4),
          }));
        })
        .catch((error) =>
          console.error(
            `Error fetching shows for genre ${category.name}:`,
            error
          )
        );
    });
  }, []);

  const sizes = {
    default: "w-[171px] h-[180px]",
    large: "w-[250px] h-[300px]",
    small: "w-[155px] h-[180px]",
  };

  const cardSize = sizes[variant] || sizes.default;
  return (
    <div className="w-full self-stretch justify-start items-start gap-5 inline-flex">
      {categories.map((category) => (
        <div
          key={category.id}
          className="p-6 bg-[#1a1a1a] rounded-[10px] border border-neutral-800 flex-col justify-start items-start inline-flex"
        >
          <div className={`self-stretch ${cardSize} flex-col justify-start items-start gap-[5px] flex`}>
            <div className="self-stretch h-full grid grid-cols-2 grid-rows-2 gap-[5px]">
              {categoryShows[category.id]?.map((show) => (
                <img
                  key={show.id}
                  src={IMAGE_BASE_URL + show.poster_path}
                  alt={show.title}
                  className="w-full h-full object-cover rounded-md"
                />
              ))}
            </div>
            <div className={`absolute ${cardSize} bg-gradient-to-b from-transparent to-[#1a1a1a] z-10`} />
          </div>
          <div className="self-stretch justify-start items-center inline-flex">
            <div className="grow shrink basis-0 text-white text-base font-semibold leading-normal">
              {category.name}
            </div>
            <div className="w-6 h-6 relative">
              <img src="images/right.svg" alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ShowGenres