import React from "react";
import { Link } from "react-router-dom";
import Button2 from "../Elements/Button/Button2";
import Genres from "../Elements/Items/Genres";
import ArrowButton from "../Elements/Button/ArrowButton";
import Popular from "../Elements/Items/Popular";
import Trending from "../Elements/Items/Trending";
import Upcoming from "../Elements/Items/Upcoming";
import MustWatch from "../Elements/Items/MustWatch";

function MoviesList() {
  return (
    <div className="w-full mb-[138px] px-10 h-auto flex-col justify-start items-start inline-flex">
      <div className="self-stretch absolute h-10 px-10 flex-col justify-start items-start gap-2.5 flex">
        <Link to="/Movie-Website/moviesOpen">
          <Button2 variant="bg-[#e50000] absolute top-[-16px] py-[8px]">
            Movies
          </Button2>
        </Link>
      </div>
      <div className="self-stretch h-[2536px] p-10 rounded-xl border border-neutral-800 flex-col justify-start items-start gap-20 flex">
        <div className="self-stretch h-[367px] flex-col justify-start items-start gap-10 flex">
          <div className="self-stretch justify-start items-center gap-[100px] inline-flex">
            <div className="grow shrink basis-0 text-white text-3xl font-bold font-['Manrope'] leading-[45px]">
              Our Genres
            </div>
            <ArrowButton />
          </div>
          <Genres variant="small" />
        </div>
        <div className="self-stretch h-[425px] flex-col justify-start items-start gap-10 flex">
          <div className="self-stretch justify-start items-center gap-[100px] inline-flex">
            <div className="grow shrink basis-0 text-white text-3xl font-bold font-['Manrope'] leading-[45px]">
              Popular Top 10 In Genres
            </div>
            <ArrowButton />
          </div>
          <Popular />
        </div>
        <div className="self-stretch h-[416px] flex-col justify-start items-start gap-10 flex">
          <div className="self-stretch justify-start items-center gap-[100px] inline-flex">
            <div className="grow shrink basis-0 text-white text-3xl font-bold font-['Manrope'] leading-[45px]">
              Trending Now
            </div>
            <ArrowButton />
          </div>
          <Trending />
        </div>
        <div className="self-stretch h-[416px] flex-col justify-start items-start gap-10 flex">
          <div className="self-stretch justify-start items-center gap-[100px] inline-flex">
            <div className="grow shrink basis-0 text-white text-3xl font-bold font-['Manrope'] leading-[45px]">
              New Releases
            </div>
            <ArrowButton />
          </div>
          <Upcoming />
        </div>
        <div className="self-stretch h-[512px] flex-col justify-start items-start gap-10 flex">
          <div className="self-stretch justify-start items-center gap-[100px] inline-flex">
            <div className="grow shrink basis-0 text-white text-3xl font-bold font-['Manrope'] leading-[45px]">
              Recommended Movies
            </div>
            <ArrowButton />
          </div>
          <MustWatch />
        </div>
      </div>
    </div>
  );
}

export default MoviesList;
