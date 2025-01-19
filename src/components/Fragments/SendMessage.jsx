import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function SendMessage() {
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

      setMovieList(allMovies.slice(0, 16));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };
  return (
    <div className="w-full h-auto mt-[152px] px-[18px] flex-col justify-start items-start gap-[50px] inline-flex">
      <div className="self-stretch h-[510px] flex-col justify-start items-start gap-[30px] flex">
        <div className="self-stretch h-[136px] flex-col justify-start items-start gap-2.5 flex">
          <div className="self-stretch text-white text-[28px] font-bold font-['Manrope'] leading-[42px]">
            Welcome to our support page!
          </div>
          <div className="self-stretch text-[#999999] text-sm font-normal font-['Manrope'] leading-[21px]">
            We're here to help you with any problems you may be having with our
            product.
          </div>
        </div>
        <div className="bg-[#0f0f0f]  rounded border-4 border-neutral-800 justify-start items-center inline-flex overflow-hidden">
          <div className="w-[370px] self-stretch flex-col justify-start items-start gap-5 inline-flex overflow-hidden">
            <div className="inset-0 z-0 gap-5 flex">
              <div
                ref={elementRef}
                className="w-full grid grid-cols-4 grid-rows-4 gap-5"
                style={{
                  marginTop: "-50px",
                }}
              >
                {movieList.map((item, index) => (
                  <img
                    key={item.id}
                    src={IMAGE_BASE_URL + item.poster_path}
                    alt={item.title || "Movie Poster"}
                    className="w-[160px] h-[100px] rounded-lg object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[766px] p-6 bg-[#0f0f0f] rounded-[10px] border border-neutral-800 flex-col justify-center items-start gap-5 flex">
        <div className="self-stretch h-[89px] flex-col justify-center items-start gap-3 flex">
          <div className="self-stretch text-white text-base font-semibold font-['Manrope'] leading-normal">
            First Name
          </div>
          <div className="self-stretch p-4 bg-[#141414] rounded-md border border-neutral-800 justify-start items-center gap-[77px] inline-flex overflow-hidden">
            <div className="grow shrink basis-0 text-[#999999] text-sm font-normal font-['Manrope'] leading-[21px]">
              Enter First Name
            </div>
          </div>
        </div>
        <div className="self-stretch h-[89px] flex-col justify-start items-start gap-3 flex">
          <div className="self-stretch text-white text-base font-semibold font-['Manrope'] leading-normal">
            Last Name
          </div>
          <div className="self-stretch p-4 bg-[#141414] rounded-md border border-neutral-800 justify-start items-center gap-[77px] inline-flex">
            <input
              className="grow shrink basis-0 text-[#999999] bg-[#141414] text-sm font-normal font-['Manrope'] leading-[21px]"
              type="text"
              placeholder="Enter Last Name"
              name="last_name"
            />
          </div>
        </div>
        <div className="self-stretch h-[89px] flex-col justify-start items-start gap-3 flex">
          <div className="self-stretch text-white text-base font-semibold font-['Manrope'] leading-normal">
            Email
          </div>
          <div className="self-stretch p-4 bg-[#141414] rounded-md border border-neutral-800 justify-start items-center gap-[77px] inline-flex">
            <div className="grow shrink basis-0 text-[#999999] text-sm font-normal font-['Manrope'] leading-[21px]">
              Enter your Email
            </div>
          </div>
        </div>
        <div className="self-stretch h-[89px] flex-col justify-start items-start gap-3 flex">
          <div className="self-stretch text-white text-base font-semibold font-['Manrope'] leading-normal">
            Phone Number
          </div>
          <div className="self-stretch justify-start items-center gap-3 inline-flex">
            <div className="self-stretch px-2 bg-[#141414] rounded-md border border-neutral-800 justify-start items-center gap-1 flex">
              <img
                className="w-9 h-6 rounded-sm"
                src="https://via.placeholder.com/36x24"
              />
              <div className="w-5 h-5 relative  overflow-hidden" />
            </div>
            <div className="grow shrink basis-0 h-[53px] p-4 bg-[#141414] rounded-md border border-neutral-800 justify-start items-center gap-[77px] flex">
              <div className="grow shrink basis-0 text-[#999999] text-sm font-normal font-['Manrope'] leading-[21px]">
                Enter Phone Number
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[145px] flex-col justify-start items-start gap-3 flex">
          <div className="self-stretch text-white text-base font-semibold font-['Manrope'] leading-normal">
            Message
          </div>
          <div className="self-stretch h-[109px] p-4 bg-[#141414] rounded-md border border-neutral-800 justify-start items-start gap-[77px] inline-flex">
            <div className="grow shrink basis-0 text-[#999999] text-sm font-normal font-['Manrope'] leading-[21px]">
              Enter your Message
            </div>
          </div>
        </div>
        <div className="self-stretch h-[117px] flex-col justify-center items-start gap-5 flex">
          <div className="self-stretch justify-start items-center gap-2 inline-flex">
            <div className="w-6 h-6 bg-[#0f0f0f] rounded border border-neutral-800" />
            <div className="grow shrink basis-0 text-[#999999] text-base font-normal font-['Manrope'] leading-normal">
              I agree with Terms of Use and Privacy Policy
            </div>
          </div>
          <div className="self-stretch px-5 py-3.5 bg-[#e50000] rounded-md justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-sm font-semibold font-['Manrope'] leading-[21px]">
              Send Message
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendMessage;
