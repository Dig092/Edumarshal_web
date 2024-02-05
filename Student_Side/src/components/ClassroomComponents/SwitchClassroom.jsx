import React from "react";

const ClassroomSections = ["Attendance", "Assignments", "Class Notes", "Exams", "Syllabus", "Feedback"];

function SwitchClassroom({ activeIndex, onSwitchChange }) {
  return (
    <div className="flex gap-6 cursor-pointer">
      {ClassroomSections.map((item, index) => (
        <div
          key={index}
          onClick={() => onSwitchChange(index)}
          className={`${
            activeIndex === index
              ? "bg-[#004BB8] text-white"
              : "bg-[#F2F6FF] text-black"
          } h-[45px] flex items-center justify-center p-3 px-5 font-medium text-base rounded-[0.5rem] cursor-pointer`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default SwitchClassroom;