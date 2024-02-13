import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function FeeStructure() {
  const [visibleImage, setVisibleImage] = useState(null);

  const handleClick = (imageName) => {
    if (visibleImage === imageName) {
      setVisibleImage(null);
    } else {
      setVisibleImage(imageName);
    }
  };
  const getImageUrl = (imageName) => {
    const imageUrls = {
      image1: "./btech-2nd-4th.svg",
      image2: "./btech fw fees.svg",
      image3: "./btech lateral fees.svg",
      image4: "./Mba2ndfees.svg",
    };
    return imageUrls[imageName];
  };
  
  const handleImageDownload = (imageName) => {
    const imageUrl = getImageUrl(imageName);
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `${imageName}.svg`;
    link.click();
  };
  const imageAnimation = useSpring({
    opacity: visibleImage ? 1 : 0,
    transform: `scale(${visibleImage ? 1 : 0})`,
  });

  return (
    <div className="bg-[#f2f6ff]  md:rounded-3xl rounded-xl  overflow-y-auto">
      <div className="h-[50px] bg-[#004BB8] my-5 mb-10 sm:mx-10 mx-3 rounded-[0.5rem] items-center flex cursor-pointer md:mt-20 mt-10" onClick={() => handleClick("image1")}>
        <div className="text-white  md:font-semibold sm:text-base text-xs px-3 md:pl-10">B.TECH 2nd to 4th  ( 2023 - 2024 )</div>
      </div>
      {visibleImage === "image1" && (
        <animated.div style={imageAnimation} className="md:mx-12 m-2">
          <img src="./btech-2nd-4th.svg" alt="Image1" className="cursor-pointer"  onClick={() => handleImageDownload("image1")}/>
        </animated.div>
      )}

      <div className="h-[50px] bg-[#004BB8] my-5 mb-10 sm:mx-10 mx-3 rounded-[0.5rem] items-center flex cursor-pointer" onClick={() => handleClick("image2")}>
        <div className="text-white  md:font-semibold sm:text-base text-xs pl-2 md:pl-10">B.TECH 2nd to 4th(FW)(2023 - 2024)</div>
      </div>
      {visibleImage === "image2" && (
        <animated.div style={imageAnimation} className="md:mx-12 m-2">
          <img src="./btech fw fees.svg" alt="Image2" className="cursor-pointer" onClick={() => handleImageDownload("image2")} />
        </animated.div>
      )}

      <div className="h-[50px] bg-[#004BB8] my-5 mb-10 sm:mx-10 mx-3  rounded-[0.5rem] items-center flex cursor-pointer" onClick={() => handleClick("image3")}>
        <div className="text-white  md:font-semibold sm:text-base text-xs px-2 md:pl-10">B.TECH 3rd to 4th(Lateral Entry)(2023 - 2024)</div>
      </div>
      {visibleImage === "image3" && (
        <animated.div style={imageAnimation} className="md:mx-12 m-2">
          <img src="./btech lateral fees.svg" alt="Image3" className="cursor-pointer" onClick={() => handleImageDownload("image3")}/>
        </animated.div>
      )}

      <div className="h-[50px] bg-[#004BB8]  my-5 mb-10 sm:mx-10 mx-3 rounded-[0.5rem] items-center flex cursor-pointer" onClick={() => handleClick("image4")}>
        <div className="text-white  md:font-semibold sm:text-base text-xs px-3 md:pl-10">MCA-2nd Year ( 2023 - 2024 )</div>
      </div>
      {visibleImage === "image4" && (
        <animated.div style={imageAnimation} className="md:mx-12 m-2">
          <img src="./Mba2ndfees.svg" alt="Image4" className="cursor-pointer" onClick={() => handleImageDownload("image4")}/>
        </animated.div>
      )}
    </div>
  );
}
