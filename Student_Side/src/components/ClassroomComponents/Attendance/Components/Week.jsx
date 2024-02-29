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
      <div className="w-full grid grid-flow-row items-start justify-center h-full rounded-2xl">
        <div className="w-full grid grid-flow-col grid-cols-9 justify-center items-center px-8 py-2 gap-11">
          <div className="col-span-2">
          <WeekSelector onWeekChange={handleWeekChange} />
          </div>
          {dateRange.map((date, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-[65px] h-[49px] bg-[#F2F6FF] rounded-lg"
            >
              <h1 className="font-semibold text-[#004BB8] col-span-1">
                {date.toLocaleDateString("en-US", { day: "numeric" })}
              </h1>
            </div>
          ))}
        </div>

        <div className="grid grid-flow-col grid-cols-9 ml-8 my-2 px-8 py-2 gap-16 lg:gap-12 xl:gap-10 bg-[#004BB8] text-white rounded-lg">
          <h1 className="col-span-2">SUBJECT</h1>
          {daysOfWeek.map((day, index) => (
            <h1 key={index} className="col-span-1">
              {day}
            </h1>
          ))}
        </div>

        <div className="w-[100%] h-[65%] lg:h-[60%] xl:h-3/4 overflow-y-auto">
          {/* Display subject-wise attendance data */}
          {Array.isArray(attendanceData) &&
            attendanceData.map((subjectData, subjectIndex) => (
              <div
                key={`${subjectData.subject}-${subjectData.totalClasses}`}
                className="grid grid-flow-col grid-cols-9 gap-20 xl:gap-6 ml-8 px-8 my-4 py-2 bg-[#F2F6FF] text-black rounded-lg"
              >
                <h1 className=" font-semibold col-span-2">{subjectData.subject}</h1>
                <div className="grid grid-flow-col gap-[52px] xl:gap-[68px] col-span-1">
                  {dateRange.map((date, index) => {
                    const attendanceForDate =
                      subjectData.attendance &&
                      subjectData.attendance.filter(
                        (entry) =>
                          new Date(entry.date).toLocaleDateString("en-US") ===
                          date.toLocaleDateString("en-US")
                      );

                    return (
                      <div
                        key={index}
                        className={`flex  w-[34px] items-center justify-center ${
                          attendanceForDate.length > 0
                            ? "text-[#D9D9D9]"
                            : "text-green-500"
                        } rounded-lg`}
                      >
                        {attendanceForDate.length > 0 ? (
                          attendanceForDate.map((entry, entryIndex) => {
                            const status =
                              entry.attended || entry.isAc ? "P" : "A";
                            const textClass =
                              status === "P"
                                ? "text-green-500"
                                : "text-red-500";

                            return (
                              <h1
                                key={entryIndex}
                                className={`font-semibold mx-1 ${textClass}`}
                              >
                                {status}
                              </h1>
                            );
                          })
                        ) : (
                          // Display "NC" for days with no class
                          <h1 className="font-semibold mx-1 text-gray-500">
                            NC
                          </h1>
                        )}
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
