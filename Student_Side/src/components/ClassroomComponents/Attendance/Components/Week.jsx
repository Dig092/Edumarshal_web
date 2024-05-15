/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import WeekSelector from "./WeekSelector";
import axios from "axios";

const Week = () => {
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [dateRange, setDateRange] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

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
          import.meta.env.VITE_BACKEND_API + "/v1/student/attendance",
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

    const checkScreenSize = () => {
      setIsSmallDevice(window.innerWidth < 768); // Change the width according to your breakpoint
    };

    // Listen for resize events to update screen size state
    window.addEventListener("resize", checkScreenSize);

    // Call it initially to set the initial state
    checkScreenSize();

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const weekdays = isSmallDevice
    ? dateRange.filter((date) => date.getDay() >= 1 && date.getDay() <= 5)
    : dateRange;

  // Map weekdays to daysOfWeek, extracting the first two letters for small screens
  const daysOfWeek = weekdays.map((date) =>
    isSmallDevice
      ? date.toLocaleDateString("en-US", { weekday: "short" }).slice(0, 2)
      : date.toLocaleDateString("en-US", { weekday: "short" })
  );

  return (
    <>
      <div className="w-full flex flex-col items-center justify-start rounded-2xl">
        <div className="w-full grid grid-flow-col grid-cols-7 md:grid-cols-9 gap-2 md:gap-0 justify-center items-center px-8 py-2">
          <div className="col-span-2">
            <WeekSelector onWeekChange={handleWeekChange} />
          </div>
          {weekdays.map((date, index) => (
            <div
              key={index}
              className="flex items-center justify-center col-span-1  md:w-[65px] h-[49px] bg-[#F2F6FF] rounded-lg"
            >
              <h1 className="font-semibold text-[#004BB8] ">
                {date.toLocaleDateString("en-US", {
                  day: "numeric",
                })}
              </h1>
            </div>
          ))}
        </div>

        <div className="w-[94%] flex items-center justify-center">
          <div className="w-full grid grid-flow-col grid-cols-7 md:grid-cols-9 my-2 px-4 md:px-8 py-2 bg-[#004BB8] text-white rounded-lg">
            <div className=" col-span-2">
              {isSmallDevice ? <h1>SUB</h1> : <h1>SUBJECT</h1>}
            </div>
            {daysOfWeek.map((day, index) => (
              <div className="flex items-center justify-center md:justify-start col-span-1">
                <h1 key={index} className="col-span-1">
                  {day}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[94%] lg:h-1/2 xl:h-[65%] my-2 overflow-y-auto">
          {/* Display subject-wise attendance data */}
          {Array.isArray(attendanceData) &&
            attendanceData.map((subjectData, subjectIndex) => (
              <div
                key={`${subjectData.subject}-${subjectData.totalClasses}`}
                className="w-full grid grid-flow-row grid-cols-7 md:grid-cols-9 px-4 md:px-8 my-4 py-2 bg-[#F2F6FF] text-black rounded-lg"
              >
                {isSmallDevice ? (
                  <h1 className="font-semibold col-span-2">
                    {subjectData.subject.slice(0, 4)}
                  </h1>
                ) : (
                  <h1 className="font-semibold col-span-2">
                    {subjectData.subject}
                  </h1>
                )}
                {weekdays.map((date, index) => {
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
                      className={`flex items-center justify-center w-[34px] col-span-1 ${
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
                            status === "P" ? "text-green-500" : "text-red-500";

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
                        <h1 className="font-semibold mx-1 text-gray-500">NC</h1>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Week;
