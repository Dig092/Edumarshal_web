import React, { useState, useEffect } from "react";
import WeekSelector from "./WeekSelector";
import axios from "axios";

const Week = () => {
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [dateRange, setDateRange] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);

  const handleWeekChange = (week) => {
    setSelectedWeek(week);
  };

  const generateDateRange = (selectedWeek) => {
    const currentDate = new Date();
    const startOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );

    // Calculate the start date of the selected week
    const startOfWeek = new Date(startOfMonth);
    startOfWeek.setDate(startOfMonth.getDate() + (selectedWeek - 1) * 7);

    // Calculate the end date of the selected week
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    const range = [];
    let currentDay = new Date(startOfWeek);

    while (currentDay <= endOfWeek) {
      range.push(new Date(currentDay));
      currentDay.setDate(currentDay.getDate() + 1);
    }

    return range;
  };

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get(
          "https://akgec-edu.onrender.com/v1/student/attendance",
          { withCredentials: true }
        );

        // Sort attendance data by date
        const sortedAttendance = response.data.map((subjectData) => ({
          ...subjectData,
          attendance: subjectData.attendance.sort(
            (a, b) => new Date(a.date) - new Date(b.date)
          ),
        }));

        setAttendanceData(sortedAttendance);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAttendanceData();
  }, []);

  useEffect(() => {
    const newDateRange = generateDateRange(selectedWeek);
    setDateRange(newDateRange);
  }, [selectedWeek]);

  useEffect(() => {
    const currentDate = new Date();
    const startOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const firstDayOfMonth = startOfMonth.getDay();
    const offset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 2;

    const daysIntoMonth = currentDate.getDate() - 2;
    const currentWeek = Math.ceil((daysIntoMonth + offset) / 7);
    setSelectedWeek(currentWeek);
  }, []);

  const daysOfWeek = dateRange.map((date) =>
    date.toLocaleDateString("en-US", { weekday: "short" })
  );

  return (
    <div>
      <div className=" flex flex-col items-start h-full rounded-2xl">
        <div className="flex justify-center items-center px-8 py-2 gap-11">
          <WeekSelector onWeekChange={handleWeekChange} />
          {dateRange.map((date, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-[65px] h-[49px] bg-[#F2F6FF] rounded-lg"
            >
              <h1 className="font-semibold text-[#004BB8]">
                {date.toLocaleDateString("en-US", { day: "numeric" })}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex ml-8 my-2 px-8 py-2 gap-16 bg-[#004BB8] text-white rounded-lg">
          <h1 className="mr-16">SUBJECT</h1>
          {daysOfWeek.map((day, index) => (
            <h1 key={index} className="mr-4">
              {day}
            </h1>
          ))}
        </div>

        <div className="grid  h-[65%] overflow-y-auto">
          {/* Display subject-wise attendance data */}
          {Array.isArray(attendanceData) &&
            attendanceData.map((subjectData, subjectIndex) => (
              <div
                key={`${subjectData.subject}-${subjectData.totalClasses}`}
                className="flex ml-8 px-8 my-2 py-2 bg-[#F2F6FF] text-black rounded-lg"
              >
                <h1 className="w-52 font-semibold">{subjectData.subject}</h1>
                <div className="grid grid-flow-row-dense grid-cols-7 gap-24">
                  {dateRange.map((date, index) => {
                    const attendanceForDate =
                      subjectData.attendance &&
                      subjectData.attendance.filter(
                        (entry) =>
                          new Date(entry.date).toLocaleDateString("en-US") ===
                          date.toLocaleDateString("en-US")
                      );

                    let textClass = "text-[#D9D9D9]"; // Default NC text color
                    let displayContent = "NC";

                    if (attendanceForDate && attendanceForDate.length > 0) {
                      const isAbsent = attendanceForDate.every(
                        (entry) => !entry.attended && !entry.isAc
                      );

                      const repeatContent = isAbsent ? "A" : "P";
                      textClass = isAbsent ? "text-red-500" : "text-green-500";
                      displayContent = repeatContent.repeat(
                        attendanceForDate.length
                      );
                    }

                    return (
                      <div
                        key={index}
                        className={`flex items-center justify-center ${textClass} rounded-lg`}
                      >
                        <h1 className="font-semibold">{displayContent}</h1>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Week;
