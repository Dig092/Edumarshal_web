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
  const imageAnimation = useSpring({
    opacity: visibleImage ? 1 : 0, 
    transform: `scale(${visibleImage ? 1 : 0})`,
  });

  return (
    <div className="bg-[#f2f6ff] h-[68vh] rounded-3xl mx-12 mt-4 overflow-y-auto">
      <div className="h-[44px] bg-[#004BB8] m-10 rounded-[0.5rem] items-center flex cursor-pointer" onClick={() => handleClick("image1")}>
        <div className="text-white ml-10 font-semibold text-base">B.TECH 2nd to 4th  ( 2023 - 2024 )</div>
      </div>
      {visibleImage === "image1" && (
        <animated.div style={imageAnimation} className="mx-12">
          <img src="./btech-2nd-4th.svg" alt="Image1" />
        </animated.div>
      )}

      <div className="h-[44px] bg-[#004BB8] m-10 rounded-[0.5rem] items-center flex cursor-pointer" onClick={() => handleClick("image2")}>
        <div className="text-white ml-10 font-semibold text-base">B.TECH 2nd to 4th ( FW )  ( 2023 - 2024 )</div>
      </div>
      {visibleImage === "image2" && (
        <animated.div style={imageAnimation} className="mx-12">
          <img src="./btech fw fees.svg" alt="Image2" />
        </animated.div>
      )}

      <div className="h-[44px] bg-[#004BB8] m-10 rounded-[0.5rem] items-center flex cursor-pointer" onClick={() => handleClick("image3")}>
        <div className="text-white ml-10 font-semibold text-base">B.TECH 3rd to 4th ( Lateral Entry )  ( 2023 - 2024 )</div>
      </div>
      {visibleImage === "image3" && (
        <animated.div style={imageAnimation} className="mx-12">
          <img src="./btech lateral fees.svg" alt="Image3" />
        </animated.div>
      )}

      <div className="h-[44px] bg-[#004BB8] m-10 rounded-[0.5rem] items-center flex cursor-pointer" onClick={() => handleClick("image4")}>
        <div className="text-white ml-10 font-semibold text-base">MCA-2nd Year  ( 2023 - 2024 )</div>
      </div>
      {visibleImage === "image4" && (
        <animated.div style={imageAnimation} className="mx-12">
          <img src="./Mba2ndfees.svg" alt="Image4" />
        </animated.div>
      )}
    </div>
  );
}
