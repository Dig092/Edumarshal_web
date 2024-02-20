import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import DateCarousel from "./dateCarousel";
import { memoizedSelectDate } from "../../../../store/store";

const Day = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [filteredAttendance, setFilteredAttendance] = useState([]);

  const selectedDate = useSelector((state) => memoizedSelectDate(state));

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get(
          "https://akgec-edu.onrender.com/v1/student/attendance",
          { withCredentials: true }
        );

        const sortedAttendance = response.data.map((subjectData) => ({
          ...subjectData,
          attendance: subjectData.attendance.sort(
            (a, b) => new Date(a.date) - new Date(b.date)
          ),
        }));

        setAttendanceData(sortedAttendance);
        filterAttendanceData(selectedDate);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAttendanceData();
  }, [selectedDate]);

  const handleDateSelect = (date) => {
    filterAttendanceData(date);
  };

  const filterAttendanceData = (date) => {
    console.log(date);
    const filteredData = attendanceData.filter((subjectData) =>
      subjectData.attendance.some(
        (item) =>
          new Date(item.date).toDateString() === new Date(date).toDateString()
      )
    );

    setFilteredAttendance(filteredData);
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <DateCarousel
          onDateSelect={handleDateSelect}
          defaultDate={selectedDate}
        />
      </div>

      {filteredAttendance.map((subjectData) => (
        <div key={subjectData.subject} className="flex pt-4">
          <ul className="flex px-6 w-full">
            <li className="px-7 py-3 rounded-xl flex bg-[#F2F6FF] w-full justify-between">
              <h2 className="text-lg font-semibold">{subjectData.subject}</h2>
              <div className="flex gap-4">
                {subjectData.attendance.map((item, dateIndex) => {
                  const attendanceDate = new Date(item.date).toDateString();

                  if (attendanceDate === selectedDate.toDateString()) {
                    const status = item.attended || item.isAc ? "P" : "A";
                    const backgroundColor =
                      status === "P" ? "bg-green-500" : "bg-red-500";

                    return (
                      <li
                        key={dateIndex}
                        className={`list-none mx-2 ${backgroundColor} px-3 py-1 text-white font-semibold rounded-lg`}
                      >
                        {status}
                      </li>
                    );
                  }

                  return null;
                })}
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Day;
