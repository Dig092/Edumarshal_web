import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DateCarousel = ({ onDateSelect }) => {
  const sliderRef = useRef(null);
  const selectedDateRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const getDatesInWeek = (startDate) => {
    const dates = [];
    const currentDate = new Date(startDate);

    for (let i = 0; i < 7; i++) {
      dates.push(
        new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() + i
        )
      );
    }

    return dates;
  };

  const handleDateClick = (date) => {
    selectedDateRef.current = date;
    onDateSelect(date); // Call the function from the parent component
  };

  const getWeeks = () => {
    const startDate = new Date();
    const weeks = [];

    for (let i = 0; i < 4; i++) {
      const endDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + 6
      );
      const week = {
        start: startDate.toDateString(),
        end: endDate.toDateString(),
        dates: getDatesInWeek(startDate),
      };
      weeks.push(week);

      startDate.setDate(endDate.getDate() + 1); // Move to the next week
    }

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return weeks.map((week, weekIndex) => (
      <div key={weekIndex} className="text-center">
        <div className="flex justify-around items-center">
          {week.dates.map((date, dateIndex) => (
            <div
              key={dateIndex}
              className="flex flex-col px-6 py-1 items-center justify-center cursor-pointer transition duration-300"
              style={{
                backgroundColor: selectedDateRef.current === date ? "#004BB8" : "#F2F6FF",
                color: selectedDateRef.current === date ? "white" : "black",
                borderRadius: "8px",
              }}
              onClick={() => handleDateClick(date)}
            >
              <div className="text-md font-semibold">{date.getDate()}</div>
              <div className="text-sm text-gray-500">
                {dayNames[date.getDay()]}
              </div>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="grid grid-cols-9 items-center my-4">
      <button onClick={handlePrev} className="col-span-1 justify-self-center">
        {"<"}
      </button>

      <Slider ref={sliderRef} {...settings} className="col-span-7">
        {getWeeks()}
      </Slider>

      <button onClick={handleNext} className="col-span-1 justify-self-center">
        {">"}
      </button>
    </div>
  );
};

export default DateCarousel;
