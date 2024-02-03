import React, { useState } from "react";

const Attendance = () => {
  const [activeoption, setActiveoption] = useState(0);
  const handleoptionClick = (index) => {
    setActiveoption(index);
  };

  return (
    <div className="bg-[#ffffff] h-[72vh] rounded-3xl mx-4 mt-4 overflow-y-auto flex flex-col justify-center items-center">
        
      <div className="my-6 w-[95%] sticky bg-white ml-4 flex flex-wrap items-center justify-between">
        <div>Overall Attendance</div>
        <div className="flex gap-5 pr-8">
          <h1>Month</h1>
          <h1>Week</h1>
          <h1>Day</h1>
        </div>
      </div>

      <div className="w-[94%]  h-[2px] bg-[#D9D9D9] mb-6"></div>

      {activeoption === 0 && (
        <div className="w-[95%] m-auto flex h-full justify-evenly">
          <div className="w-[25%] bg-[#F2F6FF] h-full rounded-2xl">

          </div>
          <div className="w-[70%] bg-[#F2F6FF] h-full rounded-2xl"></div>
        </div>
      )}
    </div>
  );
};

export default Attendance;
