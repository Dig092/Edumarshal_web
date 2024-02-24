import React, { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgressbar } from "react-circular-progressbar";
import { useLocation } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";

import SwitchTimePeriod from "./Components/SwitchTimePeriod";
import Day from "./Components/Day";
import Week from "./Components/Week";
import Month from "./Components/Month";
import monthNames from "../../../constants/Month.json";

const Attendance = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const monthNumber = currentDate.getMonth();
  const monthName = monthNames[monthNumber];
  const date = currentDate.getDate();

  const [activeItem, setActiveItem] = useState(1);
  const handleSwitchChange = (value) => {
    setActiveItem(value);
  };

  const [attendance, setAttendace] = useState([]);
  
  const [selectedSubject, setSelectedSubject] = useState(
    attendance.length > 0 ? attendance[0].subject : null
  );

  const handleSubjectClick = (subjectName) => {
    setSelectedSubject(subjectName);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://akgec-edu.onrender.com/v1/student/attendance",
          { withCredentials: true }
        );
        setAttendace(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-[#ffffff] h-3/4 rounded-3xl mx-4 mt-4 overflow-hidden flex flex-col justify-center items-center">
      <div className="my-2 w-[95%] sticky flex ml-4 items-center justify-between">
        <div className="py-4 text-black">Overall Attendance</div>
        <div>
          {date} {monthName}, {year}
        </div>
        <SwitchTimePeriod
          onSwitchChange={handleSwitchChange}
          activeIndex={activeItem}
        />
      </div>

      <div className="w-[94%] opacity-20 h-[2px] bg-[#d9d9d9] rounded"></div>

      <div className="w-[95%] m-auto flex h-5/6 justify-evenly">
        <div className="w-[25%] flex flex-col overflow-y-scroll bg-[#F2F6FF] h-full rounded-2xl">
          <div className="pt-6 pb-3 px-6">All Subjects</div>
          <div className="w-[100%] mb-3 h-[1px] bg-[#D9D9D9]"></div>
          <div className="flex flex-col items-center">
            {attendance.map((subject) => (
              <div
              key={subject.subject}
              className={`flex my-3 justify-center shadow-md rounded-2xl bg-white cursor-pointer ${
                selectedSubject === subject.subject ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => handleSubjectClick(subject.subject)}
              >
                <div className="flex flex-col">
                  <h1 className="px-6 pt-4 font-medium text-lg">
                    {subject.subject}
                  </h1>
                  <h1 className="px-6 pb-4">
                    Attendance - {subject.totalPresent}/{subject.totalClasses}
                  </h1>
                </div>
                <div style={{ width: 60, height: 60 }} className="my-4 mx-4 ">
                  <CircularProgressbar
                    value={(subject.totalPresent / subject.totalClasses) * 100}
                    text={`${(
                      (subject.totalPresent / subject.totalClasses) *
                      100
                    ).toFixed(0)}%`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[70%] flex flex-col items-start h-full rounded-2xl">
          {activeItem === 0 && <Day attendanceData={attendance} />}
          {activeItem === 1 && <Week attendanceData={attendance} />}
          {activeItem === 2 && <Month attendanceData={attendance} subjectName={selectedSubject} />}
        </div>
      </div>
    </div>
  );
};

export default Attendance;
