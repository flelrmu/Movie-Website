import React, { useEffect, useState } from "react";
import mergeImages from "merge-images";
import GlobalApi from "../Services/GlobalApi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function ImageContainer() {
  const [mergedImage, setMergedImage] = useState(null);
  const [movieList, setMovieList] = useState([]);
  const elementRef = React.useRef(null);

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    try {
      const responsePage1 = await GlobalApi.getPopularMovies(1);
      const responsePage2 = await GlobalApi.getPopularMovies(2);

      const allMovies = [...responsePage1.data.results, ...responsePage2.data.results];

      setMovieList(allMovies.slice(0, 36));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };


  useEffect(() => {
    mergeImages([
      { src: "/images/image1.svg", x: 105, y: 100, width: 60, height: 60 },
      { src: "/images/image2.svg", x: 0, y: 0, width: 30, height: 30 },
    ])
      .then((b64) => setMergedImage(b64))
      .catch((err) => console.error("Error merging images: ", err));
  }, []);

  return (
    <div className="absolute left-0 w-full h-auto flex-col justify-start items-center inline-flex">
      <div className="self-stretch h-auto flex-col justify-start items-start gap-2.5 flex">
        <img
          className="w-full object-cover h-[810px] mix-blend-overlay rounded-xl"
          src="/images/Image.png"
        />
         <div
          ref={elementRef}
          className="absolute self-stretch grid grid-cols-9 grid-rows-4 gap-4"
        >
          {movieList.map((item) => (
            <img
              key={item.id}
              src={IMAGE_BASE_URL + item.poster_path}
              alt={item.title || "Movie Poster"}
              className="w-full h-full object-cover rounded-xl"
            />
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#141414] to-transparent pointer-events-none z-5" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent  to-[#141414] to-[85%] pointer-events-none z-5" />
        <div className="">
          <div className=" left-[482px] top-[190px] absolute">
            {mergedImage && (
              <img
                src={mergedImage}
                alt="Merged Icon"
                className="w-[300px] h-[300px]"
              />
            )}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 self-stretch h-[237px] px-[150px] flex-col justify-start items-center gap-10 flex">
        <div className="self-stretch h-[145px] flex-col justify-start items-start gap-2.5 flex">
          <div className="self-stretch text-center text-white text-5xl font-bold font-['Manrope'] leading-[72px]">
            The Best Streaming Experience
          </div>
          <div className="self-stretch text-center text-[#999999] text-sm font-normal font-['Manrope'] leading-[21px]">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </div>
        </div>
        <div className="px-6 py-3.5 bg-[#e50000] rounded-lg justify-start items-center gap-1 inline-flex">
          <div className="w-6 h-6 relative">
            <img src="/images/play.svg" alt="" />
          </div>
          <div className="text-white text-sm font-semibold font-['Manrope'] leading-[21px]">
            Start Watching Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageContainer;
