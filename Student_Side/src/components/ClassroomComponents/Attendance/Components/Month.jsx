import React, { useState, useEffect } from "react";

const Month = ({ attendanceData, subjectName }) => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // Initialize with the current month
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [defaultSubject, setDefaultSubject] = useState("");
  const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();

  useEffect(() => {
    if (attendanceData.length > 0 && !subjectName) {
      setDefaultSubject(attendanceData[0].subject);
    }
  }, [attendanceData, subjectName]);

  return (
    <div className="w-full mb-4 justify-center items-center">
      {/* Month and Year picker */}
      <div className="flex items-center justify-start mb-6 ">
        <label className="mr-2 font-semibold">Month :</label>
        <select
          className="border p-1 rounded-lg border-blue-500"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
        >
          {Array.from({ length: 12 }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>

        <label className="mx-2 ml-7 font-semibold">Year :</label>
        <input
          type="number"
          className="border p-1 rounded-lg border-blue-500"
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
        />
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-4 rounded-xl bg-[#F2F6FF]">
        {/* Weekday headers */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
          (weekday, index) => (
            <div
              key={index}
              className="text-center p-2 rounded-lg bg-[#004BB8] text-white"
            >
              {weekday}
            </div>
          )
        )}

        {/* Calendar days */}
        {Array.from({ length: daysInMonth }, (_, index) => index + 1).map(
          (day) => {
            const subjectToShow = subjectName || defaultSubject;

            const attendanceInfo = attendanceData.find(
              (subject) => subject.subject === subjectToShow
            );

            const attendanceDay = attendanceInfo
              ? attendanceInfo.attendance.filter(
                  (attendance) =>
                    new Date(attendance.date).getDate() === day &&
                    new Date(attendance.date).getMonth() + 1 ===
                      selectedMonth &&
                    new Date(attendance.date).getFullYear() === selectedYear
                )
              : [];

            return (
              <div key={day} className="text-center">
                {/* Display date */}
                <div className="p-1 font-semibold">
                  {day === new Date().getDate() &&
                  selectedMonth === new Date().getMonth() + 1 &&
                  selectedYear === new Date().getFullYear() ? (
                    <span className="bg-[#004BB8] text-white rounded-lg px-4 py-2">
                      {day}
                    </span>
                  ) : (
                    <span>{day}</span>
                  )}
                </div>

                {/* Display A or P below the date */}
                <div className="p-1">
                  {attendanceDay.length > 0 ? (
                    attendanceDay.map((attendance, index) => (
                      <span
                        key={index}
                        className={`text-xs ${
                          attendance.attended || attendance.isAc
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {attendance.attended || attendance.isAc ? "P" : "A"}
                      </span>
                    ))
                  ) : (
                    // Display "NC" for days with no class
                    <span className="text-xs text-gray-500">NC</span>
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Month;
