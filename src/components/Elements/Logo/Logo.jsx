import React, { useEffect, useState } from "react";
import mergeImages from "merge-images";

function Logo() {
  const [mergedImage, setMergedImage] = useState(null);

  useEffect(() => {
    mergeImages([
      { src: "/images/icon.svg", x: 20, y: 20, width: 60, height: 60 },
      { src: "/images/vector.svg", x: 0, y: 0, width: 30, height: 30 },
    ])
      .then((b64) => setMergedImage(b64))
      .catch((err) => console.error("Error merging images: ", err));
  }, []);

  return (
    <>
      <div className="w-[35px] md:w-[40px] h-[35px] md:h-[40px] relative flex-col justify-center items-center flex">
        {mergedImage && (
          <img
            src={mergedImage}
            alt="Merged Icon"
            className="w-[60px] h-[60px]"
          />
        )}
      </div>
      <div className="w-[60px] md:w-[80px]">
        <img src="/images/StreamVibe.svg" alt="StreamVibe" />
      </div>
    </>
  );
}

export default Logo;
