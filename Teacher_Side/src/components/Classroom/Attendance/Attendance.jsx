/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";

import SwitchTimePeriod from "./SwitchTimePeriod";
import Day from "./Day";
import Month from "./Month";
import monthNames from "../../../constants/Month.json";

const Attendance = ({sectionId}) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const monthNumber = currentDate.getMonth();
  const monthName = monthNames[monthNumber];
  const date = currentDate.getDate();

  const [activeItem, setActiveItem] = useState(1);
  const handleSwitchChange = (value) => {
    setActiveItem(value);
  };

  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_API}/v1/teacher/sectionStudents/${sectionId}`,
            { withCredentials: true }
          );
          setAttendance(response.data);
        } catch (error) {
          console.log(error);
        }
      };
  
      if (sectionId) {
        fetchAttendance();
      }
    }, [sectionId]);

  return (
    <div className="w-full bg-[#ffffff] rounded-3xl mx-4 mt-4 overflow-hidden flex flex-col justify-center items-center">
      <div className="my-4 w-[95%] flex flex-col md:flex-row ml-4 items-center justify-between">
        <div className=" text-black font-semibold mb-4 md:mb-0">
          Overall Attendance
        </div>
        <div className="hidden md:block">
          {date} {monthName}, {year}
        </div>
        <SwitchTimePeriod
          onSwitchChange={handleSwitchChange}
          activeIndex={activeItem}
        />
      </div>

      <div className="w-[94%] opacity-10 h-[2px] bg-[#111111] rounded"></div>

      <div className="md:w-3/4 pt-6 flex  items-start  rounded-2xl">
        {activeItem === 0 && <Day attendanceData={attendance} />}
        {activeItem === 1 && <Month attendanceData={attendance} />}
      </div>
    </div>
  );
};

export default Attendance;
