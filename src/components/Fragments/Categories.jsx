import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import ContainerDescriptions from "../Elements/Items/containerDescriptions";
import ContainerTitle from "../Elements/Items/ContainerTitle";

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

function Categories() {
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
    <div className="h-[418px] w-full px-10 top-[970px] absolute flex-col justify-start items-start gap-[60px] inline-flex">
      <div className="self-stretch justify-start items-end gap-20 inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
          <ContainerTitle>
            Explore our wide variety of categories
          </ContainerTitle>
          <ContainerDescriptions>
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </ContainerDescriptions>
        </div>
        <div className="p-3 bg-[#0f0f0f] rounded-[10px] border border-[#1e1e1e] justify-start items-center gap-3 flex">
          <div className="p-2.5 bg-[#1a1a1a] rounded-md border border-[#1e1e1e] justify-start items-start gap-2.5 flex">
            <div className="w-6 h-6 relative">
              <img src="/images/left.svg" alt="" />
            </div>
          </div>
          <div className="h-1 justify-start items-start gap-[3px] flex">
            <div className="w-[18px] h-1 bg-[#e50000] rounded-[100px]" />
            <div className="w-[14px]  h-1 bg-[#333333] rounded-[100px]" />
            <div className="w-[14px] h-1 bg-[#333333] rounded-[100px]" />
            <div className="w-[14px] h-1 bg-[#333333] rounded-[100px]" />
          </div>
          <div className="p-2.5 bg-[#1a1a1a] rounded-md border border-[#1e1e1e] justify-start items-start gap-2.5 flex">
            <div className="w-6 h-6 relative">
              <img src="/images/right.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
}

export default Categories;
