import React, {useEffect, useState} from "react";
import mergeImages from "merge-images";

function Watermark() {
    const [mergedImage, setMergedImage] = useState(null);

    useEffect(() => {
        mergeImages([
          { src: "/images/image1.svg", x: 105, y: 100, width: 60, height: 60 },
          { src: "/images/image2.svg", x: 0, y: 0, width: 30, height: 30 },
        ])
          .then((b64) => setMergedImage(b64))
          .catch((err) => console.error("Error merging images: ", err));
      }, []);
  return (
    <div className=" left-[482px] top-[190px] absolute">
      {mergedImage && (
        <img
          src={mergedImage}
          alt="Merged Icon"
          className="w-[300px] h-[300px]"
        />
      )}
    </div>
  );
}

export default Watermark;
